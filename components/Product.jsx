import { Star } from 'lucide-react';


export default function Product() {
  return (
    <div className="flex-center">  
      <div className="container grid grid-rows-[3fr_2fr_4fr_4fr]">
        
          <div className="flex-center flex-col">
            <h1 className="text-4xl items-bold">Single-Product</h1>
            <p className="text-sm">home/single-product</p>
          </div>

          <div className="grid grid-flow-col grid-cols-[1fr_3fr_2fr]">

            <div className="grid grid-flow-row grid-rows-auto grid-cols-auto">
              <img src="item1_Home.png" alt="" />
              <img src="item2_Home.png" alt="" />
              <img src="item3_Home.png" alt="" />
            </div>
            
            <div className="img">
              <img src="item1_Home.png" alt="" />
            </div>

            <div className="text">

              <h1>Graphic T-Shirt</h1>
              <div className="flex ">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>$540.00 <span className='line-through text-2 align-sub'>$64.00</span></p>

            </div>
          </div>

          <div className="desc">

          </div>

          <div className="get">

          </div>

      </div>  
    </div>
  );
}
