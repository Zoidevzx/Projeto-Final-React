'use client'
import { User, Search, ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[5.3fr_5fr_4fr] ">

        <div className="flex relative">

          <div className='flex flex-col justify-center z-1 gap-2 '>
            <h1 className='m-[0] font-bold text-4xl 2xl:text-7xl'>Classic Cotton T-Shirt</h1>
            <p className='text-[10px] w-[367.27px] 2xl:text-base 2xl:w-140'>Expenence ultimate comfart with or premum cotton t-shrts Perfect for everyday wear, they provide a stylish and relaxed fit for ann acasion</p>
            <Link href={'/shop'} className='bg-[#9F1D1D] rounded-[40px] w-30 h-10 text-white border-none flex-center text-xs 2xl:text-base 2xl:h-12'>
            
              Shop Now <ChevronRight size={12} className='2xl:size-3.5'/>
            </Link> 
          </div>
          <div className='absolute h-full w-75% right-[0px]'>
            <img src="Imagem_Home_Principal.webp" alt="" className='h-full w-auto  object-cover ' />
          </div>

        </div>

        <div className="grid grid-flow-col grid-cols-auto gap-3 mt-17">

          <div className="relative">
            <img src="item1_Home.png" alt="" className='w-full h-full object-cover' />
            <div className='absolute z-10 gap-3 inset-x-0 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2' >
              <h1 className='text-2xl'>Modern Collection</h1>
              <Link href={'/shop'} className='button_home' >
                Shop now <ChevronRight size={12} />
              </Link> 
            </div>
          </div>

          <div className="relative">
            <img src="item2_Home.png" alt="" className='w-full h-full object-cover' />
            <div className='absolute z-10 gap-3 inset-x-0 flex-col flex-center justify-end bottom-5 bg-neutral-300/70 py-2' >
              <h1 className='text-2xl'>New Collection</h1>
              <Link href={'/shop'} className='button_home' >
                Shop now <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <img src="item1_Home.png" alt="" className='w-full h-full object-cover' />
            <div className='absolute z-10 inset-x-0 gap-3 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2' >
              <h1 className='text-2xl'>Classic Collection</h1>
              <Link href={'/shop'} className='button_home' >
                Shop now <ChevronRight size={12} />
              </Link>
            </div>
          </div>


        </div>

        <div className="flex-center flex-col gap-4">
          <h1 className='text-4xl'>About Us</h1>
          <p className='text-center text-xs w-125 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta atque obcaecati voluptate repellat odio corrupti facilis hic error possimus, eaque sapiente repudiandae unde, nulla iste quod. Dolor eveniet officia, reiciendis impedit, illum ut commodi quae odit ipsum non facilis.
          </p>
          <Link href={'/aboutus'} className='text-xs flex-center felx-col border-1 border-neutral-500 p-2 rounded-2xl cursor-pointer'>
            About Us <ChevronRight size={12} />
          </Link>
          <div className='w-full flex justify-end'>
            <button className='text-white text-xs bg-blue-800 flex-center gap-1 felx-rows rounded-2xl p-2'><ShoppingCart size={12} /> Get it Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}