'use client'
import { Heart, Star, Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Product({ title, subtitle, product }) {
  const [hoverstars, setIsHoverStars] = useState(null)
  const [clickstars, setIsClickStars] = useState(null)
  const [clickheart, setIsClickHeart] = useState(false)
  const [hoverheart, setIsHoverHeart] = useState(false)
  const [quantity, setQuantity] = useState(0)

  function AddQuantity() {
    if (quantity >= 0)
      setQuantity(quantity + 1)
  }


  function RemoveQuantity() {
    if (quantity != 0)
      setQuantity(quantity - 1)
  }

  function firtsproductorlast(prop) {
    return product.length === 2 ? product[0][prop] : product[1][prop]
  }

  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[1fr_2fr_1fr_1fr]">

        <div className="flex-center flex-col">
          <h1 className="text-4xl items-bold">{title}</h1>
          <p className="text-sm">{subtitle}</p>
        </div>
        <div className="grid grid-flow-col grid-cols-[1fr_4fr_3fr] gap-5">
          <div className="grid grid-flow-row grid-rows-auto grid-cols-auto h-[90%] gap-3">
            <Link href={`/product/${product[1].id}`}>
              <img src={product[1].image_url} alt="" />
            </Link>
            <Link href={`/product/${product[0].id}`}>
              <img src={product[0].image_url} alt="" />
            </Link>
            <Link href={`/product/${product[2].id}`}>
              <img src={product[2].image_url} alt="" />
            </Link>
          </div>

          <div className="w-full  " >
            <img src={product[0].image_url} alt="" className='h-[90%] w-full object-cover' />
          </div>


          <div className="flex gap-3 flex-col">

            <h1 className='text-2xl font-bold'>{product[0].name}</h1>
            <div className="flex text-sm text-yellow-300  "  >
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  fill={hoverstars !== null && i <= hoverstars || clickstars !== null && i <= clickstars ? "#ffff00" : "none"}
                  onClick={() => {
                    if (clickstars === i) {
                      setIsClickStars(null);
                      setIsHoverStars(null);
                    } else {
                      setIsClickStars(i);
                    }
                  }}
                  onMouseEnter={() => setIsHoverStars(i)}
                  onMouseLeave={() => setIsHoverStars(null)}
                />
              ))

              }
            </div>
            <p className='text-xl'>${product[0].price}<span className='line-through text-xs align-bottomç'>${parseInt(product[0].price) + parseInt(product[0].price * 40 / 100)}</span></p>
            <p className='text-sm'>{product[0].description}</p>

            <div className='flex flex-col'>
              <p>100 in stock</p>
              <div className="flex flex-rows gap-4">
                <div className='flex'>
                  <form className='flex-center'>
                    <button type='button' onClick={RemoveQuantity} className='font-bold size-9 border-stone-300 border-1 flex-center cursor-pointer'><Minus size={16} /></button>
                    <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300 flex-center text-center' value={quantity} type="text" name="num,e" id="" disabled />
                    <button type='button' onClick={AddQuantity} className='font-bold size-9 border-stone-300 border-1 flex-center cursor-pointer'><Plus size={16} /></button>
                  </form>
                </div>
                <button className='bg-[#9F1D1D] rounded-sm p-2 text-white text-sm' >Add to cart</button>
                <div className="flex-center">
                  <Heart size={26} strokeWidth="1" fill={clickheart || hoverheart ? "#9F1D1D" : "none"} onClick={() => { setIsClickHeart(!clickheart); setIsHoverHeart(false) }} onMouseEnter={() => setIsHoverHeart(true)} onMouseLeave={() => setIsHoverHeart(false)} />
                </div>
              </div>
            </div>

            <ul>
              <li><span className='font-bold' >SKU:</span> Woo-belt</li>
              <li><span className='font-bold'>Category:</span> {product[0].category}</li>
              <li><span className='font-bold'>Tags:</span> {product[0].tags}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="grid grid-flow-col grid-cols-auto border-b-1 border-stone-400">
            <div></div>
            <div className='flex-center hover:bg-[#9F1D1D] hover:text-white h-10 rounded-sm'>
              <button >Description</button>
            </div>
            <div className='flex-center hover:bg-[#9F1D1D] hover:text-white h-10 rounded-sm'>
              <button >Additional Information</button>
            </div>
            <div className='flex-center hover:bg-[#9F1D1D] hover:text-white h-10 rounded-sm'>
              <button>Shopping & Return</button>
            </div>
            <div className='flex-center hover:bg-[#9F1D1D] hover:text-white h-10 rounded-sm'>
              <button >Reviews</button>
            </div>
            <div></div>
          </div>

          <div className="flex flex-col gap-2">

            <h1 className='font-bold text-lg'>Product Descripition</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deserunt cumque tenetur quidem fugiat alias dicta ea vitae quaerat, suscipit quam beatae sit natus quia molestiae praesentium distinctio nesciunt error temporibus voluptate rerum repellat? Cupiditate repellat totam aut quibusdam eligendi assumenda consequatur. Exercitationem, sequi! Eaque laudantium commodi incidunt dicta ipsa?</p>
            <ul className='list-disc list-inside ml-4 text-3'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nisi blanditiis saepe veritatis possimus facilis distinctio quidem dolor sunt hic iure atque repudiandae velit accusamus doloribus consectetur dignissimos error nesciunt architecto, quis quaerat dolore eligendi numquam? Unde, ea recusandae? Tempore, accusantium? Suscipit rerum eos laboriosam neque iusto voluptatem. At, et.</p>

          </div>
        </div>

        <div className="flex-center ">
          <form action="" className='flex flex-col w-[50%] gap-1'>

            <h1 className='text-4xl font-bold text-center mb-3'>Get offers & discounts by subscribing us</h1>
            <input className='italic rounded-sm w-full h-12 pl-6 border-1 border-neutral-500' type="email" placeholder='Enter Your Email Address' />
            <button className='bg-black text-white rounded-sm  w-full h-12'>Subscribe Now</button>

          </form>
        </div>

      </div>
    </div>
  );
}
