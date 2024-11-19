import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Coins } from "lucide-react";


export default function Profile(){
  return(
    <Link href={""} className="h-[70%] w-full flex items-center gap-[1vw]">
      <div className="flex h-full w-fit items-center rounded-xl justify-center gap-[0.5vw] hover:bg-[#eaebed] px-[1vw]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-[#202125] text-[1.3vw]">Noah</span>
          <span className="text-[#aeb1b3] text-[1vw]">noah1234@gmail.com</span>
        </div>
      </div>
      <div className="group h-full w-full hover:bg-[#eaebed] duration-300 rounded-xl flex justify-center items-center gap-[0.5vw]">
        <Coins size={28} className="text-[#202125] group-focus:text-[#77c555] duration-300" />
        <span className="text-[#202125] group-focus:text-[#77c555] duration-300 text-[1.3vw]">13</span>
      </div>
    </Link>
  )
}