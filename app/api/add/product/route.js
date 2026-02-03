import { NextResponse } from 'next/server';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let dados;
    if (contentType.includes('application/json')) {
      dados = await request.json();
    } else {
      const formData = await request.formData();
      dados = Object.fromEntries(formData);
    }

    const { name, description, price, image_url, category, tags } = dados;

    const { error } = await supabase
      .from('product')
      .insert([{ name, description, price: Number(price), image_url, category, tags }]);

    const proto = request.headers.get('x-forwarded-proto') || request.headers.get('x-forwarded-protocol') || 'http';
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
    const base = host ? `${proto}://${host}` : request.url; // fallback para request.url

    if (error) {
      console.error('Erro ao inserir produto:', error);
      return NextResponse.redirect(new URL('/dev/error', base), 303);
    }

    return NextResponse.redirect(new URL('/dev/added', base), 303);
  } catch (err) {
    console.error('Erro interno:', err);
    const proto = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'localhost:3000';
    return NextResponse.redirect(new URL('/dev/error', `${proto}://${host}`), 303);
  }
}
