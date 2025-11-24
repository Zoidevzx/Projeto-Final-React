'use client'
import { User, Search, ShoppingCart, ChevronDown, TextAlignJustify } from 'lucide-react';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/ContextCart'

export function HeaderPage() {
    const [openshop, setOpenshop] = useState(false)
    const [openblog, setOpenblog] = useState(false)
    const [openpage, setOpenpage] = useState(false)
    const [openlist, setOpenlist] = useState(false)
    const pathname = usePathname()

    const itenshop = [
        { nome: 'Mordern', link: '/shop/categories/Modern' },
        { nome: 'New', link: '/shop/categories/New' },
        { nome: 'Classic', link: '/shop/categories/Classic' }
    ]

    const itensblog = [
        { nome: 'Ana', link: 'https://github.com/Ana-Clara1104' },
        { nome: 'Bruno', link: 'https://github.com/Zoidevzx' },
        { nome: 'Jean', link: 'https://github.com/Jean1702' },
        { nome: 'Joao', link: 'https://github.com/jooaoDev' }
    ]

    const itenspage = [
        { nome: 'Home', link: '/' },
        { nome: 'About', link: '/aboutus' },
        { nome: 'Shop', link: '/shop' },
        { nome: 'Cart', link: '/cart' },

    ]

    useEffect(() => {
        setOpenshop(false)
        setOpenblog(false)
        setOpenpage(false)
        setOpenlist(false)
    }, [pathname])

    const { cartItems } = useCart()

    const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    return (
        <div className="flex-center w-full">

            <header className="container flex justify-between ">

                <div className="flex-center">
                    <h1 className='m-0 p-0 font-bold text-3xl max-sm:text-base xl:text-5xl'>Urban</h1>
                </div>

                <div className="flex gap-10 text-xs">

                    <div className="grid grid-flow-col gap-3 xl:text-xl mr-4 max-sm:text-xs">
                        <div className="flex-center cursor-pointer"> <Link href={'/'}>Home</Link>  </div>
                        <div className="flex-center cursor-pointer text-nowrap"> <Link href={'/aboutus'}>About Us</Link>  </div>
                        <div className="flex-center gap-1 cursor-pointer relative">
                            <Link href={'/shop'}> Shop</Link>
                            <ChevronDown size={12} className={'xl:size-4'} onClick={() => openblog ? (setOpenblog(!openblog), setOpenshop(!openshop)) : openpage ? (setOpenpage(!openpage), setOpenshop(!openshop)) : openlist ? (setOpenlist(!openlist), setOpenshop(!openshop)) : setOpenshop(!openshop)} />

                            {openshop && (
                                <ul className='flex flex-col absolute top-8 md:top-10 gap-1 z-10 p-1 bg-white'>
                                    {itenshop.map((e, i) => (
                                        <li key={i}>
                                            <Link href={e.link}>
                                                {e.nome}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="flex-center border-0 gap-1 cursor-pointer relative">
                            <Link href={'https://github.com/Zoidevzx/Projeto-Final-React'}>Blog</Link>
                            <ChevronDown size={12} className={'xl:size-4'} onClick={() => openshop ? (setOpenshop(!openshop), setOpenblog(!openblog)) : openpage ? (setOpenpage(!openpage), setOpenblog(!openblog)) : openlist ? (setOpenlist(!openlist), setOpenblog(!openblog)) : setOpenblog(!openblog)} />

                            {openblog && (
                                <ul className='flex flex-col absolute top-8 md:top-10 left-0 gap-1 z-10 p-1 bg-white'>
                                    {itensblog.map((e, i) => (
                                        <li key={i}>
                                            <Link href={e.link}>
                                                {e.nome}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                        <div className="flex-center gap-1 cursor-pointer relative" onClick={() => openshop ? (setOpenshop(!openshop), setOpenpage(!openpage)) : openblog ? (setOpenblog(!openblog), setOpenpage(!openpage)) : openlist ? (setOpenlist(!openlist), setOpenpage(!openpage)) : setOpenpage(!openpage)}>
                            Page<ChevronDown size={12} className={'xl:size-4'} />

                            {openpage && (
                                <ul className='flex flex-col absolute top-8 md:top-10 left-0 gap-1 z-10 p-1 bg-white'>
                                    {itenspage.map((e, i) => (
                                        <li key={i}>
                                            <Link href={e.link}>
                                                {e.nome}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="flex-center ">
                        <div className='flex md:hidden flex-col relative' >
                            <TextAlignJustify className='cursor-pointer max-sm:size-3' onClick={() => openshop ? (setOpenshop(!openshop), setOpenlist(!openlist)) : openblog ? (setOpenblog(!openblog), setOpenlist(!openlist)) : openpage ? (setOpenpage(!openpage), setOpenlist(!openlist)) : setOpenlist(!openlist)} />
                            <div className='flex-center bg-red-500 size-4 absolute rounded-full left-3.5 top-4'>
                                <p className='text-center text-white text-[10px]   '>{totalItems}</p>
                            </div>
                            {openlist && (
                                <ul className='flex-center flex-col top-9 lef-0 gap-1 bg-white p-1.5 z-10 absolute'>
                                    <li ><Search size={12} className={'xl:size-5 '} /></li>
                                    <li >
                                        <Link href={'/dev'}>
                                            <User size={12} className={'xl:size-5'} />
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href={'/cart'}>
                                            <ShoppingCart size={12} className={'xl:size-5'} />
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className='md:flex-center gap-3 hidden'>
                            <div>
                                <Search size={12} className={'xl:size-5 '} />
                            </div>
                            <div>
                                <Link href={'/dev'}>
                                    <User size={12} className={'xl:size-5'} />
                                </Link>
                            </div>
                            <div >
                                <Link href={'/cart'} className='relative'>
                                    <ShoppingCart size={12} className={'xl:size-5'} />
                                    <div className='flex-center bg-red-500 size-4 absolute rounded-full left-3.5 top-3 sm:left-2 sm:top-1.5 sm:size-2 md:size-3.5 lg:size-4 lg:top-2 lg:left-2 2xl:top-3 2xl:left-3'>
                                        <p className='text-center text-white text-[10px] sm:text-2.5 lg:text-2  '>{totalItems}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>

            </header>
        </div>
    );
};