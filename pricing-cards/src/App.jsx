import React from "react";
import PriceCard from "./components/PriceCard";

function App() {
  return (
    <div className="bg-slate-800 h-auto md:h-screen flex items-center justify-center space-x-15 md:space-x-10 flex-col md:flex-row space-y-10 md:space-y-0  p-10 ">
      <PriceCard type={"BASIC"} data={"100GB"} price={"$1.99/Month"}     />
      <PriceCard
        type={"STANDARD"}
        data={"200GB"}
        price={"$3.99/Month"}
        id={"2"}
      />
      <PriceCard type={"PREMIUM"} data={"2TB"} price={"$8.99/Month"} id={"3"} />
    </div>
  );
}

export default App;
