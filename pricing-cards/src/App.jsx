import React from "react";
import PriceCard from "./components/PriceCard";
import ProductModal from "./components/ProductModal";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    // <div className="bg-slate-800 h-auto md:h-screen flex items-center justify-center space-x-15 md:space-x-10 flex-col md:flex-row space-y-10 md:space-y-0  p-10 ">
    //   <PriceCard type={"BASIC"} data={"100GB"} price={"$1.99/Month"} />
    //   <PriceCard
    //     type={"STANDARD"}
    //     data={"200GB"}
    //     price={"$3.99/Month"}
    //     id={"2"}
    //   />
    //   <PriceCard type={"PREMIUM"} data={"2TB"} price={"$8.99/Month"} id={"3"} />

    // </div>
    // <div className="bg-[#F1F5F9]  h-screen flex items-center justify-center ">
    //   <ProductModal />
    // </div>
    <div className="bg-[#EBFDFE] h-screen  w-full flex justify-center items-center">
      <ImageGallery />
    </div>
  );  
}

export default App;
