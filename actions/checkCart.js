
export async function FinalizarCompra(carrinho) {
    try {
        const res = await fetch('/api/add/cart', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ carrinho }),
            cache: 'no-store'
        });

        if (res.ok) {
            return { sucesso: true, mensagem: "Compra realizada!" };
        } else {
            // Tenta pegar a mensagem de erro da API
            const dadosErro = await res.json(); 
            return { sucesso: false, mensagem: "Erro: " + (dadosErro.error || res.statusText) };
        }

    } catch (erro) {
        console.error(erro);
        return { sucesso: false, mensagem: "Erro de conexão com a API." };
    }
}