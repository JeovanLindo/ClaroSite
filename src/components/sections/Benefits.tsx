import Beneficios from "@/lib/beneficios"
import { Button } from "../ui/button"

const list = Beneficios.map((title)=> {
  return {
    title : title.titulo,
    desc : title.descricao,
    icon : title.icon
  }
})

export default function Benefits ({id}: {id: string}){
  return(
    <>
    <section id={id} className="bg-gray-100 flex flex-col px-12 lg:px-32 py-12 w-full gap-10 justify-center h-fit">
     {/*  <div>
        <h1 className="text-2xl">
          Beneficios de ser um cliente Claro
        </h1>
      </div> */}
      
      <div className="flex flex-col lg:flex-row gap-3 justify-between items-center w-full h-fit">

      <div className="w-full flex flex-col lg:h-56 h-fit gap-10 lg:items-start items-center justify-between">
          <h1 className="text-4xl lg:w-96 text-center lg:text-left text-claroVermelho" >Sua empresa com mais benefícios</h1>
          <Button>
            <a target="_blank" href="https://wa.me/5521991041111?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Claro.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!">Contrate</a>  
          </Button> 
        </div>
        <div className="flex w-full justify-center lg:justify-start flex-row flex-wrap gap-3 h-fit">
          {list.map((bl)=>(
            <div key={bl.title} className="rounded-lg justify-between hover:scale-105 cursor-default transition-all flex flex-col border p-2 border-claroVermelho h-36 w-40">
              <div>
                <div className="text-claroVermelho" >{bl.icon}</div>
                <h1 className="text-claroVermelho">{bl.title}</h1>
              </div>
              <p className="text-xs text-gray-600">{bl.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
    </>
  )
}