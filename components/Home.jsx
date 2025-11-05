'use client'
import { User, Search, ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[5.3fr_5fr_4fr] gap-10 max-sm:grid-rows-[5.3fr_6fr_3fr] ">

        <div className="flex relative">

          <div className='flex flex-col justify-center z-1 gap-2 max-sm:items-center w-full'>
            <h1 className='m-[0] font-bold text-4xl xl:text-7xl lg:text-5xl'>Classic Cotton T-Shirt</h1>
            <p className='text-[10px] w-[367.27px] lg:text-base lg:w-140 max-sm:text-center '>Expenence ultimate comfart with or premum cotton t-shrts Perfect for everyday wear, they provide a stylish and relaxed fit for ann acasion</p>
            <Link href={'/shop'} className='bg-[#9F1D1D] rounded-[40px] w-30 h-10 text-white border-none flex-center text-xs lg:text-base lg:h-12'>
            
              Shop Now <ChevronRight size={12} className='2xl:size-3.5'/>
            </Link> 
          </div>
          <div className='absolute h-full md:w-[75%] right-[0px] max-sm:w-full '>
            <img src="Imagem_Home_Principal.webp" alt="" className='h-full w-full object-cover max-sm:opacity-60' />
          </div>

        </div>

        <div className="grid grid-flow-col grid-cols-auto gap-3 ">

          <div className="relative ">
            <img src="item1_Home.png" alt="" className='w-full h-full object-cover' />
            <div className='absolute z-10 gap-3 inset-x-0 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
              <h1 className='text-2xl xl:text-5xl max-sm:text-lg'>Modern Collection</h1>
              <Link href={'/shop'} className='button_home ' >
                Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-2 '/>
              </Link> 
            </div>
          </div>

          <div className="relative">
            <img src="item2_Home.png" alt="" className='w-full h-full object-cover' />
            <div className='absolute z-10 gap-3 inset-x-0 flex-col flex-center justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
              <h1 className='text-2xl xl:text-5xl max-sm:text-lg'>New Collection</h1>
              <Link href={'/shop'} className='button_home' >
                Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-2 '/>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img src="item1_Home.png" alt="" className='w-full h-full object-cover' />
            <div className='absolute z-10 inset-x-0 gap-3 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
              <h1 className='text-2xl xl:text-5xl max-sm:text-lg'>Classic Collection</h1>
              <Link href={'/shop'} className='button_home' >
                Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-2 '/>
              </Link>
            </div>
          </div>


        </div>

        <div className="flex-center flex-col gap-4">
          <h1 className='text-4xl xl:text-6xl lg:text-5xl'>About Us</h1>
          <p className='text-center text-xs w-125 xl:text-lg lg:text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta atque obcaecati voluptate repellat odio corrupti facilis hic error possimus, eaque sapiente repudiandae unde, nulla iste quod. Dolor eveniet officia, reiciendis impedit, illum ut commodi quae odit ipsum non facilis.
          </p>
          <Link href={'/aboutus'} className='text-xs flex-center felx-col border-1 border-neutral-500 p-2 gap-1 rounded-2xl lg:text-xl lg:px-3 '>
            About Us <ChevronRight size={12} className='size-4'/>
          </Link>
        </div>
      </div>
    </div>
  );
}