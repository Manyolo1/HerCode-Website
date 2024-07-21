import Image from "next/image";

export default function FirstSect() {
    return (
        <section className="flex flex-col-reverse md:flex-row h-screen md:h-[calc(100vh-80px)] mx-4 relative">
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start py-10 md:py-0 text-black relative z-10">
                <div className="relative md:px-20 px-10 text-center md:text-left">
                    <div className="relative inline-block mb-4">
                        <div className="text-4xl md:text-6xl font-bold text-[#2D0704] relative z-20">
                            breaking barriers ;
                        </div>
                        <div className="absolute bottom-[-1rem] left-1 w-full h-6 z-10">
                            <Image src="/underline.png" layout="fill" objectFit="contain" alt="underline" />
                        </div>
                    </div>
                    <div className="relative inline-block mt-4">
                        <div className="text-4xl md:text-6xl font-bold text-[#2D0704] relative z-20">
                            writing code ;
                        </div>
                        <div className="absolute bottom-[-1rem] left-0 w-full h-6 z-10">
                            <Image src="/underline.png" layout="fill" objectFit="contain" alt="underline" />
                        </div>
                    </div>
                </div>
                <div className="md:px-20 px-10 text-md md:text-lg text-center md:text-left mt-6 md:mt-8 text-[#2D0704]">
                    HerCode is a vibrant community where women in tech connect, create, and conquer together.
                    We empower and inspire each other through innovation, collaboration, and shared knowledge.
                    Join us to elevate your potential and shape the future of technology!
                </div>
                <div className="flex gap-4 flex-col md:flex-row justify-center md:justify-start md:px-20 px-10 mt-8 md:mt-10">
                    <button className="bg-white text-[#2D0704] px-6 py-2 md:px-10 md:py-4 rounded-2xl text-md md:text-lg font-semibold border-2 border-transparent hover:border-[#2D0704]">
                        Apply now
                    </button>
                    <button className="bg-[#2D0704] text-white px-6 py-2 md:px-10 md:py-4 rounded-2xl text-md md:text-lg font-semibold border-2 border-transparent hover:border-white">
                        Join the team
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center h-full">
                <div className="relative w-full h-[500px] md:h-full">
                    <Image 
                        src="/final_image.png" 
                        layout="fill" 
                        objectFit="contain" 
                        className="rounded-xl" 
                        alt="hero_image" 
                    />
                </div>
            </div>
        </section>
    );
}
