'use client'
import { Search, ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

export default function Shop({title, subtitle, cat}) {

  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[2fr_13fr]">
        <div className='flex-center flex-col gap-3'>
          <h1 className='m-0 text-5xl'>{title}</h1>
          <p className='m-0 text-gray-300 text-base'>{subtitle}</p>
        </div>

        <div className="grid grid-flow-col grid-cols-[1fr_5fr] m-0_5 gap-x-10 ">

          <div className='grid grid-flow-row grid-rows-[1fr_5fr_5fr_5fr] gap-y-5 h-50'>
            <div className='flex'>
              <form>
                <input type="text" placeholder='Search' className='border-1 border-black p-1 h-10' />
              </form>
              <button className='bg-[#704204] p-1 flex-center h-10 w-10 cursor-pointer'>
                <Search size={14} color='white' />
              </button>
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

          <div className='grid grid-cols-3 grid-flow-row grid-rows-auto grid-cols-auto gap-x-4 gap-y-2'>
            <div className='flex justify-between col-span-3'>
              <h2 className='text-zinc-500'>Showing 1-9 of 55 results</h2>
              <button className='border-1 p-1 border-stone-300 hover:cursor-pointer w-30 h-8 text-nowrap'>
                Default sorting
              </button>
              
            </div>
            {cat.map((e) => (
                <div key={e.id} >
                  <Link href={'/product'}>
                    <img src={e.image_url} className='h-100 w-full object-cover object-top ' alt="" />
                    <h1 className='text-lg'>{e.name}</h1>
                    <p>{e.price}</p>
                  </Link>
                </div>
            ))
            } 
            <div className='flex justify-center col-span-3 mt-4'>
              <div className='grid grid-flow-col h-8 w-40'>
                <button className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'><ArrowBigLeft strokeWidth={2} size={18} /></button>
                <button className='border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'>1</button>
                <button className='border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'>2</button>
                <button className='border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'>3</button>
                <button className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100'><ArrowBigRight strokeWidth={2} size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
