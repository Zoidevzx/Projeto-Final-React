import Link from "next/link"


export default function NotFoundPage() {

    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div className="flex flex-col items-center lg:items-start justify-center order-2 lg:order-1 lg:-mt-24 space-y-6 lg:space-y-8 z-10 relative">

                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[#0066cc] [text-shadow:0_4px_10px_rgba(0,102,204,0.2)]">
                        404
                    </h1>

                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight dark:text-[#00eaff] dark:[text-shadow:0_0_12px_rgba(0,234,255,0.7)]">
                            Houston, we have a problem.
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 max-w-md mx-auto lg:mx-0 text-pretty leading-relaxed dark:text-[#00eaff] dark:[text-shadow:0_0_12px_rgba(0,234,255,0.7)]">
                            The page you are looking for has drifted into deep space. Let's get you back to earth safely.
                        </p>
                    </div>

                    <Link href={'/'} className="px-8 py-4 text-lg rounded-xl font-medium transition-all duration-300 
                        bg-[#0066cc] text-white shadow-lg shadow-blue-500/20
                        hover:bg-[#0052a3] hover:scale-105 hover:shadow-blue-500/40
                        active:scale-95">
                        Go Back Home
                    </Link>
                </div>

                <div className="flex items-center justify-center order-1 lg:order-2 w-full">
                    <img src="/notFound.png"alt="Astronaut Lost in Space"className="w-64 md:w-96 lg:w-full lg:max-w-[700px] object-contain animate-deep-float pointer-events-none select-none"
                    />
                </div>

            </div>
        </div>
    )
}