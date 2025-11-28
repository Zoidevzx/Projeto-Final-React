'use client'
import { Minus, Plus } from "lucide-react"

export default function ItemsQuantity({ quantity, onIncrease, onDecrease }) {

    return (
        <div>
            <div className="flex-center">
                <button
                    type="button"
                    className='font-extrabold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer flex-center'
                    onClick={onDecrease}
                >
                    <Minus size={16} />
                </button>

                <input
                    className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300 text-center font-medium'
                    value={quantity}
                    type="text"
                    readOnly
                    disabled
                />

                <button
                    type="button"
                    className='font-extrabold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer flex-center'
                    onClick={onIncrease}
                >
                    <Plus size={16} />
                </button>
            </div>
        </div>
    )
}