import Link from "next/link"

export default function About({ title, subtitle }) {
    return (
        <div className="flex-center">
            <div className="container grid grid-flow-cols grid-cols-2 gap-20 py-5">
                <div className="flex-center flex-col col-span-2">
                    <h1 className="text-6xl items-bold">{title}</h1>
                    <p className="text-sm">{subtitle}</p>
                </div>
                <div className="shadow-xl/20 rounded-xl "><img src="Ana_Clara.jfif" className="w-full rounded-xl aspect-square object-cover transition delay-50 duration-150 hover:scale-102" alt="" /></div>
                <div className="flex items-center">
                    <p>Ana Clara Rezende Pires de Campos é estudante do 2º ano do curso de Informática para Internet no Instituto Federal Goiano - Campus Iporá. Natural de Trindade, tem 16 anos e demonstra interesse nas áreas de desenvolvimento web, buscando aprimorar seus conhecimentos e aplicar suas habilidades em projetos práticos</p>
                </div>
                <div className="flex items-center">
                    <p>Bruno Gonçalves de Freitas, 17 anos, reside em Goiânia-GO e é estudante do 2º ano do curso técnico integrado em Informática para Internet no IF Goiano - Campus Trindade. Neste projeto, atuou como desenvolvedor front-end, utilizando tecnologias como Next.js, React, JavaScript (JSX) e CSS (com ênfase em Tailwind). Foi responsável pelo desenvolvimento das seguintes páginas: ItemsQuantity, NotFound, Cart, Shop e Subscribe.</p>
                </div>
                <div className="shadow-xl/20 rounded-xl"><img src="Bruno_Goncalvez.enc" alt="" className="w-full aspect-square rounded-xl object-cover transition delay-50 duration-150 hover:scale-102" /></div>
                <div className="shadow-xl/20 rounded-xl"><img src="Jean_Carlos.jpg" alt="" className="w-full aspect-square rounded-xl object-cover transition delay-50 duration-150 hover:scale-102" /></div>
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