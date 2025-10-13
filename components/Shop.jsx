'use client'
import { User, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Shop() {
  return (
    <div className="container grid grid-rows-1fr_10fr_5fr_4fr ">
      <div className="flex justify-between mr-20px ml-20px">
        <div className="flex-center  mt-10px">
          <h1 className='m-0 '>Urban</h1>
        </div>

        <div className="flex justify-between gap-40px text-0.875rem">
          <div className="grid grid-flow-col gap-10px ">
            <div className="flex-center "> Home </div>
            <div className="flex-center ">About Us </div>
            <div className="flex-center gap-3px">Shop <ChevronDown size={14} /></div>
            <div className="flex-center border-0 gap-3px">Blog <ChevronDown size={14} /></div>
            <div className="flex-center gap-3px">Page <ChevronDown size={14} /> </div>
            <div className="flex-center">GET PRO</div>
          </div>

          <div className="flex-center gap-10px">
            <div>
              <Search size={14} />
            </div>
            <div>
              <User size={14} />
            </div>
            <div>
              <ShoppingCart size={14} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-center flex-col gap-5px'>
        <h1 className='m-0 capitalize'>shop-sidebar</h1>
        <p className='m-0 capitalize  text-#D3D3D3 text-0.82rem'>home/shop-sidebar</p>
      </div>

      <div className="grid grid-flow-col gap-10px grid-cols-1fr_8fr m-0_20px">

        <div className='grid grid-flow-row grid-rows-auto'>
          <div className='flex h-30px'>
            <form>
              <input type="text" placeholder='Search' className=' pl-10px border-r-0 h-24px' />
            </form>
            <button className='border-l-0'>
              <Search size={18} />
            </button>
          </div>

          <div className='gap-3p'>
            <h3 className='capitalize text-14px underline'>caracteristicas</h3>
            <p className='capitalize text-11px'>t-shirts</p>
            <p className='capitalize text-11px'>Hoockes</p>
            <p className='capitalize text-11px'>aaa aaa</p>
            <p className='capitalize text-11px'>aaaa</p>
            <p className='capitalize text-11px'>aaa</p>
          </div>

          <div className=''>
            <h3 className='capitalize text-14px underline '>tags</h3>
            <p className='capitalize  text-11px'>t-shirts</p>
            <p className='capitalize  text-11px'>Hoockes</p>
            <p className='capitalize  text-11px'>aaa aaa</p>
            <p className='capitalize  text-11px'>aaaa</p>
            <p className='capitalize  text-11px'>aaa</p>
          </div>

          <div className=''>
            <h3 className='capitalize text-14px underline'>filter by price</h3>
            <p className='capitalize  text-11px'>t-shirts</p>
            <p className='capitalize text-11px'>Hoockes</p>
            <p className='capitalize text-11px'>aaa aaa</p>
            <p className='capitalize text-11px'>aaaa</p>
            <p className='capitalize text-11px'>aaa</p>
          </div>

        </div>
      </div>

    </div>
  );
}
