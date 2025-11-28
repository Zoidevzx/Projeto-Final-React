'use client'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex-center  ">
      <div className="container grid grid-rows-[5.3fr_5fr_4fr] gap-10 max-sm:grid-rows-[2fr_6fr_2fr] ">

        <div className="flex relative w-full">

          <div className='flex flex-col justify-center j z-1 gap-2 max-sm:items-center w-full'>
            <h1 className='m-[0] font-bold text-3xl max-sm:text-2xl xl:text-6xl lg:text-4xl '>Classic Cotton T-Shirt</h1>
            <p className='text-[10px] w-[367.27px] lg:text-base lg:w-140 max-sm:text-center  '>Expenence ultimate comfart with or premum cotton t-shrts Perfect for everyday wear, they provide a stylish and relaxed fit for ann acasion</p>
            <Link href={'/shop/categories/Classic'} className='bg-[#9F1D1D] rounded-[40px] w-30 h-10 text-white border-none flex-center text-xs lg:text-base lg:h-12 font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#b22222] hover:scale-105 hover:shadow-xl active:scale-95'>
              Shop Now <ChevronRight size={12} className='2xl:size-3.5' />
            </Link>
          </div>
          <div className='absolute h-full md:w-[75%]  right-[0px] max-sm:w-full '>
            <img src="Imagem_Home_Principal.webp" alt="" className='h-full w-full dark:opacity-60 object-cover max-sm:opacity-60 ' />
          </div>

        </div>

        <div className="grid grid-flow-col grid-cols-auto max-sm:grid-flow-row max-sm:grid-rows-auto  gap-3 ">

          <div
            className="relative transition duration-300 ease-in-out 
            hover:scale-102 hover:shadow-lg 
            active:scale-95 active:shadow-md 
            dark:hover:shadow-gray-700"
          >
            <Link href={'/shop/categories/Modern'}>

              <img src="item1_Home.png" alt="" className='w-full h-full object-cover ' />
              <div className='absolute z-10 gap-3 inset-x-0 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
                <p className='text-2xl sm:text-xl xl:text-5xl max-sm:text-xl font-semibold dark:text-gray-900'>Modern Collection</p>
                <button className="button_home cursor-pointer dark:text-gray-900">
                  Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-4 ' />
                </button>
              </div>
            </Link>
          </div>

          <div
            className="relative transition duration-300 ease-in-out 
            hover:scale-102 hover:shadow-lg 
            active:scale-95 active:shadow-md 
            dark:hover:shadow-gray-700"
          >
            <Link href={'/shop/categories/New'}>
              <img src="item2_Home.png" alt="" className='w-full h-full object-cover' />
              <div className='absolute z-10 gap-3 inset-x-0 flex-col flex-center justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
                <p className='text-2xl font-semibold sm:text-xl xl:text-5xl max-sm:text-xl font-semibold dark:text-gray-900'>New Collection</p>
                <button className="button_home cursor-pointer dark:text-gray-900">
                  Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-4' />
                </button>
              </div>
            </Link>
          </div>

          <div
            className="relative transition duration-300 ease-in-out 
            hover:scale-102 hover:shadow-lg 
            active:scale-95 active:shadow-md 
            dark:hover:shadow-gray-700"
          >
            <Link href={'/shop/categories/Classic'}>
              <img src="item3_Home.png" alt="" className='w-full h-full object-cover' />
              <div className='absolute z-10 inset-x-0 gap-3 flex-center flex-col justify-end bottom-5 bg-neutral-300/70 py-2 2xl:p-10 2xl:gap-5' >
                <p className='text-2xl sm:text-xl xl:text-5xl max-sm:text-xl font-semibold dark:text-gray-900'>Classic Collection</p>
                <button className="button_home cursor-pointer dark:text-gray-900">
                  Shop now <ChevronRight size={12} className='xl:size-4 max-sm:size-4 ' />
                </button>
              </div>
            </Link>
          </div>


        </div>

        <div className="flex-center flex-col gap-4">
          <h2 className='text-4xl xl:text-6xl lg:text-5xl'>About Us</h2>
          <p className='text-center text-xs w-125 xl:text-lg lg:text-base max-sm:w-80 max-sm:text-base'>
            Somos um grupo de estudantes do Instituto Federal Goiano, apaixonados por tecnologia e desenvolvimento web. Atualmente cursamos o 2º ano do curso técnico integrado em Informática para Internet no campi de Trindade, e unimos nossas habilidades para criar soluções digitais modernas e funcionais.
          </p>
          <Link href={'/aboutus'}
            className="text-xs flex-center flex-row border border-neutral-500 
            p-2 gap-1 rounded-2xl 
            lg:text-xl lg:px-3 max-sm:text-base
            transition duration-300 ease-in-out 
            hover:scale-105 hover:shadow-md 
            active:scale-95
            dark:border-neutral-400 dark:hover:shadow-lg"
          >
            About Us <ChevronRight size={12} className='size-4' />
          </Link>
        </div>

      </div>
    </div>
  );
}