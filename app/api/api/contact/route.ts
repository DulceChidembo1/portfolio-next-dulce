import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactRequestBody;
    const { name, email, message } = body;

    // Validação do nome
    if (!name || name.trim().length < 3) {
      return NextResponse.json(
        { message: 'Name must be at least 3 characters.' },
        { status: 400 }
      );
    }

    // Validação do email (regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Validação da mensagem
    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { message: 'Message must be at least 5 characters.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}