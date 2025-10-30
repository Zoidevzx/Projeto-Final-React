'use client'
export default function Cart() {
  return (
    <div className="flex-center">
      <div className="container grid grid-rows-[4fr_8fr_6fr_4fr]  gap-10">
        <div className="flex-center flex-col gap-4">
          <h1 className="m-0 font-bold text-5xl">Cart</h1>
          <p className="m-0 text-gray-300 text-base">Home / Cart</p>
        </div>

        <div className="grid grid-flow-col grid-cols-[4fr_2fr]">


          <div className="grid grid-flow-row grid-rows-[1fr_3fr_3fr]">
            <div className="grid grid-flow-col">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
          </div>


          <div className="grid grid-flow-row grid-rows-[1fr_2fr_6fr] gap-4">
            <h1 className="m-0 text-2xl font-bold">Cart Total</h1>
            <div className="grid grid-flow-row grid-cols-2 gap-x-5">
              <div className="col-span-2 border-b border-gray-300 mb-2"></div>
              <p className="font-bold">Subtotal</p>
              <p>$410.00</p>
              <div className="col-span-2 border-b border-gray-300 my-2"></div>
              <p className="font-bold">Total</p>
              <p>$410.00</p>
              <div className="col-span-2 border-b border-gray-300 mt-2"></div>
            </div>
            <div className="flex items-center h-50">
              <div className="grid grid-flow-row grid-cols-2 gap-x-5 gap-y-4 w-full">
                <button className="text-center border-4 border-indigo-500/100 p-1 cursor-pointer h-11">Update Cart</button>
                <button className="text-center border-4 border-indigo-500/100 p-1 cursor-pointer h-11">Continue Shopping</button>
                <div className="col-span-2">
                  <button className="w-full text-center border-4 border-indigo-500/100 p-1 cursor-pointer">Proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
