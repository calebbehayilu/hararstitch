import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import Photo_Display from "./components/Photo_Display";
import Features from "./components/Feature_Blocks";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-montserrat)] ">
      <main className="flex flex-col row-start-1 py-10 px-20 md:p-20 items-center sm:items-start">
        <div className="md:grid grid-cols-2 justify-center items-center mb-5">
          <h1 className="font-bold text-3xl text-balance md:text-4xl md:px-5 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent ">
            Experience Harar's rich tradition and quality embroidery, weaving
            heritage and elegance into every stitch.
            <br />
            <div className="text-center">
              <p className="px-5 md:py-3 py-10 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                Coming Soon
              </p>
            </div>
          </h1>
          <Photo_Display />
        </div>
        <div>
          <Features />
        </div>
      </main>
      <footer className="row-start-2 flex gap-6 flex-wrap items-center justify-center py-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/harar_stitch?igsh=dXlrZ2Nsd3E4eGhr&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://t.me/HararStitch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandTelegram size={25} />
        </a>
      </footer>
    </div>
  );
}
