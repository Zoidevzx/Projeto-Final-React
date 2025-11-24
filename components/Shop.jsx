"use client"
import { Search, ArrowBigLeft, ArrowBigRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

export default function Shop({ title, subtitle, cat, tag, allproducts }) {
  const pathname = usePathname()

  const CategoryRoute = pathname.includes('/shop/categories')
  const TagRoute = pathname.includes('/shop/tags')

  const productList = CategoryRoute ? cat : TagRoute ? tag : allproducts;

  const Categories = [
    { id: 1, name: 'Classic', link: '/shop/categories/Classic' },
    { id: 2, name: 'New', link: '/shop/categories/New' },
    { id: 3, name: 'Modern', link: '/shop/categories/Modern' }
  ]

  const Tags = [
    { id: 1, name: 'Casual Wear', link: '/shop/tags/Casual%20Wear' },
    { id: 2, name: 'Street Style', link: '/shop/tags/Street%20Style' },
    { id: 3, name: 'Oversized Fit', link: '/shop/tags/Oversized%20Fit' },
    { id: 4, name: 'Cotton Fabric', link: '/shop/tags/Cotton%20Fabric' },
    { id: 5, name: 'Trendy Designs', link: '/shop/tags/Trendy%20Designs' }
  ]

  const Values = [
    { id: 1, value: 'Less than $90' },
    { id: 2, value: '$90-$109' },
    { id: 3, value: '$110-$149' },
    { id: 4, value: '$150-$179' },
    { id: 5, value: '$180-$200' }
  ]

  return (
    <div className="flex-center">
      <div className="container grid sm:grid-rows-[1fr_13fr] max-sm:grid-rows-[1fr_15fr]">
        <div className='flex-center flex-col gap-3'>
          <h1 className='m-0 text-5xl font-bold'>{title}</h1>
          <p className='m-0 text-gray-300 text-lg font-medium'>{subtitle}</p>
        </div>

        <div className="grid xl:grid-flow-col xl:grid-cols-[1fr_5fr] lg:grid-flow-col lg:grid-cols-[2fr_5fr] max-md:grid-cols-1 gap-10 max-md:gap-30">

          <div className='shop-layout'>
            <div className='xl:flex md:flex md:items-start max-md:flex max-md:items-start '>
              <form className='flex-center '>
                <input type="text" placeholder='Search' className='border-1 border-black p-1 h-10' />
                <button type='button' className='bg-[#704204] p-1 flex-center h-10 w-10 cursor-pointer'>
                  <Search size={14} color='white' />
                </button>
              </form>
            </div>

            <div>
              <h3 className='font-semibold underline text-xl'>Categories</h3>
              {Categories.map((n) => (
                <Fragment key={n.id}>
                  <Link href={n.link}>
                    <p className='cursor-pointer font-light'>{n.name}</p>
                  </Link>
                </Fragment>
              ))}
            </div>

            <div>
              <h3 className='font-semibold underline text-xl'>Tags</h3>
              {Tags.map((n) => (
                <Fragment key={n.id}>
                  <Link href={n.link}>
                    <p className='cursor-pointer font-light'>{n.name}</p>
                  </Link>
                </Fragment>
              ))}
            </div>

            <div>
              <h3 className='font-semibold underline text-xl'>Filter By Price</h3>
              {Values.map((v) => (
                <Fragment key={v.id}>
                  <p className='cursor-pointer font-light'>{v.value}</p>
                </Fragment>
              ))}
            </div>

          </div>

          <div className='grid gap-5 sm:grid-cols-3  sm:gap-4 max-sm:grid-cols-1 max-sm:grid-flow-row'>
            <div className='flex justify-between sm:col-span-3'>
              <h2 className='text-zinc-500 font-medium'>Showing 1-9 of 27 results</h2>
              <button className='border-1 p-1 border-stone-300 hover:cursor-pointer w-30 h-8 text-nowrap font-medium'>
                Default sorting
              </button>
            </div>
            {productList.length === 0 ? (
              <p className='flex items-start justify-center text-4xl sm:col-span-3 '>Produto não encontrado</p>
            ) :
              productList.map((e, i) => {
                const produtosfinal = i >= productList.length - (productList.length % 3);
                const resto = productList.length % 3;

                let Classefinal = "";
                if (produtosfinal && resto === 1) {
                  Classefinal = "sm:col-start-2";
                }
                return (
                  <div key={e.id} className={Classefinal}>
                    <Link href={`/product/${e.id}`}>
                      <img src={e.image_url} className='xl:h-100 w-full object-cover object-top max-xl:h-75 max-lg:h-100 max-sm:h-100' alt="" />
                      <p className='font-semibold sm:text-2xl max-sm:text-xl max-sm:flex-center'>{e.name}</p>
                      <p className='font-light sm:text-lg max-sm:text-lg max-sm:flex-center'>${e.price}</p>
                    </Link>
                  </div>
                )
              })
            }
            <div className='flex justify-center sm:col-span-3 mt-4'>
              <div className='grid grid-cols-5 h-8 w-40'>
                <Link className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100' href={pathname === '/shop/categories/Modern' ? '/shop/categories/New' : '/shop/categories/Classic'}><ArrowBigLeft strokeWidth={2} size={18} /></Link>
                <Link className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100 w-full h-full' href={'/shop/categories/Classic'}>
                  1
                </Link>
                <Link className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100 w-full h-full' href={'/shop/categories/New'}>
                  2
                </Link>
                <Link className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100 w-full h-full' href={'/shop/categories/Modern'}>
                  3
                </Link>
                <Link className='flex-center border border-neutral-200 cursor-pointer hover:bg-[#9F1D1D] hover:text-stone-100' href={pathname === '/shop/categories/Classic' ? '/shop/categories/New' : '/shop/categories/Modern'}>
                  <ArrowBigRight strokeWidth={2} size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
