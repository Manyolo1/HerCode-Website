"use client"
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="border-t-[2px] border-white bg-[#2D0704] mt-8 py-8">
            <div className="flex flex-col md:flex-row justify-between gap-16 p-8">
                <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mx-auto">
                    <h2 className="text-white text-3xl font-bold mb-2">Get in Touch!</h2>
                    <p className="text-white text-md mb-4">Any question or remarks? Let us know!</p>
                    <div className="bg-[#5a3e40] p-6 rounded-md w-full">
                        <form className="flex flex-col space-y-4 rounded-xl">
                            <input className="p-3 text-[#c9a8a8] rounded bg-white" type="text" placeholder="Enter your name" />
                            <input className="p-3 text-[#c9a8a8] rounded bg-white" type="email" placeholder="Enter your email" />
                            <textarea className="p-3 text-[#c9a8a8] rounded bg-white" placeholder="Type your message here" />
                            <button className="bg-[#2D0704] text-white p-3 rounded-full border-2 border-transparent hover:border-white">SEND</button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-1/3 text-white">
                    <div>
                        <h4 className="font-bold">QUICK LINKS</h4>
                        <ul className="mt-4 space-y-3">
                            <li className="cursor-pointer underline-offset-2 hover:underline">Home</li>
                            <li className="cursor-pointer underline-offset-2 hover:underline">About Us</li>
                            <li className="cursor-pointer underline-offset-2 hover:underline">Events</li>
                            <li className="cursor-pointer underline-offset-2 hover:underline">Our Team</li>
                            <li className="cursor-pointer underline-offset-2 hover:underline">Newsletter</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-bold">CONTACT US</h4>
                        <div className="flex gap-4 mt-4 justify-center md:justify-start">
                            <FaLinkedin className="text-4xl" />
                            <FaInstagram className="text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-md text-[#e4a1a3] p-4">
                Made with 🤍 by Team HerCode | 2024
            </div>
        </div>
    );
}
