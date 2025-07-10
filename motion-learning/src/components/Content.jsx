import React from 'react'
import { motion } from "motion/react";
function Content() {
  return (
      <motion.div
          whileHover={{rotate:[0, 10, -10, 0], scale: 1.05}}
        className="flex flex-col items-center justify-center space-y-4">
      <button className=" group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
        Subscribe
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to transparent h-px w-3/4 mx-auto"></span>
        <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to transparent h-[4px] w-full mx-auto blur-sm"></span>
      </button>
    </motion.div>
  );
}

export default Content
// animate={{ opacity: 1, x: 0, y: 0, rotate: [0,180,0]  }} initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }} transition={{ duration: 1.5 }}