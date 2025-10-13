'use client'
import { User, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Shop() {
  return (
    <div className="container grid grid-rows-[1fr_10fr_5fr_4fr] ">
      <div className="flex justify-between mr-[20px] ml-[20px]">
        <div className="flex-center  mt-[10px]">
          <h1 className='m-[0] '>Urban</h1>
        </div>

        <div className="flex justify-between gap-[40px] text-[0.875rem]">
          <div className="grid grid-flow-col gap-[10px] ">
            <div className="flex-center "> Home </div>
            <div className="flex-center ">About Us </div>
            <div className="flex-center gap-[3px]">Shop <ChevronDown size={14} /></div>
            <div className="flex-center border-0 gap-[3px]">Blog <ChevronDown size={14} /></div>
            <div className="flex-center gap-[3px]">Page <ChevronDown size={14} /> </div>
            <div className="flex-center">GET PRO</div>
          </div>

          <div className="flex-center gap-[10px]">
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

      <div className='flex-center flex-col gap-[5px]'>
        <h1 className='m-[0] capitalize'>shop-sidebar</h1>
        <p className='m-[0] capitalize  text-[#D3D3D3] text-[0.82rem]'>home/shop-sidebar</p>
      </div>

      <div className="grid grid-flow-col gap-[10px] grid-cols-[1fr_8fr] m-[0_20px] h-[]">
        <div className=''>
          aaa
        </div>
        <div>
          aaa
        </div>
      </div>


    </div>
  );
}
