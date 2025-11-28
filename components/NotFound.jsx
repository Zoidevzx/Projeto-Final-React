
export default function NotFoundPage() {

    return (
        <div className="flex-center">
            <div className="container grid-cols-2">
                <div className="flex items-center justify-start">
                    <div className="flex-center">
                        <div className="flex flex-col">
                            <h1 className="text-7xl font-extrabold text-left tracking-tight text-[#0066cc] [text-shadow:0_2px_8px_rgba(0,102,204,0.35)] dark:text-[#00eaff] dark:[text-shadow:0_0_12px_rgba(0,234,255,0.7)]">
                                404 Page
                            </h1>
                            <div>
                                <h2 className="2xl font-bold">Oops! Page Not Found</h2>
                                <p className="text-lg text-gray-600 w-50 text-pretty">
                                    Looks like this page is out of style. But don't worry — our latest collections are waiting for you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <img src="/notFound.png" alt="Astronaut" className="size-60" />
                </div>
            </div>
        </div >
    )
}