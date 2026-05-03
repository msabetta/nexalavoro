import ChatbotMessage from '@/models/ChatbotMessage';
import connectDB from '@/lib/db'; 
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json();
  
  // Connessione al DB
  await connectDB();
  
  // Salva il messaggio dell'utente
  await ChatbotMessage.create({
    sessionId,
    sender: 'user',
    text: message,
  });
  
  // ... logica di risposta ...
  const reply = 'Ciao! ...';
  
  // Salva la risposta del bot
  await ChatbotMessage.create({
    sessionId,
    sender: 'bot',
    text: reply,
  });
  
  return NextResponse.json({ reply });
}