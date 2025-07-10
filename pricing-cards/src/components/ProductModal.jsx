import React from "react";

function ProductModal() {
  return (
    <div >
      <div className="bg-[#FFFFFF]   rounded-3xl shadow-2xl space-y-10 md:space-y-0 md:space-x-10  ">
        <div className="flex flex-col md:flex-row p-6 md:p-16 m-3 md:m-0    ">
          <div>
            <img
              src={"/public/headphone.png"}
              className="transform hover:scale-105 duration-200 w-60 mx-auto"
            />
          </div>
          <div className=" p-5 text-center md:text-left  space-y-3">
            {/* //free shiping */}
            <div className="rounded-full text-white bg-black w-32 px-3 py-1 text-sm inline-block  ">
              Free Shipping
            </div>

            {/* product name */}
            <div className="text-2xl font-medium max-w-sm  text-center md:text-left   ">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>

            {/* orginal price  */}
            <div className="line-through">$799</div>

            {/* actual price */}
            <div className="text-5xl font-bold">$599</div>

            {/* offer expiry */}
            <div className="text-sm font-light text-gray-400">
              <p>
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>

            {/* add to cart button */}
            <div className="group  border-blue-700">
              <button className="rounded-3xl border-blue-700 w-full transition-all duration-150 bg-blue-700 text-white border-b-blue-700 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700  border-blue-700">
                  Add to Cart
                </div>
              </button>
            </div>

            {/* number of stocks */}
            <div className="flex items-center space-x-3 group ">
              <div className="w-3 h-3 border rounded-full animate-ping bg-green-700"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4    ">
              {/* add to cart button */}
              <button className="px-10 py-3 border-2  border-gray-300 rounded-lg  hover:bg-opacity-30 hover:shadow-xl  hover:scale-105 hover:border-blue-700">
                Add to cart
              </button>

              {/* add to whishlist button */}
              <button className=" px-6 py-3 border-2  border-gray-300 rounded-lg  hover:bg-opacity-30 hover:shadow-xl hover:scale-105 hover:border-blue-700">
                add to wish list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
