import Image from "next/image";

export default function Carrinho(){
  return(
    <div className="w-full h-fit flex flex-col gap-[2vw] px-[6vw] py-[2vw]">
      <h1 className="text-[2.5vw] font-semibold text-[#202125]">Meu Carrinho</h1>
      
      <div className="w-full h-fit flex gap-[2vw]">
        <div className="w-[70%] h-fit flex flex-col gap-[1vw]">
          <div className="w-full h-[15vw] bg-white rounded-xl p-[1vw] flex gap-[1vw] sbox">
            <div className="h-full aspect-square relative rounded-xl overflow-hidden">
              <Image src={"/asset/cardcg.png"} width={1000} height={1000} alt="Gift Card" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 h-full flex flex-col justify-between py-[0.5vw]">
              <div className="flex flex-col gap-[0.5vw]">
                <h3 className="text-[1.4vw] font-medium text-[#202125]">Gift Card Steam R$50</h3>
                <span className="text-[1vw] text-[#3b3d44]">Código Digital</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[1vw]">
                  <div className="flex items-center gap-[0.5vw] border border-[#d7d9db] rounded-xl px-[1vw] py-[0.5vw]">
                    <button className="text-[1.2vw] text-[#202125] hover:text-[#77c555] duration-300">-</button>
                    <span className="text-[1vw] text-[#202125]">1</span>
                    <button className="text-[1.2vw] text-[#202125] hover:text-[#77c555] duration-300">+</button>
                  </div>
                  <button className="text-[1vw] text-red-500 hover:text-red-600 duration-300">Remover</button>
                </div>
                <div className="flex items-center gap-[0.5vw]">
                  <span className="text-[1.6vw] font-semibold text-[#202125]">R$42,50</span>
                  <span className="text-[1vw] line-through text-[#3b3d44]">R$50,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] h-fit bg-white rounded-xl p-[1.5vw] flex flex-col gap-[1vw] sbox">
          <h2 className="text-[1.6vw] font-medium text-[#202125]">Resumo do Pedido</h2>
          <div className="flex flex-col gap-[0.5vw]">
            <div className="flex justify-between text-[1vw] text-[#3b3d44]">
              <span>Subtotal</span>
              <span>R$42,50</span>
            </div>
            <div className="flex justify-between text-[1vw] text-[#3b3d44]">
              <span>Desconto</span>
              <span>-R$7,50</span>
            </div>
          </div>
          <hr className="border-[#d7d9db]" />
          <div className="flex justify-between text-[1.2vw] font-medium text-[#202125]">
            <span>Total</span>
            <span>R$42,50</span>
          </div>
          <button className="w-full h-[3vw] hover:bg-[#77c555] bg-green-700 duration-300 text-white rounded-xl text-[1vw]">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  )
}