import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card(){
  return(
    <div className="w-full h-[15.5vw] bg-white rounded-xl overflow-hidden shadow-sm border border-[#d7d9db] focus::scale-90 duration-300">
      <Link href={"/produto"} className="w-full h-full flex flex-col">
        <div className="w-full h-[65%] bg-black relative">
          <Image className="w-full h-fit object-cover" src={"/asset/Google Play.jpg"} alt="" height={1080} width={1920}/>
          <div className="w-[3vw] h-[2vw] bg-[#ef4444] rounded-xl text-white absolute flex justify-center items-center left-[75%] top-[10%]">15%</div>
        </div>
        <div className="w-full h-[35%] flex flex-col gap-[0.3vw] px-[1vw] py-[0.5vw] relative">
          <span className="text-[#3b3d44] text-[1.6vw]">Google Play</span>
          <span className="text-green-700 text-[1vw]">Entretenimento</span>
          <button className="p-[0.7vw] bg-[#eaebed] rounded-full absolute flex justify-center items-center left-[75%] top-[30%]">
            <Heart className="text-black" />
          </button>
        </div>
      </Link>
    </div>
  )
}