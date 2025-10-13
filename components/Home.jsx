'use client'
import { User, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function IrparaShop(){
    router.push('/shop')
  }
  return (
    <>
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

            <div className="flex-center  gap-[10px]">
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

        <div className="flex relative mr-[20px] ml-[20px]">
          <div className='flex flex-col justify-center z-1'>
              <h1 className='m-[0]'>Classic Cotton T-Shirt</h1>
              <p className='text-[9px] w-[350px]'>Expenence ultimate comfart with or premum cotton t-shrts Perfect for everyday wear, they provide a stylish and relaxed fit for ann acasion</p>
              <button onClick={IrparaShop} className='bg-[#9F1D1D] rounded-[40px] w-[100px] h-[40px] text-[#ffffff] border-none'>Shop Now</button>
          </div>
          <div className='absolute right-[0px] '>
            <img src="Imagem_Home_Principal.webp" alt=""  className='w-[350px] h-[350px] object-cover '/>
          </div>
        </div>

        <div className="atributs"></div>

        <div className="desc"></div>
      </div>
    </>
  );
}
