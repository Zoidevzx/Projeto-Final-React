import Link from "next/link"

export default function About({ title, subtitle }) {
    return (
        <div className="flex-center">
            <div className="container flex flex-col gap-10 py-5">

                <div className="flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
                    <p className="text-sm md:text-base">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl shadow-xl">
                        <img src="Ana_Clara.jfif" alt="Foto de Ana Clara"
                            className="w-full rounded-xl aspect-square object-cover transition duration-150 hover:scale-105" />
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm md:text-lg xl:text-3xl text-center px-2">
                            Ana Clara Rezende Pires de Campos é estudante do 2º ano do curso de Informática para Internet no Instituto Federal Goiano - Campus Trindade. Natural de Trindade, tem 16 anos e demonstra interesse nas áreas de desenvolvimento web, buscando aprimorar seus conhecimentos e aplicar suas habilidades em projetos práticos.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl shadow-xl md:order-2">
                        <img src="Bruno_Goncalvez.enc" alt="Foto de Bruno"
                            className="w-full aspect-square rounded-xl object-cover transition duration-150 hover:scale-105" />
                    </div>
                    <div className="flex items-center md:order-1">
                        <p className="text-sm md:text-lg xl:text-3xl text-center px-2">
                            Bruno Gonçalves de Freitas, 17 anos, reside em Goiânia-GO e é estudante do 2º ano do curso técnico integrado em Informática para Internet no IF Goiano - Campus Trindade. Neste projeto, atuou como desenvolvedor front-end, utilizando tecnologias como Next.js, React, JavaScript (JSX) e CSS (com ênfase em Tailwind). Foi responsável pelo desenvolvimento das seguintes páginas: ItemsQuantity, NotFound, Cart, Shop e Subscribe.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl shadow-xl">
                        <img src="Jean_Carlos.jpg" alt="Foto de Jean"
                            className="w-full aspect-square rounded-xl object-cover transition duration-150 hover:scale-105" />
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm md:text-lg xl:text-3xl text-center px-2">
                            Jean Carlos Pereira Souza é um estudante do IF-Goiano Campus Trindade e cursa atualmente o 2° ano do técnico integrado ao ensino em informática para internet, tem 16 anos, é morador de Trindade-GO. Nesse projeto desempenhou a função de programdor e desenvolvedor front-end usando as ferramentas: Nextjs, React, css(tailwind), js e jsx. Ficou encarregado nesse projeto final das displinas: PIA, DAM e LIP, pelas páginas Home, HeadaerPage, Product e AboutUs e também fez a ligação com banco de dados feitos pelos devs: Ana Clara e João Victor.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl shadow-xl md:order-2">
                        <img src="Joao_Victor.jfif" alt="Foto de João Victor"
                            className="w-full aspect-square rounded-xl object-cover transition duration-150 hover:scale-105" />
                    </div>
                    <div className="flex items-center md:order-1">
                        <p className="text-sm md:text-lg xl:text-3xl text-center px-2">
                            João Victor Souza é estudante do 2º ano do curso de Informática para Internet no Instituto Federal Goiano – Campus Trindade. Atua no desenvolvimento de projetos voltados à área de tecnologia e web.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="w-50 md:w-auto bg-[#9F1D1D] rounded-md px-6 py-3 text-2xl md:text-5xl text-white font-semibold shadow-lg transition duration-300 ease-in-out hover:bg-[#b22222] hover:scale-105 hover:shadow-xl active:scale-95 text-center"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    )
}