'use client'
import { User, Search, ShoppingCart, ChevronDown, TextAlignJustify } from 'lucide-react';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/ContextCart';
import Darkmode from './DarkMode';

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

            <header className="container flex justify-between max-sm:justify-around">

                <div className="flex-center">
                    <Link href={'/'}>
                        <h1 className='m-0 p-0 font-bold text-3xl max-sm:text-base xl:text-5xl'>Urban</h1>
                    </Link>
                </div>

                <div className="flex gap-10 max-sm:gap-0 text-xs">

                    <div className="grid grid-flow-col gap-3 max-sm:gap-0 xl:text-xl mr-4 max-sm:text-xs">
                        <div className='grid grid-flow-col gap-3 max-sm:gap-2'>
                            <div className="flex-center cursor-pointer relative group">
                                <Link href={'/'}
                                    className="relative 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-[2px] after:w-0 after:bg-black
                                    after:transition-all after:duration-200 after:ease-in-out
                                    group-hover:after:w-full
                                    dark:after:bg-white"
                                >
                                    Home
                                </Link>

                            </div>
                            <div className="flex-center cursor-pointer text-nowrap relative group">
                                <Link href={'/aboutus'}
                                    className="relative
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-[2px] after:w-0 after:bg-black
                                    after:transition-all after:duration-200 after:ease-in-out
                                    group-hover:after:w-full
                                    dark:after:bg-white"
                                >
                                    About Us
                                </Link>

                            </div>
                            <div className="flex-center gap-1 cursor-pointer relative group">
                                <Link href={'/shop'}
                                    className="relative
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-[2px] after:w-0 after:bg-black
                                    after:transition-all after:duration-200 after:ease-in-out
                                    group-hover:after:w-full
                                    dark:after:bg-white"
                                >

                                    Shop
                                </Link>
                                <ChevronDown size={12} className={'xl:size-4'} onClick={() => openblog ? (setOpenblog(!openblog), setOpenshop(!openshop)) : openpage ? (setOpenpage(!openpage), setOpenshop(!openshop)) : openlist ? (setOpenlist(!openlist), setOpenshop(!openshop)) : setOpenshop(!openshop)} />

                                {openshop && (
                                    <ul
                                        className="flex flex-col absolute top-8 md:top-10 left-0 gap-1 z-10 p-1 
                                        bg-white dark:bg-gray-800 
                                        text-gray-900 dark:text-gray-100 
                                        border border-gray-200 dark:border-gray-700 rounded-md shadow-md"
                                    >
                                        {itenspage.map((e, i) => (
                                            <li
                                                key={i}
                                                className="transition duration-200 ease-in-out 
                                                hover:bg-gray-100 dark:hover:bg-gray-700 
                                                hover:scale-105 active:scale-95 
                                                rounded-md px-2 py-1 cursor-pointer"
                                            >
                                                <Link href={e.link} className="block w-full h-full">
                                                    {e.nome}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>


                            <div className="flex-center border-0 gap-1 cursor-pointer relative group">
                                <Link href={'https://github.com/Zoidevzx/Projeto-Final-React'}
                                    target='_blank'
                                    className="relative 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-[2px] after:w-0 after:bg-black
                                    after:transition-all after:duration-200 after:ease-in-out
                                    group-hover:after:w-full
                                    dark:after:bg-white"
                                >
                                    Blog
                                </Link>
                                <ChevronDown size={12} className={'xl:size-4'} onClick={() => openshop ? (setOpenshop(!openshop), setOpenblog(!openblog)) : openpage ? (setOpenpage(!openpage), setOpenblog(!openblog)) : openlist ? (setOpenlist(!openlist), setOpenblog(!openblog)) : setOpenblog(!openblog)} />

                                {openblog && (
                                    <ul
                                        className="flex flex-col absolute top-8 md:top-10 left-0 gap-1 z-10 p-1 
                                        bg-white dark:bg-gray-800 
                                        text-gray-900 dark:text-gray-100 
                                        border border-gray-200 dark:border-gray-700 rounded-md shadow-md"
                                    >
                                        {itenspage.map((e, i) => (
                                            <li
                                                key={i}
                                                className="transition duration-200 ease-in-out 
                                                hover:bg-gray-100 dark:hover:bg-gray-700 
                                                hover:scale-105 active:scale-95 
                                                rounded-md px-2 py-1 cursor-pointer"
                                            >
                                                <Link href={e.link} className="block w-full h-full">
                                                    {e.nome}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                            <div className="flex-center gap-1 cursor-pointer relative  group" onClick={() => openshop ? (setOpenshop(!openshop), setOpenpage(!openpage)) : openblog ? (setOpenblog(!openblog), setOpenpage(!openpage)) : openlist ? (setOpenlist(!openlist), setOpenpage(!openpage)) : setOpenpage(!openpage)}>
                                <Link href={'/'}
                                    className="relative
                                    after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:h-[2px] after:w-0 after:bg-black
                                    after:transition-all after:duration-200 after:ease-in-out
                                    group-hover:after:w-full
                                    dark:after:bg-white"
                                >
                                    Page
                                </Link>
                                <ChevronDown size={12} className={'xl:size-4'} />

                                {openpage && (
                                    <ul
                                        className="flex flex-col absolute top-8 md:top-10 left-0 gap-1 z-10 p-1 
                                        bg-white dark:bg-gray-800 
                                        text-gray-900 dark:text-gray-100 
                                        border border-gray-200 dark:border-gray-700 rounded-md shadow-md"
                                    >
                                        {itenspage.map((e, i) => (
                                            <li
                                                key={i}
                                                className="transition duration-200 ease-in-out 
                                                hover:bg-gray-100 dark:hover:bg-gray-700 
                                                hover:scale-105 active:scale-95 
                                                rounded-md px-2 py-1 cursor-pointer"
                                            >
                                                <Link href={e.link} className="block w-full h-full">
                                                    {e.nome}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-center ">
                        <div className='flex-center md:hidden flex-col relative ' >
                            <TextAlignJustify className='cursor-pointer max-sm:size-4' onClick={() => openshop ? (setOpenshop(!openshop), setOpenlist(!openlist)) : openblog ? (setOpenblog(!openblog), setOpenlist(!openlist)) : openpage ? (setOpenpage(!openpage), setOpenlist(!openlist)) : setOpenlist(!openlist)} />
                            <div className='flex-center bg-red-500 z-50 size-3.5 absolute max-sm:top-3 max-sm:left-2 rounded-full md:left-2 md:top-2 sm:left-4 sm:top-3'>
                                <p className='text-center text-white text-[10px]'>{totalItems}</p>
                            </div>
                            {openlist && (
                                <ul
                                    className='flex-center flex-col absolute top-8 md:top-10 gap-1 z-10 p-1
                                    bg-white dark:bg-gray-800 
                                    text-gray-900 dark:text-gray-100 
                                    border border-gray-200 dark:border-gray-700 rounded-md shadow-md '
                                >
                                    <li ><Darkmode /></li>
                                    <li >
                                        <Link href={'/dev'}>
                                            <User size={12} className={'xl:size-5'} />
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href={'/cart'}>
                                            <ShoppingCart size={12} className={'xl:size-5 '} />
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className='md:flex-center gap-3 hidden md:mr-2'>
                            <div>
                                <Darkmode />
                            </div>
                            <div>
                                <Link href={'/dev'}>
                                    <User size={12}
                                        className="xl:size-5 
                                        transition duration-300 ease-in-out 
                                        hover:scale-110 hover:rotate-6 
                                        active:scale-95 
                                        dark:text-white"
                                    />
                                </Link>

                            </div>
                            <div >
                                <Link href={'/cart'} className='relative'>
                                    <ShoppingCart size={12}
                                        className="xl:size-5 
                                        transition duration-300 ease-in-out 
                                        hover:scale-110 hover:rotate-6 
                                        active:scale-95 
                                        dark:text-white"
                                    />
                                    <div className='flex-center bg-red-500 size-4 absolute rounded-full z-29 left-3.5 top-3 sm:left-2 sm:top-1.5 sm:size-2 md:size-3.5 lg:size-4 lg:top-2 lg:left-2 2xl:top-3 2xl:left-3'>
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