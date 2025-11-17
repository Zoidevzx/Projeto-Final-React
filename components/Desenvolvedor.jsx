'use client'
import { useState } from "react"

export default function Desenvolvedor(){
    const [senhacorreta] = useState('postgres')
    const [senha, setSenha] = useState('')
    const [liberado, setLiberado] = useState(false)
    const [valuep, setValuep] = useState('')

    function TestedeSenha(){
        if(senha === senhacorreta)
            setLiberado(true)
        else if(senha === '') 
            setValuep('Prencha o Campo')
        else 
            setValuep('Senha Errada, tente novamente')  
    }

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
                            />
                                <p>{valuep}</p>
                            <button type='button' className="bg-[#9F1D1D] rounded-sm p-2 h-10 text-white text-sm" onClick={TestedeSenha} >Enviar</button>
                        </form>
                    </div>
                }

                {liberado &&
                    <div className="container mt-5">
                    <h2>Formulário</h2>
                    <form method="POST" action="http://localhost:8000/adicionar">
              
                        <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" name="name"/>
                        </div>
                
                        <div className="mb-3">
                        <label className="form-label">Description:</label>
                        <input type="text" className="form-control" name="description"/>
                        </div>
                
                        <div className="mb-3">
                        <label className="form-label">Price:</label>
                        <input type="text" className="form-control" name="price"/>
                        </div>
              
                        <div className="mb-3">
                        <label className="form-label">URL link image:</label>
                        <input type="text" className="form-control" name="image_url"/>
                        </div>
              
                        <div className="mb-3">
                        <label className="form-label">Category:</label>
                        <input type="text" className="form-control" name="category"/>
                        </div>
              
                        <div className="mb-3">
                        <label className="form-label">Tag</label>
                        <input type="text" className="" name="tags"/>
                        </div>
                        
                        <button type="submit" className="">Send</button>
                    </form>
                    </div>
                }

            
                
            </div>
        </div>
    )
}