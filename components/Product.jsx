import { Star, Heart } from 'lucide-react';

export default function Product() {
  return (
    <div className="flex-center">  
      <div className="container grid grid-rows-[1fr_2fr_4fr_4fr]">
        
          <div className="flex-center flex-col">
            <h1 className="text-4xl items-bold">Single-Product</h1>
            <p className="text-sm">home/single-product</p>
          </div>

          <div className="grid grid-flow-col grid-cols-[1fr_3fr_3fr] gap-5">

            <div className="grid grid-flow-row grid-rows-auto grid-cols-auto gap-3">
              <img src="item1_Home.png" alt="" />
              <img src="item2_Home.png" alt="" />
              <img src="item3_Home.png" alt="" />
            </div>
            
            <div className="w-full object-cover">
              <img src="item1_Home.png" alt="" />
            </div>

            <div className="flex gap-3 flex-col">

              <h1 className='text-2xl font-bold'>Graphic T-Shirt</h1>
              <div className="flex text-sm text-yellow-300 ">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className='text-xl'>$540.00 <span className='line-through text-xs align-bottomç'>$64.00</span></p>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptatibus sequi quasi reiciendis dolorem ducimus. Quisquam, quibusdam? Accusantium nemo ut blanditiis officia, tenetur velit unde nobis. Sapiente hic, animi sit tempore eos pariatur dolorum blanditiis dicta cum quam adipisci iste!</p>

              <div className='flex flex-col'>
                <p>3 in stock</p>
                <div className="flex flex-rows gap-4">
                  <div>  
                    <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg'>-</button>
                    <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300' type="text" name="" id="" />
                    <button className='font-bold h-9 w-8 border-stone-300 border-1 text-lg'>+</button>  
                  </div>
                  <button className='bg-[#9F1D1D] rounded-sm p-2 text-white text-sm'>Add to cart</button>
                  <div className="flex-center">
                    <Heart size={24} />
                  </div>
                </div>
              </div>

              <ul>
                <li><span className='font-bold' >SKU:</span> Woo-belt</li>
                <li><span className='font-bold'>Category:</span> Acessories</li>
                <li><span className='font-bold'>Togs:</span> Black Wooden Minmal Chair</li>
              </ul>
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
