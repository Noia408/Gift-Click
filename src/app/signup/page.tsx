export default function SignUp(){
  return(
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[30vw] p-[2vw] rounded-xl shadow-lg flex flex-col gap-[1.5vw] border-gray-300 border">
        <h1 className="text-[2vw] font-semibold text-center">Cadastre-se</h1>
        
        <div className="flex flex-col gap-[1vw]">
          <input 
            type="text"
            placeholder="Nome completo"
            className="w-full px-[1vw] py-[0.8vw] border border-gray-300 focus:outline-none focus:border-green-700 rounded-xl"
          />

          <input 
            type="text"
            placeholder="Email ou número de telefone"
            className="w-full px-[1vw] py-[0.8vw] border border-gray-300 focus:outline-none focus:border-green-700 rounded-xl"
          />
          
          <input 
            type="password"
            placeholder="Senha"
            className="w-full px-[1vw] py-[0.8vw] border border-gray-300 focus:outline-none focus:border-green-700 rounded-xl"
          />

          <input 
            type="password"
            placeholder="Confirmar senha"
            className="w-full px-[1vw] py-[0.8vw] border border-gray-300 focus:outline-none focus:border-green-700 rounded-xl"
          />

          <button className="w-full bg-green-700 hover:bg-[#77c555] duration-300 text-white py-[0.8vw] transition rounded-xl">
            Cadastrar
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-500">Já tem uma conta? </span>
          <a href="/login" className="text-green-700 hover:text-[#77c555] duration-300 hover:underline">Faça login</a>
        </div>
      </div>
      
    </div>
  )
}