import Link from "next/link";

export default function Produto(){
    return(
        <div className="w-full h-fit flex flex-col gap-[3vw] pt-[1vw]">
            <div className="w-full h-fit flex rounded-xl border border-[#d7d9db] p-[2vw] gap-[2vw]">
                <div className="w-[35%] h-fit">
                    <div className="bg-black w-full h-[17vw] rounded-xl"></div>
                </div>
                <div className="w-[65%] h-fit flex flex-col gap-[0.7vw]">
                    <div className="flex justify-between h-fit w-full">
                        <span className="text-[2.2vw]">Google Play</span>
                        <button className="bg-[#d7d9db] focus:[#3b3d44] py-[0.1vw] px-[0.5vw] rounded-xl">100</button>
                    </div>
                    <span className="text-[0.9vw] text-justify text-[#3b3d44]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore officiis deleniti deserunt sint voluptatem? Alias quisquam unde facere repellendus enim corrupti autem dolorum nobis molestiae laudantium, id doloribus. Temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores laudantium fugit? Quia voluptatem tenetur incidunt quae exercitationem, quas, qui, corrupti pariatur omnis fugit sapiente aliquam officiis minus similique expedita.</span>
                    <div className="w-full h-fit flex flex-col">
                        <span className="text-[1.2vw]">Região</span>
                    </div>
                    <div className="w-full h-fit flex flex-col">
                        <span className="text-[1.2vw]">Preço</span>
                    </div>
                    <span className="text-[2.0vw]">5.000 kz</span>
                    <div className="w-full h-[3.5vw] flex gap-[0.5vw]">
                        <Link href={"/"} className="h-full w-[4vw] bg-[#ef4444] rounded-l-xl flex items-center justify-center">gfsfg</Link>
                        <button className="bg-green-700 hover:bg-[#77c555] duration-300 h-full w-[20vw] rounded-r-xl">Comprar</button>
                    </div>

                </div>

            </div>

        </div>
    )
}