import { NextResponse } from 'next/server';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

function getBaseUrl(request) {
  const proto = request.headers.get('x-forwarded-proto') || request.headers.get('x-forwarded-protocol') || 'http';
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  return host ? `${proto}://${host}` : request.url;
}

export async function POST(request, { params }) {
  try {
    const { id } = params;

    // ler body (suporta formData ou JSON)
    const contentType = request.headers.get('content-type') || '';
    let dados;
    if (contentType.includes('application/json')) {
      dados = await request.json();
    } else {
      const formData = await request.formData();
      dados = Object.fromEntries(formData);
    }

    // opcional: transformar tags em array se vier string separada por vírgula
    let { name, description, price, image_url, category, tags } = dados;
    if (typeof tags === 'string') {
      tags = tags.split(',').map(t => t.trim()).filter(Boolean);
    }

    // atualizar no Supabase
    const { data, error } = await supabase
      .from('product')
      .update({
        name,
        description,
        price: price !== undefined && price !== null && price !== '' ? Number(price) : null,
        image_url,
        category,
        tags
      })
      .eq('id', id)
      .select(); // retorna as linhas afetadas

    const base = getBaseUrl(request);

    if (error) {
      console.error('Erro ao atualizar produto:', error);
      return NextResponse.redirect(new URL('/dev/error', base), { status: 303 });
    }

    if (!data || data.length === 0) {
      // nenhum registro atualizado → 404
      return NextResponse.redirect(new URL('/dev/error', base), { status: 303 });
    }

    // sucesso
    return NextResponse.redirect(new URL('/dev/edited', base), { status: 303 });
  } catch (err) {
    console.error('Erro interno:', err);
    const base = getBaseUrl(request);
    return NextResponse.redirect(new URL('/dev/error', base), { status: 303 });
  }
}
