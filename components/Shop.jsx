'use client'
import { User, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Shop() {
  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[3fr_5fr_4fr]">
        <div className='flex-center flex-col gap-1.2'>
          <h1 className='m-0 text-2xl'>Shop-Sidebar</h1>
          <p className='m-0 text-#D3D3D3 text-sm'>Home / Shop-Sidebar</p>
        </div>

        <div className="grid grid-flow-col grid-cols-[1fr_8fr] m-0_5 gap-x-10">

          <div className='grid grid-flow-row grid-rows-auto gap-5'>
            <div className='flex h-7.25'>
              <form>
                <input type="text" placeholder='Search' className='border-1 border-black p-2 h-10' />
              </form>
              <button className='bg-[#704204] p-2 flex items-center justify-center h-10 w-10'>
                <Search size={14} color='white' />
              </button>
            </div>

            <div>
              <h3 className='text-4 underline'>Categories</h3>
              <p className='text-3'>T-Shirts</p>
              <p className='text-3'>Hoodies</p>
              <p className='text-3'>Oversized Tees</p>
              <p className='text-3'>Graphic Tees</p>
              <p className='text-3'>Zip-Up Hoodies</p>
            </div>

            <div>
              <h3 className='text-4 underline '>Tags</h3>
              <p className='text-3'>Casual Wear</p>
              <p className='ext-3'>Street Style</p>
              <p className='text-3'>Oversized Fit</p>
              <p className='text-3'>Cotton Fabric</p>
              <p className='text-3'>Trendy Designs</p>
            </div>

            <div>
              <h3 className='text-4 underline'>Filter By Price</h3>
              <p className='text-3'>Less than $10</p>
              <p className='text-3'>$10-$20</p>
              <p className='text-3'>$20-$30</p>
              <p className='text-3'>$30-$40</p>
              <p className='ext-3'>$40-$50</p>
            </div>

          </div>

          <div className=''>
            <div className='flex justify-between h-11'>
              <h2 className='text-zinc-500'>Showing 1-9 of 55 results</h2>
              <button className='border-1 p-2 border-stone-300'>
                Default sorting
              </button>
            </div>
            <div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
