'use server'

export async function FinalizarCompra(carrinho) {

    try {
        const dadosParaEnviar = {
            carrinho: carrinho.map(produto => ({
                ...produto,
                preco: Number(produto.value) * (produto.quantity || 1)
            }))
        }

        const res = await fetch('http://localhost:8000/add/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosParaEnviar),
            cache: 'no-store'
        })

        if (res.ok) {
            return { sucesso: true, mensagem: "Compra realizada!" };
        } else {
            const textoErro = await res.text();
            return { sucesso: false, mensagem: "Erro no servidor: " + textoErro };
        }

    } catch (erro) {
        console.error(erro);
        return { sucesso: false, mensagem: "Erro de conexão." };
    }
}

