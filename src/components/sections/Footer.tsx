import LogoBranca from '@/assets/ConectaBranca.svg'
import LogoVivoEmpresas from '@/assets/ClaroEmpresas.webp'

export default function Footer ({ id }: { id: string }){

  return(
    <>
    <footer id={id} className="bg-claroVermelho font-inter md:px-32 flex-col flex justify-between items-center w-full py-10 px-10 h-fit min-h-44">
      <div className='lg:flex-row flex-col flex gap-12 items-center justify-between w-full' >
  
        <div className='flex flex-col justify-between lg:flex-row gap-8 w-full'>

        <div className='flex-col gap-1 flex justify-center items-center'>
            <img className='w-fit' src={LogoBranca} alt="Logo da SmartLagos branca" />
            <div className='flex flex-row justify-center items-center space-x-1'>
              <p className='text-white' >Parceiro autorizado</p>
              <img className='w-12' src={LogoVivoEmpresas} alt="Logo da Vivo para empresas autorizadas" />
            </div>
          </div>

          <div className='flex flex-col gap-6 text-white items-center' >
            <h2 className='text-xl font-medium' >
              Central de vendas
            </h2>
            <div className='flex flex-col items-center max-w-96 gap-1'>
              <ul className='text-center flex flex-col items-center'>
                <li>
                  <p className='opacity-90'>Centro-RJ</p>
                </li>
                <li><a className='hover:opacity-100 opacity-60 transition-all' target='blank' href='https://maps.app.goo.gl/FZHGHd6DJ5Uk6EFTA'>Av. das Américas, 19005 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-703 - Absolutto Business Towers torre 1, sala 1219</a></li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-6 text-white items-center' >
            <h2 className='text-xl font-medium' >
              Contatos
            </h2>
            <div className='flex flex-col items-center gap-1 justify-center'>
              <p className='opacity-90'>Centro-RJ</p>
              <ul className='flex flex-col justify-center items-center gap-1'>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all' href='https://wa.me/5521991041111?text=Ol%C3%A1,%20estou%20interessado%20em%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Claro.%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20como%20posso%20me%20tornar%20um%20cliente.%20Agrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o!'>(21) 99104-1111</a></li>
                <p>Nosso número fixo</p>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all'>(21) 3195 4791</a></li>
                <li><a target='_blank' className='hover:opacity-100 opacity-60 transition-all'>0800 000 6030</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>    
    <div className='w-full bg-claroVermelho border-t-[1px] border-gray-400 text-white h-fit py-1 flex md:flex-row flex-col md:gap-3 gap-1 justify-center items-center'>
        <p className='opacity-60'>Made by <a className='hover:opacity-100 opacity-80 transition-all' target='_blank' href="https://www.instagram.com/agenciawrdigital/">WR Digital</a></p>
        <p className='opacity-60'>Developed by <a className='hover:opacity-100 opacity-80 transition-all' target='_blank' href="https://www.behance.net/jeovanjnior/projects">Jeovan Lindo</a></p>
    </div>
    </>
  )
}