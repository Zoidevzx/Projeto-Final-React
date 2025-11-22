"use client"
import { Search, ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Shop({ title, subtitle, cat }) {
  


  return (
    <div className="flex-center">
      <div className="container grid sm:grid-rows-[2fr_13fr] max-sm:grid-rows-[1fr_15fr]">
        <div className='flex-center flex-col gap-3'>
          <h1 className='m-0 text-5xl'>{title}</h1>
          <p className='m-0 text-gray-300 text-base'>{subtitle}</p>
        </div>

        <div className="grid xl:grid-flow-col xl:grid-cols-[1fr_5fr] lg:grid-flow-col lg:grid-cols-[2fr_5fr] max-md:grid-cols-1 gap-10 max-md:gap-30">

          <div className='grid xl:grid-flow-row xl:grid-rows-[1fr_1fr_2fr_2fr] xl:h-50 xl:gap-5 xl:grid-cols-1 lg:grid-flow-row lg:gap-5 lg:h-50 lg:grid-cols-1 md:grid-cols-2 md:grid-flow-row md:gap-7 sm:grid-cols-2 sm:grid-flow-row sm:gap-8 max-sm:grid-cols-2 max-sm:grid-flow-row max-sm:gap-30'>
            <div className='xl:flex md:flex md:items-start max-md:flex max-md:items-start '>
              <form className='flex-center '>
                <input type="text" placeholder='Search' className='border-1 border-black p-1 h-10' />
                <button type='button' className='bg-[#704204] p-1 flex-center h-10 w-10 cursor-pointer'>
                  <Search size={14} color='white' />
                </button>
              </form>
            </div>

            <div>
              <h3 className='font-bold underline text-lg'>Categories</h3>
              <p className='cursor-pointer'>T-Shirts</p>
            </div>

            <div>
              <h3 className='font-bold underline text-lg'>Tags</h3>
              <p className='cursor-pointer'>Casual Wear</p>
              <p className='cursor-pointer'>Street Style</p>
              <p className='cursor-pointer'>Oversized Fit</p>
              <p className='cursor-pointer'>Cotton Fabric</p>
              <p className='cursor-pointer'>Trendy Designs</p>
            </div>

            <div>
              <h3 className='font-bold underline text-lg'>Filter By Price</h3>
              <p className='cursor-pointer'>Less than $90</p>
              <p className='cursor-pointer'>$90-$109</p>
              <p className='cursor-pointer'>$110-$149</p>
              <p className='cursor-pointer'>$150-$179</p>
              <p className='cursor-pointer'>$180-$200</p>
            </div>

          </div>

          <div className='grid gap-5 sm:grid-cols-3 sm:gap-4 max-sm:grid-cols-1 max-sm:grid-flow-row'>
            <div className='flex justify-between sm:col-span-3'>
              <h2 className='text-zinc-500'>Showing 1-9 of 27 results</h2>
              <button className='border-1 p-1 border-stone-300 hover:cursor-pointer w-30 h-8 text-nowrap '>
                Default sorting
              </button>
            </div>

            {cat.length === 0 ? (
              <p className='flex items-start justify-center text-4xl sm:col-span-3 '>Produto não encontrado</p>
            ) :
              cat.map((e) => (
                <div key={e.id} >
                  <Link href={`/product/${e.id}`}>
                    <img src={e.image_url} className='xl:h-100 w-full object-cover object-top max-xl:h-75 max-lg:h-100 max-sm:h-180' alt="" />
                    <h1 className='text-lg'>{e.name}</h1>
                    <p>{e.price}</p>
                  </Link>
                </div>
              ))
            }
            <div className='flex justify-center sm:col-span-3 mt-4'>
              <div className='grid grid-cols-5 h-8 w-40'>
                <button className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'><ArrowBigLeft strokeWidth={2} size={18} /></button>
                <Link href={'/shop/Classic'}>
                  <button className='border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100 w-full h-full'>1</button>
                </Link>
                <Link href={'/shop/New'}>
                  <button className='border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100 w-full h-full'>2</button>
                </Link>
                <Link href={'/shop/Modern'}>
                  <button className='border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100 w-full h-full'>3</button>
                </Link>
                <button className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'><ArrowBigRight strokeWidth={2} size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
