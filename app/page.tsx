import Image from "next/image";
import Navbar from "./navbar/page";
import FirstSect from "./first-section/page";

import Footer from "./footer/page";


export default function Home() {
  return (
    <div>
     <Navbar />
     <FirstSect />
     <Footer />

    </div>
  );
}
