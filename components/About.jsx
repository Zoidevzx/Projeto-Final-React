import Link from "next/link"

export default function About(){
    return(
        <div className="flex-center">
            <div className="container grid grid-flow-cols grid-cols-2 gap-6 py-5">
                <div className="shadow-xl/20 rounded-xl "><img src="Ana_Clara.jfif" className="w-full rounded-xl aspect-square object-cover transition delay-50 duration-150 hover:scale-102" alt="" /></div>
                <div className="flex items-center">
                    <p>Ana Clara Rezende Pires de Campos é estudante do 2º ano do curso de Informática para Internet no Instituto Federal Goiano - Campus Trindade. Natural de Trindade, tem 16 anos e demonstra interesse nas áreas de desenvolvimento web, buscando aprimorar seus conhecimentos e aplicar suas habilidades em projetos práticos</p>
                </div>
                <div className="flex items-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod exercitationem excepturi modi repellendus totam. Iure illo expedita quibusdam at nulla ipsum est, ab, dicta numquam nobis obcaecati eaque voluptatum, eum dolorem ducimus nostrum sint adipisci architecto doloremque dolor mollitia. Veritatis, nesciunt in laudantium adipisci ex error nihil mollitia voluptatum! Voluptatem.</p>
                </div>
                <div className="shadow-xl/20 rounded-xl"><img src="Bruno_Goncalvez.enc" alt="" className="w-full aspect-square rounded-xl object-cover transition delay-50 duration-150 hover:scale-102" /></div>
                <div className="shadow-xl/20 rounded-xl"><img src="Jean_Carlos.jpg" alt="" className="w-full aspect-square rounded-xl object-cover transition delay-50 duration-150 hover:scale-102"/></div>
                <div className="flex items-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt temporibus dicta dolorem obcaecati sunt ipsum ex placeat? Temporibus ut eum illo sunt tempora, harum autem? Repellendus ipsam nulla vel culpa unde nobis quasi, nam numquam dolor accusamus laborum suscipit aperiam illo illum sapiente adipisci beatae, deserunt eveniet quos totam natus.</p>
                </div>
                <div className="flex items-center">
                    <p>João Victor Souza é estudante do 2º ano do curso de Informática para Internet no Instituto Federal Goiano – Campus Trindade. Atua no desenvolvimento de projetos voltados à área de tecnologia e web.</p>
                </div>
                <div className="shadow-xl/20 rounded-xl"><img src="Joao_Victor.jfif" alt="" className="w-full aspect-square rounded-xl object-cover transition delay-50 duration-150 hover:scale-102" /></div>
                
                <div className="col-span-2 flex-center">
                    <Link href={'/'} className=" bg-[#9F1D1D] rounded-sm p-3 text-white ">
                        Home
                    </Link>
                </div>
               
            </div>
        </div>
    )
}