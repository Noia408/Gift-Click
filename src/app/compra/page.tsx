"use client";

import Card from "@/components/card";
import { Layers } from "lucide-react";
import Link from "next/link";
import { ft } from "@/utility/formataTexto";
import { giftCards } from "@/data/model/produto";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Compra = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // Termo de busca
  const category = searchParams.get("category") || ""; // Categoria selecionada

  const [filteredGiftCards, setFilteredGiftCards] = useState(giftCards);

  useEffect(() => {
    // Filtro dinâmico baseado nos parâmetros da URL
    const filtered = giftCards.filter((card) => {
      const matchesCategory = category ? card.categoria === category : true;
      const matchesQuery = query
        ? card.nome.toLowerCase().includes(query.toLowerCase()) ||
          card.descricao.toLowerCase().includes(query.toLowerCase())
        : true;

      return matchesCategory && matchesQuery;
    });

    setFilteredGiftCards(filtered);
  }, [query, category]);

  const categorias = ["Todos os Cards", "Games", "Apps", "Entretenimento", "Música"]; // Categorias disponíveis

  return (
    <div className="w-full h-fit flex gap-[1vw] pt-[1vw]">
      {/* Menu Lateral */}
      <div className="h-fit w-[20%] flex flex-col gap-[1vw]">
        <h1 className="text-[2vw]">Categoria</h1>
        <ul>
          {categorias.map((cat, index) => (
            <li key={index} className="h-fit w-full">
              <Link
                href={`/compra?category=${cat === "Todos os Cards" ? "" : cat}`}
                className={`w-full h-[3.5vw] hover:bg-[#eaebed] duration-300 flex items-center rounded-r-xl pl-[1.5vw] gap-[1vw] border-l-8 ${
                  category === cat ? "border-[#cdced0]" : "border-[#eaebed]"
                }`}
              >
                <Layers className="text-green-700" />
                <span className="text-[1.3vw] text-[#3b3d44]">{cat}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resultados */}
      <div className="h-fit w-[80%] flex flex-col gap-[1vw]">
        <div className="w-full h-fit flex items-end justify-between">
          <span className="text-[2.5vw]">
            {category || query ? "Resultados Filtrados" : "Todos os Cards"}
          </span>
        </div>
        {filteredGiftCards.length > 0 ? (
          <div className="w-full h-fit grid grid-cols-4 gap-[1vw] mb-[1vw]">
            {filteredGiftCards.map((gift) => (
              <Card
                key={gift.nome}
                capa={gift.imagem}
                regiao={gift.regiao}
                categoria={gift.categoria}
                nome={gift.nome}
                link={`/produto/${ft(gift.nome)}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Compra;
