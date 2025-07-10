import React from "react";

function ImageGallery() {
  return (
    <div className="bg-[#FFFFFF] p-4 rounded-xl border h-screen mt-10 mx-10 w-full">
      <div className=" p-20">
        {/* menu sector */}
        <div className=" space-x-0 flex flex-col md:flex-row justify-center p-10  text-l  md:space-x-10  items-center md:justify-end ">
          <a href="/">Vector</a>
          <a href="/">Illustrations</a>
          <a href="/">Images</a>
          <a href="/">Icons</a>
        </div>

        {/* serch */}
        <div className="flex flex-col md:flex-row justify-between p-10  gap-5">
          <div className="flex items-center justify-between ">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 border-t-0  border-r-0 border-l-0 px-6 py-3 "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 text-gray-300 duration-200 hover:scale-110"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>

          <div className=" px-10 py-3 bg-black rounded-lg hover:border-black hover:bg-white hover:text-black  text-center transition hover:scale-105  hover:shadow-2xl text-white">
            Upload
          </div>
        </div>

        {/* gallery contaner */}
        <div className="">
            <div className=" grid md:grid-cols-5 grid-cols-1   gap-y-10 gap-x-5 ">
            <img src={"/img-1.jpeg"} className="w-72" />
            <img src={"/img-2.jpeg"} className="w-72" />
            <img src={"/img-3.jpeg"} className="w-72" />
            <img src={"/img-4.jpeg"} className="w-72" />
            <img src={"/img-5.jpeg"} className="w-72" />
            <img src={"/img-6.jpeg"} className="w-72" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
