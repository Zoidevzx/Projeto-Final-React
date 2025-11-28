'use client'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex-center  ">
      <div className="container grid grid-rows-[5.3fr_5fr_4fr] gap-10 max-sm:grid-rows-[5.3fr_6fr_3fr] ">

        <div className="flex relative">

          <div className='flex flex-col justify-center z-1 gap-2 max-sm:items-center w-full dark:m-10'>
            <h1 className='m-[0] font-bold text-3xl xl:text-6xl lg:text-4xl dark:text-gray-900'>Classic Cotton T-Shirt</h1>
            <p className='text-[10px] w-[367.27px] lg:text-base lg:w-140 max-sm:text-center dark:text-gray-900 '>Expenence ultimate comfart with or premum cotton t-shrts Perfect for everyday wear, they provide a stylish and relaxed fit for ann acasion</p>
            <Link href={'/shop/categories/Classic'} className='bg-[#9F1D1D] rounded-[40px] w-30 h-10 text-white border-none flex-center text-xs lg:text-base lg:h-12 font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#b22222] hover:scale-105 hover:shadow-xl active:scale-95'>

              Shop Now <ChevronRight size={12} className='2xl:size-3.5' />
            </Link>
          </div>
          <div className='absolute h-full md:w-[75%] dark:w-full right-[0px] max-sm:w-full '>
            <img src="Imagem_Home_Principal.webp" alt="" className='h-full w-full object-cover max-sm:opacity-60 ' />
          </div>

        </div>

        <div className="grid grid-flow-col grid-cols-auto gap-3 ">

          <div className="relative ">
            <Link href={'/shop/categories/Modern'}>

              <img src="item1_Home.png" alt="" className='w-full h-full object-cover ' />
              <div className='absolute z-10 gap-3 inset-x-0 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
                <p className='text-2xl sm:text-xl xl:text-5xl max-sm:text-lg dark:text-gray-900'>Modern Collection</p>
                <button className="button_home cursor-pointer dark:text-gray-900">
                  Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-2 ' />
                </button>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Link href={'/shop/categories/New'}>
              <img src="item2_Home.png" alt="" className='w-full h-full object-cover' />
              <div className='absolute z-10 gap-3 inset-x-0 flex-col flex-center justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
                <p className='text-2xl sm:text-xl xl:text-5xl max-sm:text-lg dark:text-gray-900'>New Collection</p>
                <button className="button_home cursor-pointer dark:text-gray-900">
                  Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-2 ' />
                </button>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Link href={'/shop/categories/Classic'}>
              <img src="item3_Home.png" alt="" className='w-full h-full object-cover' />
              <div className='absolute z-10 inset-x-0 gap-3 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
                <p className='text-2xl sm:text-xl xl:text-5xl max-sm:text-lg dark:text-gray-900'>Classic Collection</p>
                <button className="button_home cursor-pointer dark:text-gray-900">
                  Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-2 ' />
                </button>
              </div>
            </Link>
          </div>


        </div>

        <div className="flex-center flex-col gap-4">
          <h2 className='text-4xl xl:text-6xl lg:text-5xl'>About Us</h2>
          <p className='text-center text-xs w-125 xl:text-lg lg:text-base '>
            Somos um grupo de estudantes do Instituto Federal Goiano, apaixonados por tecnologia e desenvolvimento web. Atualmente cursamos o 2º ano do curso técnico integrado em Informática para Internet no campi de Trindade, e unimos nossas habilidades para criar soluções digitais modernas e funcionais.
          </p>
          <Link href={'/aboutus'} className='text-xs flex-center felx-col border-1 border-neutral-500 p-2 gap-1 rounded-2xl lg:text-xl lg:px-3 '>
            About Us <ChevronRight size={12} className='size-4' />
          </Link>
        </div>

      </div>
    </div>
  );
}