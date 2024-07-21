"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [

  {
    url: "/investors/better_i.png",
    alt: "Logo",
  },

  {
    url: "/investors/bii_i.png",
    alt: "Logo",
  },

  {
    url: "/investors/oni_i.png",
    alt: "Logo",
  },

  {
    url: "/investors/Omnivore_i.jpeg",
    alt: "Logo",
  },

  {
    url: "/investors/rtp-i.png",
    alt: "Logo",
  },

  {
    url: "/investors/seq_i.png",
    alt: "Logo",
  },
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




  

  

export default function Carousel(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
    return (
        <div>
          <div
            className="items-center justify-center flex text-3xl  md:pb-2 px-10
          text-black
    
            
            "
          >
           Our investors & supporters
          </div>
    
          <div className="grid grid-cols-3 p-5 md:flex">
            <AnimatePresence
            custom={currentImageIndex}>
                {images.map((image, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity : index === currentImageIndex ? 1 : 0.8,
                        scale : index === currentImageIndex ? 1.2 : 1,
                        transition: { duration: 0.5 },
                    }}
    
                    className="flex items-center justify-center h-40 w-40"
                    exit={{ opacity: 0 }}
                    custom={index}
                    transition={{ 
                        opacity: { duration: 0.5},
                    }}
    
    
    
                    >
    
    
    
                        <Image
                        src={image.url}
                        alt={image.alt}
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
    };

    