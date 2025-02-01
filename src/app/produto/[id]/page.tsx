import { ft } from "@/utility/formataTexto";
import ProdutoClient from "./client";
import { giftCards } from "@/data/model/produto";

type Props = {
  params: Promise<{ id: string }>;
};
  

async function Produto({ params }: Props) {
  const paramers: { id: string } = await params;
  const gift = giftCards.find((gif) => ft(gif.nome) === paramers.id);

  if (!gift) return "Paina nao ncontrda" + paramers.id;
  return (
    <ProdutoClient
      gift={gift}
      gifts={giftCards.filter((gif) => gif.id !== gift.id)}
    />
  );
}

export default Produto;
