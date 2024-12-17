'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={false}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
        type: 'progressbar'
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="min-h-fit flex w-full"
    >
      <SwiperSlide className="relative h-fit">
      <a href="https://api.whatsapp.com/send/?phone=5521991041111&text=Ol%C3%A1%2C+estou+interessado+em+conhecer+mais+sobre+os+servi%C3%A7os+da+Claro.+Gostaria+de+saber+mais+sobre+os+planos+dispon%C3%ADveis+e+como+posso+me+tornar+um+cliente.+Agrade%C3%A7o+desde+j%C3%A1+pela+aten%C3%A7%C3%A3o%21&type=phone_number&app_absent=0" target='_blank'><img className='hidden lg:block' src="/carousel/1.jpeg" alt="banner com informações do plano claro de 600 megas por 59,90 reais" /></a>
      <a href="https://api.whatsapp.com/send/?phone=5521991041111&text=Ol%C3%A1%2C+estou+interessado+em+conhecer+mais+sobre+os+servi%C3%A7os+da+Claro.+Gostaria+de+saber+mais+sobre+os+planos+dispon%C3%ADveis+e+como+posso+me+tornar+um+cliente.+Agrade%C3%A7o+desde+j%C3%A1+pela+aten%C3%A7%C3%A3o%21&type=phone_number&app_absent=0" target='_blank'><img className='block lg:hidden w-full' src="/carousel/mobile/1Mobile.jpeg" alt="banner com informações do plano claro de 600 megas por 59,90 reais" /></a>
      </SwiperSlide>

      <SwiperSlide className="relative h-fit">
        <a href="https://api.whatsapp.com/send/?phone=5521991041111&text=Ol%C3%A1%2C+estou+interessado+em+conhecer+mais+sobre+os+servi%C3%A7os+da+Claro.+Gostaria+de+saber+mais+sobre+os+planos+dispon%C3%ADveis+e+como+posso+me+tornar+um+cliente.+Agrade%C3%A7o+desde+j%C3%A1+pela+aten%C3%A7%C3%A3o%21&type=phone_number&app_absent=0" target='_blank'><img className='hidden lg:block' src="/carousel/2.jpeg" alt="banner com informações do plano claro pós de 30 gigas por 59,90 reais" /></a>
        <a href="https://api.whatsapp.com/send/?phone=5521991041111&text=Ol%C3%A1%2C+estou+interessado+em+conhecer+mais+sobre+os+servi%C3%A7os+da+Claro.+Gostaria+de+saber+mais+sobre+os+planos+dispon%C3%ADveis+e+como+posso+me+tornar+um+cliente.+Agrade%C3%A7o+desde+j%C3%A1+pela+aten%C3%A7%C3%A3o%21&type=phone_number&app_absent=0" target='_blank'><img className='block lg:hidden w-full' src="/carousel/mobile/2Mobile.jpeg" alt="banner com informações do plano claro pós de 30 gigas por 59,90 reais" /></a>
      </SwiperSlide>
    </Swiper>
  )
}
