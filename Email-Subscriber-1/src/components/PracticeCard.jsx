import React from "react";

function PracticeCard() {
  return (
    <div className="bg-zinc-800 p-2 rounded-2xl">
      <div className="flex flex-col md:flex-row ">
        <img
          src={
            "https://tailwindfromscratch.com/mini-projects/email-subscribe/images/image.jpg"
          }
                  className="object-fit h-80 md:h-64 rounded-xl md:rounded-l-xl  md:rounded-r-none transform hover:scale-105 hover:rounded-xl"
        />
        <div className=" p-6 md:p-12">
          <h2 className="font-serif text-center text-white font-medium md:text-left text-xl">Get diet and fitness tips in your inbox</h2>
          <p className=" max-w-xs my-5 text-center md:text-left text-white leading-5 tracking-wide ">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter.
                  </p>
                  
                  <div className=" flex flex-col md:flex-row mt-5 space-y-4 md:space-y-0 space-x-4 md:space-x-3" >
                      <input type="text" placeholder="Enter ur Email"
                          className="p-2 px-4 text-white bg-zinc-800 border border-zinc-700 placeholder:text-xs 
                      placeholder:text-center
                      md:text-center
                      placeholder:md:text-left focus-outline-none"/>
                      <button
                      className="px-5 text-white py-3 bg-lime-500 rounded-xl text-zinc-800 hover:text-white hover:bg-lime-700 duration-500">Submit</button>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeCard;
