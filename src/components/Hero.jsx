import { LuImport } from "react-icons/lu";
import bineet from "../assets/bineet.jpg";

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify content">
            <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase
             leading-none">
                Bineet <br/> Jha
             </h1>
             <div className="mt-8">
                <a href="/null.pdf" className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400" target="_blank" rel="noopener noreferrer" download>
                    <span>Resume.pdf</span>
                    <LuImport className='ml-2'/>
                </a>
             </div>
             <div className="w-full">
                <img src={ bineet } alt="Bineet Jha" className="mt-8 h-96 w-full object-cover"/>
             </div>
        </div>
    </section>
  )
}

export default Hero