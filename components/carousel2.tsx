'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const supporters = [
    {
      url: "/supporters/goi_s.png",
      alt: "Logo",
    },
  
    {
      url: "/supporters/iim_s.webp",
      alt: "Logo",
    },
  
    {
      url: "/supporters/isap_s.png",
      alt: "Logo",
    },
  
    {
      url: "/supporters/msme_s.avif",
      alt: "Logo",
    },
  
    
  
    
  ];
  
export default function Carousel2(){
    
        const [currentSupportIndex, setCurrentSupportIndex] = useState(0);

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentSupportIndex((prevIndex) =>
              prevIndex === supporters.length - 1 ? 0 : prevIndex + 1
            );
          }, 5000);
      
          return () => {
            clearInterval(interval);
          };
        }, []);
          return (
              <div>
                <div
                  className="items-center justify-center flex text-3xl font-bold md:pb-10 px-10
                  bg-gradient-to-r
                  from-blue-500
                  to-green-300
                  bg-clip-text
                  text-transparent
          
                  
                  "
                >
                 Our Supporters
                </div>
          
                <div className="grid grid-cols-3 p-4 md:flex">
                  <AnimatePresence
                  custom={currentSupportIndex}>
                      {supporters.map((support, index) => (
                          <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{
                              opacity : index === currentSupportIndex ? 1 : 0.8,
                              scale : index === currentSupportIndex ? 1.2 : 1,
                              transition: { duration: 0.5 },
                          }}
          
                          className="flex items-center justify-center h-40 w-40"
                          exit={{ opacity: 0 }}
                          custom={index}
                          transition={{ 
                              opacity: { duration: 0.05 },
                          }}
          
          
          
                          >
          
          
          
                              <Image
                              src={support.url}
                              alt={support.alt}
                              width={200}
                              height={200}
                              className="object-contain h-20 w-30 items-center gap-4 justify-center flex mx-auto"
                              />
          
          
                          </motion.div>
                      ))}
                  </AnimatePresence>
          
                </div>
              </div>
            );
         
      
      
}