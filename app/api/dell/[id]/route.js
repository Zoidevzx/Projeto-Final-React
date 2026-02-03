import { NextResponse } from 'next/server';
import { supabase } from '@/BackendSupTest/lib/supabaseClient';

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // tenta deletar e retornar a linha deletada
    const { data, error } = await supabase
      .from('product')
      .delete()
      .eq('id', id)
      .select(); // retorna as linhas afetadas

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ message: 'Erro no banco de dados.' }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ message: 'Produto não encontrado.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Produto deletado com sucesso.' }, { status: 200 });
  } catch (err) {
    console.error('Erro interno:', err);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
