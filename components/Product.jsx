'use client'
import ItemsQuantity from './ItemsQuantity'
import Subscribe from './Subscribe'
import { Heart, Star } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../context/ContextCart'


export default function Product({ title, subtitle, product }) {
  const [hoverstars, setIsHoverStars] = useState(null)
  const [clickstars, setIsClickStars] = useState(null)
  const [clickheart, setIsClickHeart] = useState(false)
  const [hoverheart, setIsHoverHeart] = useState(false)

  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  const handleIncrease = () => setQty(prev => prev + 1);
  const handleDecrease = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {

    const productToAdd = {
      id: product[0].id,
      img_url: product[0].image_url,
      name: product[0].name,
      value: product[0].price,
      description: product[0].description,
      category: product[0].category,
      tags: product[0].tags,
      quantity: qty
    };

    addToCart(productToAdd);
  };

  return (
    <div className="flex-center ">
      <div className="container grid grid-rows-[0.4fr_2fr_0.4fr_0.8fr] gap-10 ">

        <div className="flex-center flex-col">
          <h1 className="text-4xl items-bold">{title}</h1>
          <p className="text-sm">{subtitle}</p>
        </div>

        <div className="grid gap-5 grid-cols-1  md:grid-flow-col md:grid-cols-[1fr_4fr_3fr] grid-rows-[0.1fr] h-full content-stretch">
          
          <div className="grid grid-cols-3 max-sm:h-50 content-stretch md:grid-cols-1 md:grid-rows-3 gap-3 order-2 h-full md:order-1 md:h-200">
            <Link
              className='h-full transition-transform duration-300 hover:scale-105 active:scale-95'
              href={`/product/${product[1].id}`}
            >
              <img
                src={product[1].image_url}
                className='w-full h-full max-sm:h-50 object-cover object-top shadow-md hover:shadow-xl transition-shadow duration-300'
                alt=""
              />
            </Link>

            <Link
              className='h-full transition-transform duration-300 hover:scale-105 active:scale-95'
              href={`/product/${product[0].id}`}
            >
              <img
                src={product[0].image_url}
                className='w-full h-full max-sm:h-50 object-cover object-top shadow-md hover:shadow-xl transition-shadow duration-300'
                alt=""
              />
            </Link>

            <Link
              className='h-full transition-transform duration-300 hover:scale-105 active:scale-95'
              href={`/product/${product[2].id}`}
            >
              <img
                src={product[2].image_url}
                className='w-full h-full max-sm:h-50 object-cover object-top shadow-md hover:shadow-xl transition-shadow duration-300'
                alt=""
              />
            </Link>
          </div>

          <div className='h-full w-auto order-1 md:order-2 '   >
            <img src={product[0].image_url} alt="" className='w-full h-full max-sm:h-100 md:h-200 object-cover object-top' />
          </div>


          <div className="flex gap-3 flex-col order-3 max-sm:ml-2">

            <h2 className='text-2xl font-bold'>{product[0].name}</h2>
            <div className="flex text-sm text-yellow-300  "  >
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  fill={hoverstars !== null && i <= hoverstars || clickstars !== null && i <= clickstars ? "oklch(90.5% 0.182 98.111)" : "none"}
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
              <p className=''>100 in stock</p>
              <div className="flex flex-row max-md:flex-col max-md:items-start gap-4">
                <div className=''>
                  <ItemsQuantity
                    quantity={qty}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                  />
                </div>
                <div className="flex-center gap-2">
                  <button className='bg-[#9F1D1D] rounded-sm p-2 max-sm:w-30 text-white text-sm cursor-pointer  font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#b22222] hover:scale-105 hover:shadow-xl active:scale-95' onClick={handleAddToCart} >Add to cart</button>
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

        <div className="flex flex-col gap-2 max-sm:mx-2">
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

          <div className="flex flex-col gap-2 max-sm:ml-2">

            <h2 className='font-bold text-lg'>Product Descripition</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deserunt cumque tenetur quidem fugiat alias dicta ea vitae quaerat, suscipit quam beatae sit natus quia molestiae praesentium distinctio nesciunt error temporibus voluptate rerum repellat? Cupiditate repellat totam aut quibusdam eligendi assumenda consequatur. Exercitationem, sequi! Eaque laudantium commodi incidunt dicta ipsa?</p>
            <ul className='list-disc list-inside ml-4 text-3'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nisi blanditiis saepe veritatis possimus facilis distinctio quidem dolor sunt hic iure atque repudiandae velit accusamus doloribus consectetur dignissimos error nesciunt architecto, quis quaerat dolore eligendi numquam? Unde, ea recusandae? Tempore, accusantium? Suscipit rerum eos laboriosam neque iusto voluptatem. At, et.</p>

          </div>
        </div>

        <div className="flex-center flex-col">
          <Subscribe />
        </div>

      </div>
    </div>
  );
}
