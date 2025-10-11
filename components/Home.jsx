import { User, Search, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="container grid grid-rows-[1fr_7fr_8fr_5fr]">
        <div className="flex justify-between">
          <div className="flex-center ml-[10px] mt-[10px]">
            <h1 className='m-[0] '>Urban</h1>
          </div>

          <div className="flex justify-between gap-[40px] text-[0.875rem]">
            <div className="grid grid-flow-col gap-[10px] ">
              <div className="flex-center text-xs "> Home </div>
              <div className="flex-center ">About Us </div>
              <div className="flex-center gap-[3px]">Shop <ChevronDown size={14} /></div>
              <div className="flex-center border-0 gap-[3px]">Blog <ChevronDown size={14} /></div>
              <div className="flex-center gap-[3px]">Page <ChevronDown size={14} /> </div>
              <div className="flex-center">GET PRO</div>
            </div>

            <div className="flex-center mr-[10px] gap-[10px]">
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

        <div className="shop"></div>

        <div className="atributs"></div>

        <div className="desc"></div>
      </div>
    </>
  );
}
