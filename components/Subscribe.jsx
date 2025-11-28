export default function Subscribe() {

    return (
        <div className="flex-center flex-col">
            <h2 className="text-4xl font-bold text-center mb-3 max-md:text-wrap">Get Offers & discounts by subscribing us</h2>
            <form className="flex flex-col gap-2 w-60">
                <input
                    className="italic rounded-sm w-full h-12 pl-6 border border-neutral-500 
                    transition duration-300 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    hover:border-blue-400 
                    dark:bg-neutral-800 dark:text-white dark:border-neutral-600 
                    dark:focus:ring-blue-400"
                    type="email"
                    placeholder="Enter Your Email Address"
                />

                <button
                    type="button"
                    className="mt-4 bg-black text-white rounded-sm w-full h-12 cursor-pointer 
                    transition duration-300 ease-in-out 
                    hover:bg-blue-600 hover:scale-105 
                    active:scale-95 
                    dark:bg-white dark:text-black dark:hover:bg-blue-400"
                >
                    Subscribe Now
                </button>
            </form>
        </div>
    )
}