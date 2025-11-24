export default function Subscribe() {

    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-3 text-wrap">Get Offers & discounts by subscribing us</h2>
            <form className="flex flex-col gap-2 w-60">
                <input className='italic rounded-sm w-full h-12 pl-6 border-1 border-neutral-500' type="email" placeholder='Enter Your Email Address' />
                <button type="button" className='bg-black text-white rounded-sm w-full h-12 cursor-pointer'>Subscribe Now</button>
            </form>
        </>
    )
}