'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Desenvolvedor({produtos}){
    const [senhacorreta] = useState('postgres')
    const [senha, setSenha] = useState('')
    const [liberado, setLiberado] = useState(false)
    const [paginaatual, setPagina]= useState("adicionar")
    const [valuep, setValuep] = useState('')
    const [url, setUrl] = useState("")
    const [hover, setHover] = useState(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [produtosdel, setProdutosDelete] = useState(produtos)
    const router = useRouter();

    function TestedeSenha(){
        if(senha === senhacorreta)
            setLiberado(true)
        else if(senha === '') 
            setValuep('Prencha o Campo')
        else 
            setValuep('Senha Errada, tente novamente')  
    }

    function enterapertado(event){
        if(event.key === 'Enter'){
        event.preventDefault();
            if(senha === senhacorreta)
            setLiberado(true)
            else if(senha === '') 
            setValuep('Prencha o Campo')
            else 
            setValuep('Senha Errada, tente novamente')  
        }
    }

    const buttonstylepage = (page) => {
    if (hover && hover !== paginaatual) {
        return page === paginaatual
        ? "bg-gray-200 text-black rounded-t-md text-xl h-11 p-2"
        : "bg-gray-200 text-black rounded-t-md text-xl h-11 p-2 hover:bg-[#9F1D1D] hover:text-white";
    }

    return page === paginaatual
        ? "bg-[#9F1D1D] text-white rounded-t-md text-xl h-11 p-2"
        : "bg-gray-200 text-black rounded-t-md text-xl h-11 p-2 hover:bg-[#9F1D1D] hover:text-white";
    };
   
    const deletarProduto = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
       setProdutosDelete(prev =>
        prev.map(p => p.id === id ? { ...p, status: "deletando" } : p)
    );
    setTimeout(() => {
    setProdutosDelete(prev => prev.filter(p => p.id !== id));
    }, 500);

    } else {
    const msg = await response.text();
    alert(msg);
    }
    } catch (error) {
      console.error("Erro ao deletar:", error);
    }
    };

    return(
        <div className="flex justify-center size-full">
            <div className="container grid grid-rows-[1fr_3fr] ">
                <div className="flex-center flex-col">
                    <h1 className="text-6xl items-bold">Dev Page</h1>
                    <p className="">Home / Page</p>
                </div>

                {!liberado &&               
                    <div className="flex justify-center ">
                        <form action="" className="flex flex-col text-center w-75 gap-4">
                            <label className="text-3xl">Digite a Senha?</label>
                            <input 
                                className='italic rounded-sm w-full h-10 pl-1 border-1 border-neutral-500' 
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)} 
                                type="password" 
                                placeholder='Enter Passowrd of Dev Page' 
                                onKeyDown={enterapertado}
                            />
                                <p>{valuep}</p>
                            <button type='button' className="bg-[#9F1D1D] rounded-sm p-2 h-10 text-white text-sm" onClick={TestedeSenha} >Enviar</button>
                        </form>
                    </div>
                }

                {liberado &&
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="flex flex-col items-center">
                            <div className="w-60 flex-center">
                                <button className={buttonstylepage("adicionar")} onClick={() => {setPagina("adicionar"); setTimeout(()=> router.refresh(),0);}}  onMouseEnter={() => setHover("adicionar")}
  onMouseLeave={() => setHover(null)} >Adicionar</button>
                                <button className={buttonstylepage("atualizar")} onClick={() => {setPagina("atualizar"); setTimeout(()=> router.refresh(),0);}}  onMouseEnter={() => setHover("atualizar")}
  onMouseLeave={() => setHover(null)}>Atualizar</button>
                                <button className={buttonstylepage("deletar")} onClick={() => {setPagina("deletar"); setTimeout(()=> router.refresh(),0);}} onMouseEnter={() => setHover("deletar")}
  onMouseLeave={() => setHover(null)}>Deletar</button>
                            </div>
                        </div>

                        {paginaatual === "adicionar" &&
                            <div >
                                <h2 className="flex-center text-3xl font-bold mb-4">Formulário De Insert</h2>
                                <form method="POST" action="http://localhost:8000/add" className="flex flex-col gap-10" >

                                    <div className="flex justify-center flex-row gap-5">
                                        <div className="flex flex-col gap-4 ">

                                            <div className="flex gap-2">
                                                <label className="text-lg">URL link image:</label>
                                                <input type="text" className="w-55 h-8 border border-gray-600 rounded-md " value={url} onChange={(e) => setUrl(e.target.value)} name="image_url"/>
                                            </div>

                                            {url ? (
                                            <div className="flex justify-center items-center row-span-4 h-110 w-100 text-lg  ">
                                                <img 
                                                    src={url}
                                                    alt='  Url Invalida Insira Outra'
                                                    className="object-cover size-full rounded-lg "
                                
                                                />
                                            </div>
                                            ):
                                            (
                                                
                                                <div className="flex-center row-span-4 text-lg h-110 w-100 border-3 border-dashed border-gray-400 rounded-lg">
                                                    <p>Insira uma imagem na Url</p>
                                                </div>
                                            )}
                                        </div>

                                        
                                        <div className="flex flex-col justify-start text-xl gap-10">

                                            <div className="flex flex-col ">
                                                <label className="form-label">Name:</label>
                                                <input type="text" className="w-55 h-9 border border-gray-600 rounded-md " name="name"/>
                                            </div>

                                            <div className="flex flex-col ">
                                                <label className="form-label">Description:</label>
                                                <input type="text" className="w-55 h-9 border border-gray-600 rounded-md " name="description"/>
                                            </div>

                                            <div className="flex flex-col ">
                                                <label className="form-label">Price:</label>
                                                <input type="text" className="w-55 h-9 border border-gray-600 rounded-md " name="price"/>
                                            </div>

                                            <div className="flex flex-col ">
                                            <label className="form-label">Category:</label>
                                            <input type="text" className="w-55 h-9 border border-gray-600 rounded-md " name="category"/>
                                            </div>


                                            <div className="flex flex-col ">
                                            <label className="form-label">Tag:</label>
                                            <input type="text" className="w-55 h-9 border border-gray-600 rounded-md " name="tags"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-center">
                                        <button type="submit" className="bg-[#9F1D1D] rounded-md text-blue-50 p-2 w-22 h-12 text-xl ">Send</button>
                                    </div>

                                    
                                </form>
                            </div>
                        }

                        {paginaatual === "atualizar" &&
                            <div >
                                <h1 className="text-3xl text-center font-bold mb-6">Formulario de Atualização</h1>

                                <div className="flex flex-col gap-6">
                                    {produtosdel.length === 0 ? (
                                        <p className="mt-2 text-center text-3xl">Não há produtos</p>
                                    ) : (
                                    produtos.map((produto) => (
                                        <div key={produto.id} className="shadow-lg rounded-md p-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex gap-4 items-center">
                                                    <img
                                                    src={produto.image_url}
                                                    alt={produto.name}
                                                    className="w-24 h-24 object-cover object-top rounded-md"
                                                    />
                                                    <div>
                                                    <h2 className="text-xl font-semibold">{produto.name}</h2>
                                                    <p className="text-gray-700">R$ {produto.price}</p>
                                                    </div>
                                                </div>

                                                <button
                                                    className="bg-[#9F1D1D] text-white px-4 py-2 rounded-md hover:bg-red-900"
                                                    onClick={() =>
                                                    setProdutoSelecionado(
                                                        produtoSelecionado?.id === produto.id ? null : produto
                                                    )
                                                    }
                                                >
                                                Atualizar
                                                </button>
                                            </div>

                                            {produtoSelecionado?.id === produto.id && (
                                                <div className="mt-6 grid grid-cols-2 gap-6">

                                                <form className="shadow-md p-6 rounded-md bg-gray-100">
                                                    <h2 className="text-xl font-bold mb-4">Produto Atual</h2>
                                                    <div className="flex flex-col gap-4">
                                                        <input type="text" value={produto.id} readOnly className="border p-2 rounded-md" />
                                                        <input type="text" value={produto.name} readOnly className="border p-2 rounded-md" />
                                                        <input type="text" value={produto.description} readOnly className="border p-2 rounded-md" />
                                                        <input type="text" value={produto.price} readOnly className="border p-2 rounded-md" />
                                                        <input type="text" value={produto.image_url} readOnly className="border p-2 rounded-md" />
                                                        <input type="text" value={produto.category} readOnly className="border p-2 rounded-md" />
                                                        <input type="text" value={produto.tags} readOnly className="border p-2 rounded-md" />
                                                    </div>
                                                </form>

                                                <form
                                                method="POST"
                                                action={`http://localhost:8000/edit/${produto.id}`}
                                                className="shadow-md p-6 rounded-md bg-white"
                                                >

                                                    <h2 className="text-xl font-bold mb-4">Atualização</h2>
                                                    <div className="flex flex-col gap-4">
                                                        <input type="text" name="name" placeholder="Novo nome" className="border p-2 rounded-md" />
                                                        <input type="text" name="description" placeholder="Nova descrição" className="border p-2 rounded-md" />
                                                        <input type="text" name="price" placeholder="Novo preço" className="border p-2 rounded-md" />
                                                        <input type="text" name="image_url" placeholder="Nova URL da imagem" className="border p-2 rounded-md" />
                                                        <input type="text" name="category" placeholder="Nova categoria" className="border p-2 rounded-md" />
                                                        <input type="text" name="tags" placeholder="Novas tags" className="border p-2 rounded-md" />

                                                        <button
                                                        type="submit"
                                                        className="bg-lime-700 text-white px-4 py-2 rounded-md hover:bg-lime-800"
                                                        >
                                                        Atualizar Produto
                                                        </button>
                                                    </div>

                                                </form>
                                        </div>
                                    )}
                                    </div>
                                    )))}
                                </div>
                            </div>
                        }

                        {paginaatual === "deletar" &&
                            <div>
                                <h1 className="text-3xl text-center font-bold mb-6">Formulario de Delete</h1>
                                {produtosdel.length === 0 ? (
                                <p className="mt-2 text-center text-3xl">Não há produtos</p>
                                ) : (
                                produtosdel.map((produto) => (
                                    <div key={produto.id} className="shadow-lg rounded-md p-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-4 items-center">
                                                <img
                                                    src={produto.image_url}
                                                    alt={produto.name}
                                                    className="w-24 h-24 object-cover object-top rounded-md"
                                                />
                                                <div>
                                                    <h2 className="text-xl font-semibold">{produto.name}</h2>
                                                    <p className="text-gray-700">R$ {produto.price}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                        
                                                <button
                                                    className="bg-[#9F1D1D] text-white px-4 py-2 rounded-md hover:bg-red-900"
                                                    onClick={() => deletarProduto(produto.id)}
                                                >
                                                    Deletar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )))}
                            </div>
                        }
                    </div>
                }

            
                
            </div>
        </div>
    )
}