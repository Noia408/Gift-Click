import Image from "next/image";
import Link from "next/link";

export default function Card(){
  return(
    <div className="w-full h-[15.5vw] bg-white rounded-xl overflow-hidden shadow-sm border border-[#d7d9db] hover:scale-90 duration-300">
      <Link href={""} className="w-full h-full flex flex-col">
        <div className="w-full h-[65%] bg-black">
          <Image className="w-full h-fit object-cover" src={"/asset/Google Play.jpg"} alt="" height={1080} width={1920}/>
        </div>
        <div className="w-full h-[35%] flex px-[1vw] py-[0.5vw]">
          <span className="text-[#3b3d44] text-[1.4vw]">Google Play</span>

        </div>
      </Link>
    </div>
  )
}