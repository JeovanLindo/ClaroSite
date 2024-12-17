import PricesFibra from '@/lib/pricesfibra'
import { cn } from '@/lib/utils';

import {Wifi} from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from './button';


const teste = PricesFibra.map((price)=> {
  return {
    plano: price.Plano,
    megas: price.Megas,
    preco: price.Preco,
    bytes: price.Bytes,
    haveBonus: price.HaveBonus,
    bonus: price.Bonus,
  }
})

export function LinkDuplo({ teste1 }: { teste1: typeof teste[0] }){
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    let url : string
    
    if (teste1.haveBonus === true){
      url =`https://wa.me/5521995322025?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20Conecta%20Claro%20e%20me%20interessei%20pela%20${teste1.plano}%20de%20${teste1.megas}%20megas%20%2B%20${teste1.bonus}!`;
    } else {
      url =`https://wa.me/5521995322025?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20Conecta%20Claro%20e%20me%20interessei%20pela%20${teste1.plano}%20de%20${teste1.megas}%20megas!`;
    }
    window.open(url, '_blank'); 
  }  
return (
  <Button className='w-full'>
    <a target='_blank' onClick={handleClick}>Clique aqui</a>
  </Button>
);
}

export function CardNavFibra() {
  return (
    <Swiper
        className=''
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
         '640': {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          '1520': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '1920': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1)=>(
          <SwiperSlide className='w-fit h-fit flex flex-row justify-center mb-10 items-center'
          key={teste1.megas}>
            <div className='flex flex-col h-fit justify-between items-center border border-black gap-14 rounded-md w-full p-5'>
              <div className='flex gap-3 w-full h-fit flex-col'>
                  <p className='text-xs'>
                    {teste1.plano}
                  </p>
                  <div>
                    <p className='text-3xl w-full flex items-center gap-1'>
                      <Wifi/> {teste1.megas} Megas
                    </p>
                    <p className={cn('hidden', teste1.haveBonus === true && 'text-3xl w-full flex items-center gap-1', teste1.haveBonus === false)}>
                      + {teste1.bonus}
                    </p>
                  </div>
              </div>

              <p className='border-y border-black w-full py-1 text-center'>Apps ilimitados</p>

              <div className='flex w-full flex-col'>
                <p className='text-lg'>Por apenas:</p>
                <p className='text-2xl justify-center w-full'>R$ {teste1.preco}/Mês</p>
              </div>
              <Button className='w-full'>
                <LinkDuplo teste1={teste1}/>
              </Button>
            </div>
              
          </SwiperSlide>
        ))}
        
      </Swiper>
  )
} 

export default function CardFibra({ id }: { id: string }) {
  return (
  <>
      <div id={id} className='h-fit w-full flex gap-5 flex-row font-light' >
      <CardNavFibra/> 
      </div>
  </>
)

}