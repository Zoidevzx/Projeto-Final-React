'use client'
import { useState } from "react"
import { Minus, Plus } from "lucide-react"

export default function ItemsQuantity() {

    const [quantity, setQuantity] = useState(0)

    function AddQuantity() {
        if (quantity >= 0)
            setQuantity(quantity + 1)
    }

    function RemoveQuantity() {
        if (quantity != 0)
            setQuantity(quantity - 1)
    }

    return (
        <div>
            <form className="flex-center">
                <button type="button" className='font-extrabold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer flex-center' onClick={RemoveQuantity}><Minus size={16} /></button>
                <input className='h-9 w-14 bg-gray-200 border-y-1 border-stone-300 text-center font-medium' value={quantity} type="text" name="" id="" disabled />
                <button type="button" className='font-extrabold h-9 w-8 border-stone-300 border-1 text-lg cursor-pointer flex-center' onClick={AddQuantity} ><Plus size={16} /></button>
            </form>
        </div>
    )
}