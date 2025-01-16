export default function Sobre(){
  return(
    <div className="flex flex-col gap-8 py-12">
      <h1 className="text-4xl font-bold text-center">Sobre Nós</h1>
      
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Nossa História</h2>
        <p className="text-gray-700 leading-relaxed">
          Fundada em 2020, a TechStore nasceu com a missão de tornar a tecnologia acessível a todos. 
          Começamos como uma pequena loja online e hoje somos referência no mercado de e-commerce de 
          produtos eletrônicos no Brasil.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Nossa Missão</h2>
        <p className="text-gray-700 leading-relaxed">
          Buscamos oferecer produtos de alta qualidade com preços competitivos, 
          garantindo a melhor experiência de compra para nossos clientes. Nossa equipe 
          está sempre pronta para oferecer suporte especializado e orientação na escolha 
          dos produtos.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Qualidade</h3>
            <p className="text-gray-700">Trabalhamos apenas com produtos e marcas reconhecidas no mercado.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Transparência</h3>
            <p className="text-gray-700">Prezamos pela honestidade em todas as nossas relações comerciais.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Inovação</h3>
            <p className="text-gray-700">Sempre buscando as últimas tendências em tecnologia.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Números</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">+50mil</p>
            <p className="text-gray-700">Clientes Satisfeitos</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">+10mil</p>
            <p className="text-gray-700">Produtos Disponíveis</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-700">Suporte ao Cliente</p>
          </div>
        </div>
      </section>
    </div>
  )
}