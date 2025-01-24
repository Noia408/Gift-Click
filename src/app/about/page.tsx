import Image from "next/image";

export default function Sobre(){
  return(
    <div className="flex flex-col w-full h-fit gap-[3vw] py-[1vw]">
      <div className="w-full h-[30vw] rounded-xl flex p-[1vw] px-[4vw]">
        <div className="w-[50%] h-full flex flex-col justify-center gap-[0.5vw]">
          <span className="text-[3.5vw]">Sobre a Gift Click</span>
          <span className="text-[1.3vw]">Sobre a Gift Click Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at facilis iure corporis praesentium, eveniet accusantium porro consectetur ipsum eius aliquam fugiat laborum pariatur eum beatae ab eaque quam labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil voluptatibus, inventore excepturi, quaerat repellendus totam maxime alias provident dolorum ipsum! Consequatur, odio asperiores placeat distinctio ipsum cupiditate velit et!</span>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <Image className="h-[90%] object-contain" src={"/asset/ilcons_Chapter_4-removebg-preview.png"} alt="" width={500} height={500}/>
        </div>
      </div>
      <div className="w-full h-fit border p-[3vw] px-[6vw] rounded-xl flex flex-col gap-[2vw]">
        <div className="flex flex-col w-full items-center">
          <span className="text-[1.5vw] text-green-700">Nós Somos Gift Click</span>
          <span className="text-[2.5vw]">Sobre a Gift Click</span>
        </div>
        <div className="w-full h-fit grid grid-cols-3 gap-[1vw] ">
          <div className="w-full h-[17vw] flex flex-col items-center gap-[0.2w]">
            <div className="w-[13vw] h-[13vw] rounded-full bg-black overflow-hidden">
              <Image className="w-full h-full object-contain" src={"/asset/unnamed.jpg"} alt="" width={500} height={500} />
            </div>
            <span className="text-[1.5vw]">Afonso T. Esteves</span>
            <span className="text-green-700">Tecnico de TI</span>
          </div>
          <div className="w-full h-[17vw] flex flex-col items-center gap-[0.2w]">
            <div className="w-[13vw] h-[13vw] rounded-full bg-black overflow-hidden">
              <Image className="w-full h-full object-contain" src={"/asset/unnamed.jpg"} alt="" width={500} height={500} />
            </div>
            <span className="text-[1.5vw]">Afonso T. Esteves</span>
            <span className="text-green-700">Tecnico de TI</span>
          </div>
          <div className="w-full h-[17vw] flex flex-col items-center gap-[0.2w]">
            <div className="w-[13vw] h-[13vw] rounded-full bg-black overflow-hidden">
              <Image className="w-full h-full object-contain" src={"/asset/unnamed.jpg"} alt="" width={500} height={500} />
            </div>
            <span className="text-[1.5vw]">Afonso T. Esteves</span>
            <span className="text-green-700">Tecnico de TI</span>
          </div>
          <div className="w-full h-[17vw] flex flex-col items-center gap-[0.2w]">
            <div className="w-[13vw] h-[13vw] rounded-full bg-black overflow-hidden">
              <Image className="w-full h-full object-contain" src={"/asset/unnamed.jpg"} alt="" width={500} height={500} />
            </div>
            <span className="text-[1.5vw]">Afonso T. Esteves</span>
            <span className="text-green-700">Tecnico de TI</span>
          </div>
          <div className="w-full h-[17vw] flex flex-col items-center gap-[0.2w]">
            <div className="w-[13vw] h-[13vw] rounded-full bg-black overflow-hidden">
              <Image className="w-full h-full object-contain" src={"/asset/unnamed.jpg"} alt="" width={500} height={500} />
            </div>
            <span className="text-[1.5vw]">Afonso T. Esteves</span>
            <span className="text-green-700">Tecnico de TI</span>
          </div>
        </div>
      </div>

    </div>
  )
}