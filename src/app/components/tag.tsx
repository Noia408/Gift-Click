import Image from "next/image";
import Link from "next/link";

export default function TagCard(){
  return(
    <div className="w-full h-full border border-[#d7d9db] rounded-xl sbox">
      <Link href={"/"} className="w-full h-full p-[1vw] px-[2vw] flex flex-col items-center justify-between">
        <div className="w-full h-[10vw] rounded-xl overflow-hidden">
          <Image className="w-full h-full object-cover" src={"/asset/Netflix.jpg"} alt="" width={1000} height={1000} />
        </div>
        <span className="text-green-700 text-[1.5vw]">Netflix</span>
      </Link>
    </div>
  )
}