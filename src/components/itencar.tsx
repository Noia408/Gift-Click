'use client'
import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

interface ItenCarProps {
    capa: string;
    nome: string;
    preco: number;
    regiao: string;
}

export default function CartItem({ capa, nome, preco, regiao }: ItenCarProps) {
    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(preco);

    // Função para alterar a quantidade
    const alterarQuantidade = (tipo: "aumentar" | "diminuir") => {
        setQuantidade((prev) => {
            const novaQuantidade = tipo === "aumentar" ? prev + 1 : Math.max(1, prev - 1);
            setPrecoTotal(novaQuantidade * preco);
            return novaQuantidade;
        });
    };

    return (
        <div className="w-full flex items-center justify-between gap-[1vw] rounded-xl bg-white">
            {/* Imagem do Produto */}
            <div className="h-[9vw] w-[13vw] bg-red-700 rounded-xl flex items-center justify-center">
                <Image src={capa} alt={nome} width={1920} height={1080} className="object-cover rounded-xl" />
            </div>

            {/* Informações do Produto */}
            <div className="flex-1 flex flex-col justify-between h-full">
                {/* Nome do Produto e Botão Remover */}
                <div className="flex justify-between items-center">
                    <span className="text-lg md:text-xl lg:text-2xl font-semibold">{nome}</span>
                    <button 
                        className="group rounded-xl hover:bg-red-600 duration-300 p-[0.2vw] bg-transparent"
                        aria-label="Remover item"
                    >
                        <X className="w-6 h-6 text-red-700 group-hover:text-white" />
                    </button>
                </div>

                {/* Região */}
                <div className="flex items-center gap-2">
                    <span className="text-md font-medium">Região:</span>
                    <span className="text-md text-green-700 font-semibold">{regiao}</span>
                </div>

                {/* Preço Atualizado */}
                <div className="text-lg text-green-700 font-bold">{precoTotal.toLocaleString()} Kz</div>

                {/* Input de Quantidade Estilizado */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center overflow-hidden">
                        {/* Botão de diminuir */}
                        <button className="bg-green-700 rounded-xl p-[0.4vw] text-white font-bold" onClick={() => alterarQuantidade("diminuir")}>
                            <Minus size={18} />
                        </button>

                        {/* Input de número centralizado */}
                        <input 
                            type="" 
                            id="quantidade" 
                            name="quantidade" 
                            min="1" 
                            value={quantidade}
                            onChange={(e) => {
                                const novaQuantidade = Math.max(1, parseInt(e.target.value) || 1);
                                setQuantidade(novaQuantidade);
                                setPrecoTotal(novaQuantidade * preco);
                            }}
                            className="w-12 text-center text-lg font-semibold outline-none"
                        />

                        {/* Botão de aumentar */}
                        <button className="bg-green-700 rounded-xl p-[0.4vw] text-white font-bold" onClick={() => alterarQuantidade("aumentar")}>
                            <Plus size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
