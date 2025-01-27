import Link from "next/link";
import * as React from "react"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Image from "next/image";
import { Coins, CreditCard, Send, Shield, ShoppingBasket, Zap } from "lucide-react";

export default function Produto(){
    return(
        <div className="w-full h-fit flex flex-col gap-[1vw] pt-[1vw]">
            <div className="w-full h-fit flex rounded-xl border border-[#d7d9db] p-[2vw] gap-[2vw]">
                <div className="w-[35%] h-fit">
                    <div className="bg-black w-full h-[18.3vw] rounded-xl overflow-hidden">
                        <Image className="w-full h-fit object-cover" src={"/asset/Google Play.jpg"} alt="" height={1080} width={1920}/>
                    </div>
                </div>
                <div className="w-[65%] h-fit flex flex-col gap-[0.8vw]">
                    <div className="w-full h-fit flex flex-col">
                        <div className="flex justify-between h-fit w-full">
                            <span className="text-[2.2vw]">Gift Card Google Play</span>
                            <div className="bg-[#eaebed] py-[0.1vw] px-[0.5vw] rounded-xl flex gap-[0.3vw] justify-center items-center text-[1.3vw] text-[#77c555]"><Coins className="text-[#77c555]" size={28} /> 10</div>
                        </div>
                        <span className="text-green-700 text-[1.3vw]">Entretenimento</span>
                    </div>
                    <span className="text-[0.9vw] text-justify text-[#3b3d44]">O Google Play é a plataforma de entretenimento do Google que oferece músicas, filmes, livros e aplicativos para dispositivos Android. É a loja oficial de aplicativos do sistema operacional Android, onde os usuários podem navegar e baixar aplicativos desenvolvidos usando o Android SDK e publicados pelo Google. Os clientes podem comprar cartões-presente do Google Play na CoinGate para criptomoeda. Também aceitamos cartões de crédito/débito Visa e Mastercard!</span>
                    <div className="flex gap-[0.3vw]">
                        <span className="tex-[1.3vw]">Regiao:</span>
                        <span className="tex-[1.3vw] text-[#77c555]">America</span>
                    </div>
                    <div className="w-full h-[3vw]">
                        <Select>
                        <SelectTrigger className="w-[10vw] h-full border border-[#d7d9db] rounded-xl">
                            <SelectValue placeholder="Seleciona o Valor" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>
                    <span className="text-[2.0vw]">5.000 kz</span>
                    <div className="w-full h-[4vw] flex gap-[0.5vw]">
                        <Link href={"\carrinho"} className="h-full w-[4vw] bg-[#ef4444] rounded-l-xl flex items-center justify-center text-white text-[1.5vw]"><ShoppingBasket /></Link>
                        <button className="bg-green-700 hover:bg-[#77c555] duration-300 h-full w-[20vw] rounded-r-xl text-white text-[1.5vw] flex items-center justify-center gap-[0.5vw]"><CreditCard /> Comprar Agora</button>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex rounded-xl border border-[#d7d9db] p-[2vw] gap-[1vw] flex-col">
                <h1 className="text-[2.2vw] text-green-700">Sobre</h1>
                <div className="w-full h-fit flex flex-col gap-[0.5vw] px-[1vw]">
                    <span className="text-[1.5vw] text-[#202125]">A maior comunidade de aplicativos móveis</span>
                    <span className="text-[1vw] text-[#3b3d44] text-justify">
                    Um vale-presente do Google Play é um ótimo presente para pessoas que gostam de consumir conteúdo digital. Você pode permitir que uma pessoa participe da maior comunidade de jogos para dispositivos móveis do mundo e explore os vastos horizontes dos filmes no Google Play Filmes.Mas isso não é tudo. A Google Play Store também possui mais de 5 milhões de aplicativos. de livros e impressionantes 40 milhões músicas que você pode acessar a qualquer momento. Você também pode assinar vários serviços como Duolingo ou Evernote.Após receber o código digital por e-mail por correio, você pode decidir onde usá-lo. Mime-se com uma experiência musical sem anúncios ou presenteie um ente querido com um cartão para que ele possa experimentar aplicativos, músicas ou livros como nunca antes.
                    </span>
                </div>
                <h1 className="text-[2.2vw] text-green-700">Activar</h1>
            </div>
            <h1 className="text-[2vw] text-[#202125] mt-[1.5vw]">Benefícios dos serviços</h1>
            <div className="w-full h-[10vw] grid grid-cols-3 gap-[6vw] border-b border-[#d7d9db] mb-[1.5vw]">
                <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
                    <Send size={38} className="text-green-700" />
                    <span className="text-[1.5vw] text-[#3b3d44]">Entrega instantânea</span>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
                    <Shield size={38} className="text-green-700" />
                    <span className="text-[1.5vw] text-[#3b3d44]">Pagamento privado e seguro</span>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
                    <Zap size={38} className="text-green-700" />
                    <span className="text-[1.5vw] text-[#3b3d44]">Tarifas de rede mais baixas</span>
                </div>
            </div>
            <h1 className="text-[2vw] text-[#202125] mt-[1.5vw]">Estatísticas da loja</h1>
            <div className="w-full h-[10vw] grid grid-cols-3 gap-[6vw] border-b border-[#d7d9db] mb-[1.5vw]">
                <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
                    <span className="text-[2.5vw] text-green-700">212.300+</span>
                    <span className="text-[1.5vw] text-[#3b3d44]">Pedidos atendidos</span>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
                    <span className="text-[2.5vw] text-green-700">212.300+</span>
                    <span className="text-[1.5vw] text-[#3b3d44]">Cartões-presente vendidos</span>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-[1vw]">
                    <span className="text-[2.5vw] text-green-700">10 anos</span>
                    <span className="text-[1.5vw] text-[#3b3d44]">Tempo médio do pedido</span>
                </div>
            </div>
            <div className="w-full h-fit flex flex-col">
            <h1 className="text-[2vw] text-[#202125]">Perguntas frequentes</h1>
            <Accordion type="single" collapsible className="w-full px-[2vw]">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-[1.5vw] text-[#202125]">Como recebo o giftcard após a compra?</AccordionTrigger>
                <AccordionContent className="text-[#3b3d44] text-[1vw]">
                Após a confirmação do pagamento, o giftcard será enviado automaticamente para o e-mail ou Whatsapp cadastrado na sua conta.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-[1.5vw] text-[#202125]">O que devo fazer se não receber o giftcard no meu e-mail?</AccordionTrigger>
                <AccordionContent className="text-[#3b3d44] text-[1vw]">
                Primeiro, verifique sua caixa de spam ou promoções no e-mail cadastrado. Se ainda não encontrar o giftcard, acesse sua conta na plataforma e consulte a área -Meus Pedidos-. Caso o problema persista, entre em contato com nosso suporte para verificar a situação.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-[1.5vw] text-[#202125]">O que faço se o código do giftcard não funcionar?</AccordionTrigger>
                <AccordionContent className="text-[#3b3d44] text-[1vw]">
                Se o código não funcionar, verifique se foi inserido corretamente e se está sendo usado na plataforma correta. Caso o problema persista, entre em contato com nosso suporte, informando os detalhes da compra. Nossa equipe solucionará o problema o mais rápido possível.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-[1.5vw] text-[#202125]">Preciso criar uma conta para comprar um giftcard?</AccordionTrigger>
                <AccordionContent className="text-[#3b3d44] text-[1vw]">
                Sim, para garantir a segurança da sua compra e o envio correto do giftcard, é necessário criar uma conta na nossa plataforma. O processo é rápido e simples, e seus dados estarão protegidos de acordo com nossa política de privacidade.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="text-[1.5vw] text-[#202125]">Como posso acumular pontos?</AccordionTrigger>
                <AccordionContent className="text-[#3b3d44] text-[1vw]">
                Nossa plataforma oferece um programa de recompensas! A cada compra de giftcards, você acumula pontos automaticamente. O número de pontos varia de acordo com o valor gasto e promoções específicas. Esses pontos podem ser resgatados em descontos em compras futuras ou ofertas exclusivas.
                </AccordionContent>
            </AccordionItem>
            
            </Accordion>
      </div>
        </div>
    )
}