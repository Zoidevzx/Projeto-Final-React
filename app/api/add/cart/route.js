import { NextResponse } from 'next/server';
import { supabase } from '@/BackendSupTest/lib/supabaseClient'; // Seu caminho do Supabase

export async function POST(request) {
  try {
    // 1. Recebe os dados do front-end
    const body = await request.json();
    const { carrinho } = body;

    // 2. Calcula a soma (Igual você fazia no Express)
    const somaFinal = carrinho.reduce((soma, item) => {
        // Garante que é número e trata quantidade
        const valorItem = Number(item.value);
        const quantidade = item.quantity || 1;
        return soma + (valorItem * quantidade);
    }, 0);

    // 3. Insere no Supabase
    const { data, error } = await supabase
      .from('sale')
      .insert([
        { finalprice: somaFinal }
      ]);

    // 4. Verifica se deu erro no banco
    if (error) {
      console.error("Erro Supabase:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 5. Retorna sucesso
    return NextResponse.json({ message: 'Venda inserida com sucesso!' }, { status: 201 });

  } catch (error) {
    console.error("Erro Servidor:", error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}