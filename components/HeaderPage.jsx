import { User, Search, ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link'

export function HeaderPage() {

    return (
        <div className="flex-center">

            <header className="container flex justify-between ">
                
                <div className="flex-center">
                    <h1 className='m-0 p-0 font-bold text-3xl'>Urban</h1>
                </div>

                <div className="flex gap-10 text-xs">

                    <div className="grid grid-flow-col gap-3 ">
                        <div className="flex-center cursor-pointer"> <Link href={'/'}>Home</Link>  </div>
                        <div className="flex-center cursor-pointer"> <Link href={'/aboutus'}>About Us</Link>  </div>
                        <div  className="flex-center gap-1 cursor-pointer"> <Link href={'/shop'}> Shop</Link> <ChevronDown size={12} /></div>
                        <div className="flex-center border-0 gap-1 cursor-pointer">Blog <ChevronDown size={12} /></div>
                        <div className="flex-center gap-1 cursor-pointer">Page<ChevronDown size={12} /> </div>
                        <div className="flex-center">GET PRO</div>
                    </div>

                    <div className="flex-center gap-3">
                        <div>
                            <Search size={12} />
                        </div>
                        <div>
                            <User size={12} />
                        </div>
                        <div className='cursor-pointer'>
                            <Link href={'/cart'}>
                                <ShoppingCart size={12} />
                            </Link>
                        </div>
                    </div>

                </div>

            </header>
        </div>
    );
};