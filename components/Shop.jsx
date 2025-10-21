'use client'
import { Search, ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Shop() {
  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[2fr_13fr]">
        <div className='flex-center flex-col '>
          <h1 className='m-0 text-2xl'>Shop-Sidebar</h1>
          <p className='m-0 text-#D3D3D3 text-sm'>Home / Shop-Sidebar</p>
        </div>

        <div className="grid grid-flow-col grid-cols-[1fr_5fr] m-0_5 gap-x-10 ">

          <div className='grid grid-flow-row grid-rows-[1fr_5fr_5fr_5fr] gap-5 h-50'>
            <div className='flex '>
              <form>
                <input type="text" placeholder='Search' className='border-1 border-black p-1 h-10' />
              </form>
              <button className='bg-[#704204] p-1 flex items-center justify-center h-10 w-10'>
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
              <h3 className='text-4 underline'>Tags</h3>
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

          <div className='grid grid-cols-3 grid-flow-row grid-rows-[1fr_14fr_14fr_14fr_2fr] grid-cols-auto gap-4 '>
            <div className='flex justify-between col-span-3'>
              <h2 className='text-zinc-500'>Showing 1-9 of 55 results</h2>
              <button className='border-1 p-1 border-stone-300 hover:cursor-pointer'>
                Default sorting
              </button>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div>
              <img src="item1_Home.png" alt="imagem 1" />
              <h1 className='text-lg'>Black Hoodie</h1>
              <p>$95.00</p>
            </div>
            <div className='flex items-start justify-center col-span-3'>
              <div className='grid grid-flow-col grid-cols-7'>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'><ArrowBigLeft /></button>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'>1</button>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'>2</button>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'>3</button>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'>4 </button>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'>5</button>
                <button className='border border-black cursor-pointer hover:bg-[#9f1d1d] hover:text-sky-100 hover:border-black'><ArrowBigRight /></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
