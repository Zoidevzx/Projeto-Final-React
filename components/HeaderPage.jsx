import { User, Search, ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';

export function HeaderPage() {
    return (
        <div className="flex-center">

            <header className="container flex justify-between ">
                
                <div className="flex-center">
                    <h1 className='m-0 p-0 font-bold text-3xl'>Urban</h1>
                </div>

                <div className="flex gap-10 text-xs">

                    <div className="grid grid-flow-col gap-3 ">
                        <div className="flex-center "> Home </div>
                        <div className="flex-center ">About Us </div>
                        <div className="flex-center gap-1">Shop <ChevronDown size={12} /></div>
                        <div className="flex-center border-0 gap-1">Blog <ChevronDown size={12} /></div>
                        <div className="flex-center gap-1">Page <ChevronDown size={12} /> </div>
                        <div className="flex-center">GET PRO</div>
                    </div>

                    <div className="flex-center gap-3">
                        <div>
                            <Search size={12} />
                        </div>
                        <div>
                            <User size={12} />
                        </div>
                        <div>
                            <ShoppingCart size={12} />
                        </div>
                    </div>

                </div>

            </header>
        </div>
    );
};