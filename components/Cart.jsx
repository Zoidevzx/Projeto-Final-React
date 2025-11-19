'use client'
import { CircleX, Minus, Plus } from "lucide-react"
import Link from 'next/link';
import { Fragment, useState } from "react";

export default function Cart({ title, subtitle }) {
  const [quantity, setQuantity] = useState(0)

  const cartItens = [
    { img_url: 'item1_Home.png', name: 'Black Hoodie', value: '$95.00', subvalue: '$200.00' },
    { img_url: 'item1_Home.png', name: 'Black Hoodie', value: '$95.00', subvalue: '$200.00' },
    { img_url: 'item1_Home.png', name: 'Black Hoodie', value: '$95.00', subvalue: '$200.00' },
    { img_url: 'item1_Home.png', name: 'Black Hoodie', value: '$95.00', subvalue: '$200.00' }
  ]

  function AddQuantity() {
    if (quantity >= 0)
      setQuantity(quantity + 1)
  }

  function RemoveQuantity() {
    if (quantity != 0)
      setQuantity(quantity - 1)
  }

  return (
    <div className="flex-center">
      <div className="container grid xl:grid-rows-[4fr_8fr_6fr_4fr] gap-20 ">
        <div className="flex-center flex-col gap-4">
          <h1 className="m-0 font-bold text-5xl">{title}</h1>
          <p className="m-0 text-gray-300 text-base">{subtitle}</p>
        </div>

        <div className="grid grid-flow-col xl:grid-cols-[4fr_2fr] gap-10 max-xl:grid-rows-2 grid-cols-1 lg:gap-50 md:gap-40 sm:gap-20 max-sm:gap-35">

          <div className="grid grid-flow-row h-50">
            <div className="grid grid-cols-3 h-10 xl:grid-cols-[1.7fr_1fr_1.2fr] md:grid-cols-[1.4fr_1fr_1.2fr] lg:grid-cols-[1.3fr_1fr_1.5fr] sm:grid-cols-[1.6fr_1fr_1fr] max-sm:grid-cols-[2.6fr_1fr_1fr]">
              <p className="font-semibold">Product</p>
              <p className="font-semibold">Quantity</p>
              <p className="font-semibold">Subtotal</p>
              <hr className="col-span-4 border-stone-300" />
            </div>
            <div className="grid xl:grid-cols-[2.2fr_2fr_1fr_1fr] gap-10 xl:h-130 overflow-y-auto lg:grid-cols-[1fr_1.3fr_1fr_1fr] lg:h-115 md:grid-cols-[1.7fr_1.8fr_1fr_1fr] md:h-120 sm:grid-cols-[3fr_2fr_1fr_0.6fr] sm:h-90 max-sm:grid-cols-[5fr_1.7fr_1fr_0.8fr] max-sm:h-100">

              {cartItens.map((e) => (
                <Fragment key={e.id}>
                  <div className="flex-center gap-x-5 xl:h-50 lg:h-45 md:h-40 sm:h-60 max-sm:h-70">
                    <img src={e.img_url} alt="imagem 1" className="size-full object-cover object-" />
                    <div>
                      <h1 className='font-medium text-lg'>{e.name}</h1>
                      <p>{e.value}</p>
                    </div>
                  </div>
                  <div className="flex-center">
                    <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer flex-center' onClick={RemoveQuantity}><Minus size={16} /></button>
                    <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300 text-center' value={quantity} type="text" name="" id="" disabled />
                    <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer flex-center' onClick={AddQuantity} ><Plus size={16} /></button>
                  </div>
                  <div className="flex-center">
                    <p>{e.subvalue}</p>
                  </div>
                  <div className="flex-center">
                    <CircleX className="cursor-pointer" />
                  </div>
                  <hr className="col-span-4 border-stone-300" />
                </Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-flow-row grid-rows-[1fr_2fr_6fr] gap-y-4">
            <h1 className="m-0 text-4xl font-bold">Cart Total</h1>
            <div className="grid grid-flow-row grid-cols-2">

              <hr className="col-span-2 border-stone-300" />
              <p className="font-bold text-xl">Subtotal</p>
              <p className="text-xl font-semibold">$410.00</p>
              <hr className="col-span-2 border-stone-300" />

              <p className="font-bold text-xl">Total</p>
              <p className="text-xl font-semibold">$410.00</p>

              <hr className="col-span-2 border-stone-300" />
            </div>
            <div className="flex-center h-50 flex-wrap">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div>
                  <button className="bg-[#212529] p-1 cursor-pointer h-11 w-full text-neutral-200 xl:text-base lg:text-xl ">Update Cart</button>
                </div>
                <div>
                  <button className="bg-[#212529] p-1 cursor-pointer h-11 w-full text-neutral-200 xl:text-base lg:text-xl ">Continue Shopping</button>
                </div>
                <div className="col-span-2">
                  <button className="w-full bg-[#9f1d1d] p-1 cursor-pointer text-neutral-200  h-11 xl:text-base lg:text-xl ">Proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-center mb-3 text-wrap">Get Offers & discounts by subscribing us</h1>
            <form className="flex flex-col gap-2" action="">
              <input className='italic rounded-sm w-full h-12 pl-6 border-1 border-neutral-500' type="email" placeholder='Enter Your Email Address' />
              <button className='bg-black text-white rounded-sm w-full h-12'>Subscribe Now</button>
            </form>
          </div>
        </div>
        <footer className="grid grid-flow-col gap-10">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-xl font-bold">Urban</h1>
            <p className="w-80 text-pretty">
              In modern urban settings, contemporary style guides creative communities and elevates everyday environments.
              Emerging trends unite cultural expression with innovation, forming distinctive identities defined by authenticity today.
            </p>
            <p>Urban design shapes modern lifestyles globally.</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-bold">Quick Links</h1>
            <Link href={'/'}>Home</Link>
            <Link href={'/aboutus'}>About</Link>
            <p>Services</p>
            <p>Blogs</p>
            <p>Contacts</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-bold">Social</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-bold">Contact Us</h1>
            <p className="break-all">+1 (555) 347-9820</p>
            <p className="break-all">support@urbanstore.com</p>
            <p>Contact Urban support for guidance.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
