  import React from 'react'

  function PriceCard({ type, data, price, id }) {

    return (
      <div className="bg-slate-800 h-auto md:h-screen flex items-center justify-center space-x-15 md:space-x-10 flex-col md:flex-row space-y-10 md:space-y-0  p-10 ">
        <div
          className={` rounded-xl w-65 transform hover:scale-105 duration-200  ${
            id === "2" ? "bg-violet-600" : "bg-slate-700"
          }`}
        >
          <div
            className={`bg-slate-800  m-3 p-2 rounded-xl flex flex-col justify-center items-center `}
          >
            <h2 className="text-white p-5 text-l">{type}</h2>
            <h1 className="text-white font-serif text-5xl pt-5">{data}</h1>
            <h3 className="text-white p-2">{price}</h3>
            <button
              className={`px-10 my-5 py-3 border-2 text-white border-violet-800 hover:bg-violet-800 rounded-xl ${
                id == 2 ? "bg-violet-600" : "bg-slate-800"
              } `}
            >
              Purchase
            </button>

            <div className="border-t-2 border-slate-700 w-full m-5"></div>

            <div className="flex-col space-y-2 flex items-center justify-center p-5    text-sm">
              <div className="flex text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span>{data} of Storage</span>
              </div>
              <div className="flex text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span>Option to add members</span>
              </div>
              <div className="flex text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span>Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default PriceCard
