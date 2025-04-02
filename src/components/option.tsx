import Image from "next/image";

interface OptionProps {
  imagem: string;
  nome: string;
  tipo: string;
  id: string;
}

export default function Option({ imagem, nome, tipo, id }: OptionProps) {
  return (
    <label htmlFor={id} className="w-full h-[6vw] flex items-center justify-between border-2 border-[#d7d9db] rounded-xl p-[1vw] cursor-pointer">
      <div className="flex items-center h-full w-fit gap-[1vw]">
        <div className="h-full w-[6vw] bg-red-700 rounded-xl flex items-center justify-center overflow-hidden">
          <Image src={imagem} alt={nome} width={1920} height={1080} className="object-cover rounded-xl w-full h-full" />
        </div>
        <span className="text-lg md:text-xl lg:text-2xl font-semibold">{nome}</span>
      </div>
      <input type="radio" name={tipo} id={id} className="w-[1.5vw] h-[1.5vw] accent-green-700" />
    </label>
  );
}
