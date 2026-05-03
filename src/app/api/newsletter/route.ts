import { NextRequest, NextResponse } from 'next/server';
import type { NewsletterRequest, NewsletterResponse } from '@/types';
import connectDB from '@/lib/db';
import Newsletter from '@/models/Newsletter';

export async function POST(req: NextRequest) {
  const body: NewsletterRequest = await req.json();
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const errorResp: NewsletterResponse = { message: 'Errore', error: 'Email non valida' };
    return NextResponse.json(errorResp, { status: 400 });
  }

  // Qui salviamo in un database (MongoDB) o in un file JSON
  // Esempio con console.log (in produzione usa un DB)
  console.log('Nuovo iscritto:', email);

  try {
    await connectDB();
    await Newsletter.create({ email });
    const resp: NewsletterResponse = { message: 'Iscrizione riuscita' };
    return NextResponse.json(resp);
  } catch (error: any) {
    if (error.code === 11000) {
      const errorResp: NewsletterResponse = { message: 'Errore', error: 'Email già iscritta' };
      return NextResponse.json(errorResp, { status: 409 });
    }
    const errorResp: NewsletterResponse = { message: 'Errore', error: 'Errore del server' };
    return NextResponse.json(errorResp, { status: 500 });
  }
}