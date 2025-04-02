import ItenCar from "@/components/itencar"
import Option from "@/components/option"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BadgePercent, CreditCard } from "lucide-react"

export default function Carrinho(){
  return(
    <div className="w-full h-fit flex gap-[1vw] pt-[1vw]">
      <div className="w-[60%] h-fit flex flex-col rounded-xl border border-[#d7d9db] p-[2vw] gap-[2vw]">
          <h1 className="text-[1.7vw]">Formas de Pagamento</h1>
          <div className="w-full h-fit grid grid-cols-2 gap-[1vw]">
            <Option nome="Multicaixa" tipo="pagamento" imagem="/dfg" id="1"/>
            <Option nome="Multicaixa" tipo="pagamento" imagem="/dfg" id="2"/>
            <Option nome="Multicaixa" tipo="pagamento" imagem="/dfg" id="3"/> 
          </div>
          <h1 className="text-[1.7vw]">Metodo de Envio</h1>
          <div className="w-full h-fit grid grid-cols-2 gap-[1vw]">
          <Option nome="Multicaixa" tipo="envio" imagem="/dfg" id="4"/>
          <Option nome="Multicaixa" tipo="envio" imagem="/dfg" id="5"/>
            
          </div>

      </div>
      <div className="w-[40%] h-fit flex flex-col rounded-xl border border-[#d7d9db] p-[2vw] gap-[1vw]">
        <h1 className="text-[1.7vw]">Visão Geral da Compra</h1>
        <div className="w-full h-fit flex flex-col gap-[1vw]">
          <ItenCar nome="nome" capa="/hhhf" regiao="angola" preco={500}/>
          <ItenCar nome="nome" capa="/hhhf" regiao="angola" preco={500}/>
        </div>
        <div className="w-full h-fit">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[1.3vw] flex gap-[0.1vw]"><div className="flex gap-[0.5vw] items-center"><BadgePercent /> Código Promocional</div></AccordionTrigger>
            <AccordionContent className="flex w-full gap-[0.5vw]">
              <input type="text" placeholder="Digite o Código Promocional" name="" id="" className="w-[85%] h-[2.5vw] outline-none text-[#202125] bg-[#eaebed] border border-[#d7d9db] rounded-xl pl-[0.5vw]" />
              <button className="w-[15%] h-[2.5vw] flex items-center justify-center text-white bg-[#ef4444] rounded-xl">Aplicar</button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
        <div className="flex flex-col w-full h-fit gap-[0.5vw]">
          <div className="flex justify-between">
            <span className="text-[1.5vw]">Total:</span>
            <span className="text-[1.5vw]">3.500 kz</span>
          </div>
          <button className="w-full h-[3.5vw] bg-green-700 text-white flex justify-center items-center gap-[0.5vw] rounded-xl"><CreditCard /> Pagar Agora</button>
        </div>
      </div>

    </div>
  )
}