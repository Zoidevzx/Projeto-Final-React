'use client'
import { User, Search, ShoppingCart, ChevronDown, ChevronRight, TextAlignJustify } from 'lucide-react';
import Link from 'next/link'
import { useState , useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function HeaderPage({itemcart}) {
    const [openshop, setOpenshop] = useState(false)
    const [openblog, setOpenblog] = useState(false)
    const [openpage, setOpenpage] = useState(false)
    const [openlist, setOpenlist] = useState(false)
    const pathname = usePathname()

    const itenshop = [
        {nome: 'Mordern', link: '/shop'},
        {nome: 'New', link: '/shop'},
        {nome: 'Classic', link: '/shop'}
    ]

    const itensblog = [
        {nome: 'Ana', link: 'https://github.com/Jean1702'},
        {nome: 'Bruno', link: 'https://github.com/Zoidevzx'},
        {nome: 'Jean', link: 'https://github.com/Jean1702'},
        {nome: 'Joao', link: 'https://github.com/Zoidevzx'}
    ]

    const itenspage = [
        {nome: 'Home', link: '/'},
        {nome: 'About', link: '/aboutus'},
        {nome: 'Shop', link: '/shop'},
        {nome: 'Cart', link: '/cart'},
        
    ]

    useEffect(() => {
      setOpenshop(false)  
      setOpenblog(false)  
      setOpenpage(false) 
      setOpenlist(false) 
    }, [pathname])

    return (
        <div className="flex-center">

            <header className="container flex justify-between ">
                
                <div className="flex-center">
                    <h1 className='m-0 p-0 font-bold text-3xl xl:text-5xl'>Urban</h1>
                </div>

                <div className="flex gap-10 text-xs">

                    <div className="grid grid-flow-col gap-3 xl:text-xl">
                        <div className="flex-center cursor-pointer"> <Link href={'/'}>Home</Link>  </div>
                        <div className="flex-center cursor-pointer"> <Link href={'/aboutus'}>About Us</Link>  </div>
                        <div  className="flex-center gap-1 cursor-pointer relative"> 
                            <Link href={'/shop'}> Shop</Link> 
                            <ChevronDown size={12} className={'xl:size-4'} onClick={() => openblog ? (setOpenblog(!openblog), setOpenshop(!openshop)) : openpage ? (setOpenpage(!openpage), setOpenshop(!openshop)) : openlist ? (setOpenlist(!openlist), setOpenshop(!openshop)) : setOpenshop(!openshop)} />
                            
                            {openshop && (
                                <ul className='flex flex-col absolute top-8 gap-1 z-10 p-1 bg-white'>
                                    {itenshop.map((e, i) =>(
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
                                <ul className='flex flex-col absolute top-8 left-0 gap-1 z-10 p-1 bg-white'>
                                    {itensblog.map((e, i) =>(
                                        <li key={i}>
                                            <Link href={e.link}>                                            
                                                {e.nome}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                        <div className="flex-center gap-1 cursor-pointer relative" onClick={() => openshop ? (setOpenshop(!openshop), setOpenpage(!openpage)): openblog ? (setOpenblog(!openblog), setOpenpage(!openpage)) : openlist ? (setOpenlist(!openlist), setOpenpage(!openpage)) : setOpenpage(!openpage)}>
                            Page<ChevronDown size={12} className={'xl:size-4'}/> 

                            {openpage && (
                                <ul className='flex flex-col absolute top-8 left-0 gap-1 z-10 p-1 bg-white'>
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
                            <TextAlignJustify  className='cursor-pointer' onClick={() => openshop ? (setOpenshop(!openshop), setOpenlist(!openlist)): openblog ? (setOpenblog(!openblog), setOpenlist(!openlist)) : openpage ? (setOpenpage(!openpage), setOpenlist(!openlist)) : setOpenlist(!openlist)}/>

                            {openlist &&(
                                <ul className='flex-center flex-col top-7 lef-0 gap-1 bg-white p-1.5 z-10 absolute'>
                                    <li ><Search size={12} className={'xl:size-5 '}/></li>
                                    <li >
                                        <Link href={'http://lattes.cnpq.br/4116708456419800'}>
                                            <User size={12} className={'xl:size-5'} />
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href={'/cart'}>
                                            <ShoppingCart size={12} className={'xl:size-5'}/>
                                        </Link>
                                    </li>        
                                </ul>
                            )}
                        </div>
                        <div className='md:flex-center gap-3 hidden'>
                            <div>
                                <Search size={12} className={'xl:size-5 '}/>
                            </div>
                            <div>
                                <Link href={'http://lattes.cnpq.br/4116708456419800'}>
                                    <User size={12} className={'xl:size-5'} />
                                </Link>
                            </div>
                            <div >
                                <Link href={'/cart'} className='relative'>
                                    <ShoppingCart size={12} className={'xl:size-5'}/>
                                    <div className='bg-red-500 w-3 h-3 absolute rounded-full'>{itemcart}</div>
                                </Link>
                            </div>
                        </div>

                                
                    </div>
                </div>

            </header>
        </div>
    );
};