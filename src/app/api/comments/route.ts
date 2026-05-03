import { NextRequest, NextResponse } from 'next/server';
import type { CommentRequest, CommentResponse } from '@/types';
import connectDB from '@/lib/db';
import Comment from '@/models/Comment';

export async function POST(req: NextRequest) {
  const body: CommentRequest = await req.json();
  const { comment } = body;
  if (!comment || comment.trim().length === 0) {
    const errorResp: CommentResponse = { message: 'Errore', error: 'Commento vuoto' };
    return NextResponse.json(errorResp, { status: 400 });
  }
  console.log('Nuovo commento:', comment);
  //const resp: CommentResponse = { message: 'Commento registrato' };
  //return NextResponse.json(resp);

  try {
    await connectDB();
    await Comment.create({ text: comment });
    const resp: CommentResponse = { message: 'Commento registrato' };
    return NextResponse.json(resp);
  } catch (error: any) {
    const errorResp: CommentResponse = { message: 'Errore', error: 'Errore del server' };
    return NextResponse.json(errorResp, { status: 500 });
  }
}