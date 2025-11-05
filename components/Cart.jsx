'use client'
import { CircleX } from "lucide-react"
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[4fr_8fr_6fr_4fr]  gap-10">
        <div className="flex-center flex-col gap-4">
          <h1 className="m-0 font-bold text-5xl">Cart</h1>
          <p className="m-0 text-gray-300 text-base">Home / Cart</p>
        </div>

        <div className="grid grid-flow-col grid-cols-[4fr_2fr] gap-x-10">

          <div className="grid grid-flow-row h-50">
            <div className="grid grid-cols-3 h-10 border-b border-gray-300 mb-2">
              <p className="font-medium">Product</p>
              <p className="font-medium">Quantity</p>
              <p className="font-medium">Subtotal</p>
            </div>
            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 h-80 overflow-y-auto">
              <div className="flex-center gap-x-5">
                <img src="item1_Home.png" alt="imagem 1" className="w-30 h-30 object-cover" />
                <div>
                  <h1 className='text-lg'>Black Hoodie</h1>
                  <p>$95.00</p>
                </div>
              </div>
              <div className="flex-center">
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>-</button>
                <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300' type="text" name="" id="" />
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>+</button>
              </div>
              <div className="flex-center">
                <p>$200.00</p>
              </div>
              <div className="flex-center">
                <CircleX className="cursor-pointer"/>
              </div>
              <div className="col-span-4 border-b border-gray-300 mb-2"></div>
              <div className="flex-center gap-x-5">
                <img src="item1_Home.png" alt="imagem 1" className="max-xl: w-30 h-30 object-cover" />
                <div>
                  <h1 className='text-lg'>Black Hoodie</h1>
                  <p>$95.00</p>
                </div>
              </div>
              <div className="flex-center">
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>-</button>
                <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300' type="text" name="" id="" />
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>+</button>
              </div>
              <div className="flex-center">
                <p>$200.00</p>
              </div>
              <div className="flex-center">
                <CircleX className="cursor-pointer" />
              </div>
              <div className="col-span-4 border-b border-gray-300 mb-2"></div>
              <div className="flex-center gap-x-5">
                <img src="item1_Home.png" alt="imagem 1" className="max-xl: w-30 h-30 object-cover" />
                <div>
                  <h1 className='text-lg'>Black Hoodie</h1>
                  <p>$95.00</p>
                </div>
              </div>
              <div className="flex-center">
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>-</button>
                <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300' type="text" name="" id="" />
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>+</button>
              </div>
              <div className="flex-center">
                <p>$200.00</p>
              </div>
              <div className="flex-center">
                <CircleX className="cursor-pointer" />
              </div>
              <div className="col-span-4 border-b border-gray-300 mb-2"></div>
              <div className="flex-center gap-x-5">
                <img src="item1_Home.png" alt="imagem 1" className="w-30 h-30 object-cover" />
                <div>
                  <h1 className='text-lg'>Black Hoodie</h1>
                  <p>$95.00</p>
                </div>
              </div>
              <div className="flex-center">
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>-</button>
                <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300' type="text" name="" id="" />
                <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer'>+</button>
              </div>
              <div className="flex-center">
                <p>$200.00</p>
              </div>
              <div className="flex-center">
                <CircleX className="cursor-pointer" />
              </div>
              <div className="col-span-4 border-b border-gray-300 mb-2"></div>
            </div>
          </div>


          <div className="grid grid-flow-row grid-rows-[1fr_2fr_6fr] gap-4">
            <h1 className="m-0 text-2xl font-bold">Cart Total</h1>
            <div className="grid grid-flow-row grid-cols-2 gap-x-5">
              <div className="col-span-2 border-b border-gray-300 mb-2"></div>
              <p className="font-bold">Subtotal</p>
              <p>$410.00</p>
              <div className="col-span-2 border-b border-gray-300 my-2"></div>
              <p className="font-bold">Total</p>
              <p>$410.00</p>
              <div className="col-span-2 border-b border-gray-300 mt-2"></div>
            </div>
            <div className="flex items-center h-50">
              <div className="grid grid-flow-row grid-cols-2 gap-x-5 gap-y-4 w-full">
                <button className="text-nowrap bg-[#212529] p-1 cursor-pointer h-11 w-full text-neutral-200">Update Cart</button>
                <button className="text-nowrap bg-[#212529] p-1 cursor-pointer h-11 w-full text-neutral-200">Continue Shopping</button>
                <div className="col-span-2">
                  <button className="w-full bg-[#9f1d1d] p-1 cursor-pointer text-neutral-200">Proceed to checkout</button>
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
              <button className='bg-black text-white rounded-sm  w-full h-12'>Subscribe Now</button>
            </form>
          </div>
        </div>
        <footer className="grid grid-flow-col gap-10">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-xl font-bold">Urban</h1>
            <p className="text-wrap w-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, facere expedita quibusdam est aspernatur ex error! Debitis autem dicta eveniet dolorum magnam nulla sequi ducimus iste velit. </p>
            <p className="text-wrap">Lorem ipsum dolor sit amet consectetur.</p>
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
            <p className="text-wrap">+ 12(0) 34 56 78 910</p>
            <p className="text-wrap">jean.carlos@estudante.ifgoiano.edu.br</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
