'use client'
import ItemsQuantity from "./ItemsQuantity";
import Subscribe from "./Subscribe";
import { CircleX } from "lucide-react"
import Link from 'next/link';
import { Fragment} from "react";

export default function Cart({ title, subtitle }) {

  const cartItens = [
    { id: 1, img_url: 'item1_Home.png', name: 'Black Hoodie', value: 95, subvalue: 200 },
    { id: 2, img_url: 'item1_Home.png', name: 'Black Hoodie', value: 95, subvalue: 200 },
    { id: 3, img_url: 'item1_Home.png', name: 'Black Hoodie', value: 95, subvalue: 200 },
    { id: 4, img_url: 'item1_Home.png', name: 'Black Hoodie', value: 95, subvalue: 200 }
  ]

  return (
    <div className="flex-center">
      <div className="container grid xl:grid-rows-[4fr_8fr_6fr_4fr] gap-20 ">
        <div className="flex-center flex-col gap-4">
          <h1 className="m-0 font-bold xl:text-7xl max-lg:text-5xl">{title}</h1>
          <p className="m-0 text-gray-300 xl:text-xl max-lg:text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-flow-col xl:grid-cols-[4fr_2fr] gap-10 max-xl:grid-rows-2 grid-cols-1 lg:gap-50 md:gap-40 sm:gap-20 max-sm:gap-35">

          <div className="grid grid-flow-row h-50">
            <div className="cart-details">
              <p className="font-semibold">Product</p>
              <p className="font-semibold">Quantity</p>
              <p className="font-semibold">Subtotal</p>
              <hr className="col-span-4 border-stone-300" />
            </div>

            <div className="cart-container">
              {cartItens.map((e) => (
                <Fragment key={e.id}>
                  <div className="flex-center gap-x-5 xl:h-50 lg:h-45 md:h-40 sm:h-60 max-sm:h-70">
                    <img src={e.img_url} alt="imagem 1" className="size-full object-cover object-" />
                    <div>
                      <h1 className='font-medium text-xl'>{e.name}</h1>
                      <p className="font-extralight">${e.value}.00</p>
                    </div>
                  </div>
                  <div className="flex-center">
                    <ItemsQuantity />
                  </div>
                  <div className="flex-center">
                    <p className="font-extralight">${e.subvalue}.00</p>
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
              <p className="font-semibold text-xl">Subtotal</p>
              <p className="text-xl font-light">${cartItens.reduce((v, e) => (v + e.subvalue), 0)}.00</p>
              <hr className="col-span-2 border-stone-300" />

              <p className="font-semibold text-xl">Total</p>
              <p className="text-xl font-light">${cartItens.reduce((v, e) => (v + e.value), 0)}.00</p>

              <hr className="col-span-2 border-stone-300" />
            </div>
            <div className="flex-center h-50 flex-wrap">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div>
                  <button className="bg-[#212529] p-1 cursor-pointer h-11 w-full text-neutral-200 xl:text-lg lg:text-xl ">Update Cart</button>
                </div>
                <div>
                  <button className="bg-[#212529] p-1 cursor-pointer h-11 w-full text-neutral-200 xl:text-lg lg:text-xl ">Continue Shopping</button>
                </div>
                <div className="col-span-2">
                  <button className="w-full bg-[#9f1d1d] p-1 cursor-pointer text-neutral-200  h-11 xl:text-xl lg:text-xl ">Proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-center">
          <div className="flex flex-col">
            <Subscribe />
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
