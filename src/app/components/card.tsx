import Image from "next/image";
import Link from "next/link";

export default function Card(){
  return(
    <div className="w-full h-[25vw] bg-white rounded-xl overflow-hidden flex flex-col sbox">
      <Link href={"/"} className="w-full h-[60%] relative group">
        <div className="absolute top-[0.5vw] right-[0.5vw] z-10">
          <button className="w-[2.5vw] h-[2.5vw] bg-white/80 hover:bg-white duration-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5vw] h-[1.5vw] text-[#202125]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>
        </div>
        <div className="absolute top-[0.5vw] left-[0.5vw] z-10">
          <span className="bg-red-500 text-white px-[0.8vw] py-[0.3vw] rounded-xl text-[0.9vw]">-15%</span>
        </div>
        <Image src={"/asset/cardcg.png"} width={1000} height={1000}alt="Gift Card" className="w-full h-full object-cover group-hover:scale-110 duration-300" />
      </Link>
      <div className="w-full h-[40%] p-[1vw] flex flex-col justify-between">
        <div className="flex flex-col gap-[0.3vw]">
          <h3 className="text-[1.2vw] font-medium text-[#202125]">Gift Card Steam R$50</h3>
          <div className="flex items-center gap-[0.3vw]">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-[1vw] h-[1vw] text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-[0.9vw] text-[#3b3d44]">(150)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.5vw]">
            <span className="text-[1.4vw] font-semibold text-[#202125]">R$42,50</span>
            <span className="text-[1vw] line-through text-[#3b3d44]">R$50,00</span>
          </div>
          <Link href={"/"} className="hover:bg-[#77c555] bg-green-700 duration-300 text-white px-[1vw] py-[0.5vw] rounded-xl text-[0.9vw]">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  )
}