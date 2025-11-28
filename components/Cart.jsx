'use client'
import ItemsQuantity from "./ItemsQuantity";
import Subscribe from "./Subscribe";
import { CircleX } from "lucide-react"
import Link from 'next/link';
import { Fragment, useState } from "react";
import { useCart } from "../context/ContextCart";
import { FinalizarCompra } from "../actions/checkCart";

export default function Cart({ title, subtitle }) {


  const { cartItems, clearCart, changeQuantity, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0)
      return

    setLoading(true);

    const result = await FinalizarCompra(cartItems)

    setLoading(false)

    if (result.sucesso)
      clearCart()
  }


  return (
    <div className="flex-center">
      <div className="container grid xl:grid-rows-[4fr_8fr_2fr_4fr] gap-20">
        <div className="flex-center flex-col gap-4">
          <h1 className="m-0 font-bold md:text-7xl max-lg:text-5xl">{title}</h1>
          <p className="m-0 text-gray-300 xl:text-xl max-lg:text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-flow-col xl:grid-cols-[4fr_2fr] gap-10 max-xl:grid-rows-2 grid-cols-1 lg:gap-50 md:gap-40 sm:gap-20 max-sm:gap-35">

          <div className="grid grid-flow-row h-50">
            <div className="grid p-2 grid-cols-3 h-10 xl:grid-cols-[3fr_0.9fr_1fr] lg:grid-cols-[1.8fr_1fr_1.5fr] md:grid-cols-[2fr_1.3fr_1.2fr]  sm:grid-cols-[1.6fr_1fr_1fr] max-sm:grid-cols-[2.6fr_1.3fr_0.1fr]">
              <p className="font-semibold">Product</p>
              <p className="font-semibold">Quantity</p>
              <p className="font-semibold max-sm:hidden">Subtotal</p>
              <hr className="col-span-4 border-stone-300" />
            </div>

            <div className="grid p-2 xl:grid-cols-[4fr_1fr_0.2fr_0.5fr] gap-10 xl:h-130 overflow-y-auto lg:grid-cols-[1.6fr_1.3fr_1fr_1fr] lg:h-115 md:grid-cols-[1.7fr_1.2fr_1fr_0.4fr] md:h-120 sm:grid-cols-[1fr_3fr_1fr_0.3fr] sm:h-90 max-sm:grid-cols-2 max-sm:h-100 ">
              {cartItems.length > 0 ? (
                cartItems.map((e, index) => (
                  <Fragment key={`${e.id}-${index}`}>
                    <div className="flex items-center gap-x-4 xl:h-50 lg:h-45 md:h-35 sm:h-25 max-sm:h-25">
                      <img src={e.img_url} alt="imagem 1" className="h-full aspect-square object-cover object-top rounded-md" />
                      <div>
                        <h1 className='text-sm md:font-medium md:text-xl'>{e.name}</h1>
                        <p className="text-sm md:font-extralight">${e.value}</p>
                      </div>
                    </div>

                    <div className="flex-center">
                      <ItemsQuantity
                        quantity={e.quantity}
                        onIncrease={() => changeQuantity(e.id, 'plus')}
                        onDecrease={() => changeQuantity(e.id, 'minus')}
                      />
                    </div>
                    <div className="flex-center">
                      <p className="text-sm md:font-extralight">${e.value}</p>
                    </div>
                    <div className="flex-center">
                      <CircleX className="cursor-pointer size-5 " onClick={() => removeFromCart(e.id)} />
                    </div>
                    <hr className="sm:col-span-4 max-sm:col-span-2 border-stone-300" />
                  </Fragment>
                ))
              ) : (
                <p className="col-span-4 flex-center font-semibold text-3xl"> O carrinho está vazio </p>
              )}

            </div>
          </div>

          <div className="grid grid-flow-row grid-rows-[1fr_2fr_6fr] gap-4">
            <h2 className="m-0 text-4xl font-bold max-md:text-center">Cart Total</h2>
            <div className="grid grid-flow-row md:grid-cols-2 max-md:text-center">

              <hr className="col-span-2 border-stone-300 max-md:w-full" />
              <p className="font-semibold text-xl">Subtotal</p>
              <p className="text-xl font-light">{cartItems.reduce((v, e) => (v + Number(e.value)), 0).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}</p>
              <hr className="col-span-2 border-stone-300 max-md:w-full" />

              <p className="font-semibold text-xl">Total</p>
              <p className="text-xl font-light">{cartItems.reduce((acc, items) => (acc + (Number(items.value) * items.quantity)), 0).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}</p>

              <hr className="col-span-2 border-stone-300 max-md:w-full" />
            </div>
            <div className="flex-center h-50 flex-wrap">
              <div className="grid grid-cols-2 gap-6 w-full max-md:grid-cols-1">
                <div className="max-md: flex-center">
                  <button
                    className="bg-[#212529] p-1 cursor-pointer h-11 w-full 
                  text-neutral-200 xl:text-lg lg:text-xl max-md:w-3/4 
                  transition duration-300 ease-in-out 
                  hover:bg-neutral-700 hover:text-white hover:scale-105 
                  active:scale-95 
                  dark:bg-neutral-800 dark:hover:bg-neutral-600"
                  >
                    Update Cart
                  </button>
                </div>
                <div>
                  <Link href={'/shop'} className="max-md:flex-center">
                    <button
                      className="bg-[#212529] p-1 cursor-pointer text-nowrap h-11 w-full 
                    text-neutral-200 xl:text-lg lg:text-xl max-md:w-3/4 
                    transition duration-300 ease-in-out 
                    hover:bg-neutral-700 hover:text-white hover:scale-105 
                    active:scale-95 
                    dark:bg-neutral-80 dark:hover:bg-neutral-600"
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
                <div className="md:col-span-2 max-md:flex-center">
                  <button className="w-full bg-[#9f1d1d] p-1 cursor-pointer text-neutral-200  h-11 xl:text-xl lg:text-xl max-md:w-3/4 font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#b22222] hover:scale-105 hover:shadow-xl active:scale-95" onClick={handleCheckout} disabled={loading}>
                    {loading ? 'Processando...' : 'Proceed to checkout'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-center">
          <div className="flex-center flex-col text-wrap">
            <Subscribe />
          </div>
        </div>
        <footer className="grid max-md:grid-cols-1 md:grid-cols-4 gap-10 px-10 py-10">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl font-bold">Urban</h2>
            <p className="w-full text-pretty">
              In modern urban settings, contemporary style guides creative communities and elevates everyday environments.
              Emerging trends unite cultural expression with innovation, forming distinctive identities defined by authenticity today.
            </p>
            <p>Urban design shapes modern lifestyles globally.</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <Link href={'/'}>Home</Link>
            <Link href={'/aboutus'}>About</Link>
            <p>Services</p>
            <p>Blogs</p>
            <p>Contacts</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-lg font-bold">Social</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-lg font-bold break-all">Contact Us</h2>
            <p className="break-all">+1 (555) 347-9820</p>
            <p className="break-all">support@urbanstore.com</p>
            <p className="text-pretty">Contact Urban support for guidance.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
