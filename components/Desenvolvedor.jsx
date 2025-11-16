'use client'
import { useState } from "react"

export default function Desenvolvedor(){
    const [senhacorreta] = useState('postgres')
    const [senha, setSenha] = useState('')
    const [liberado, setLiberado] = useState(false)

    function TestedeSenha(){
        if(senha === senhacorreta)
            setLiberado(true)
        else if(senha !== senhacorreta)
            alert('kfdjsaklfjas')
        else
            alert('no')
    }

    return(
        <div className="flex justify-center size-full">
            <div className="container grid grid-rows-[1fr_3fr] ">
                <div className="flex-center flex-col">
                    <h1 className="text-6xl items-bold">Dev Page</h1>
                    <p className="">Home / Page</p>
                </div>

                {!liberado &&               
                    <div className="flex-center ">
                        <form action="" className="flex flex-col text-center w-75 gap-4">
                            <label className="text-3xl">Digite a Senha?</label>
                            <input 
                                className='italic rounded-sm w-full h-10 pl-1 border-1 border-neutral-500' 
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)} 
                                type="password" 
                                placeholder='Enter Passowrd of Dev Page' />
                      
                            <button type='button' className="bg-[#9F1D1D] rounded-sm p-2 h-10 text-white text-sm" onClick={TestedeSenha} >Enviar</button>
                        </form>
                    </div>
                }

                {liberado &&
                    <div>
                        abacate
                    </div>
                }

            </div>
        </div>
    )
}