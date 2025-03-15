import ButtonScroll from './ButtonScroll';
import Footer from '../components/Footer';
import '../components/services.css';

import services_1 from '../assets/images/services/services_1.png';
import services_2 from '../assets/images/services/services_2.png';
import services_3 from '../assets/images/services/services_3.png';
import services_4 from '../assets/images/services/services_4.png';
import services_5 from '../assets/images/services/services_5.png';
import services_6 from '../assets/images/services/services_6.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const service = [
  {
    number: '01',
    text: 'Customs Broker of Import and Export',
    image: services_1,
  },
  {
    number: '02',
    text: 'Customs Clearance For Air, Sea and Inland Import and Export',
    image: services_2,
  },
  {
    number: '03',
    text: 'Trucking Services For Air Freight, Sea Freight, and Inland Freight',
    image: services_3,
  },
  {
    number: '04',
    text: 'Thailand Border Warehouse',
    image: services_4,
  },
  {
    number: '05',
    text: 'Permit From Other Ministries',
    image: services_5,
  },
]

const handleScroll = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
const Services = () => {

  return (
    <>
      <div>
        <ButtonScroll />
      </div>
      <section className="w-full min-h-screen relative bg-center bg-cover bg-[#0E4C9C]/70">
        <div className='relative lg:top-[80px] hidden lg:flex space-x-10 text-[#fff] items-center justify-center w-full z-10 overflow-hidden'>
          <a href="#services" data-aos='fade-down' data-aos-duration='1000' onClick={(e) => handleScroll(e, "services")}>Our Services</a>
          <a href="#future" data-aos='fade-down' data-aos-duration='1000' onClick={(e) => handleScroll(e, "future")}>Future Goals</a>
        </div>

        <div className='relative top-[40px] lg:top-[100px] min-h-screen pb-[7rem] sm:pb-[9rem] md:pb-[10rem] lg:pb-[14rem]' id='services'>
          <div className='max-w-7xl mx-auto px-2'>
            <h1 className='text-[30px] md:text-[40px] font-[700] text-[#F6BF22]' data-aos='fade-right' data-aos-duration='1000'>Our Services</h1>

            <div className="hidden md:flex flex-wrap justify-center pt-10">
              {service.map((services, index) => (
                <div key={index} className="md:w-1/3 p-3" data-aos='flip-up' data-aos-duration='1500'>
                  <div className="hover:translate-y-[-10px] duration-500 transition-all ease-in-out">
                    <img src={services.image} alt=""
                      className="w-full h-[200px] lg:h-[230px] object-cover object-center" />
                    <div className="text-[#0E4C9C] flex items-center space-x-4 mt-3 text-[11px] lg:text-[14px] xl:text-[16px] font-[400] h-[100px] px-6 services_clip bg-[#fff]">
                      <h1 className='text-[50px] lg:text-[80px] font-[200] italic'>{services.number}</h1>
                      <p>{services.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className='md:hidden swiper_services mt-10'>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                loop={true}
                autoplay
              >
                {service.map((services, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full sm:w-2/3 mx-auto" data-aos='flip-up' data-aos-duration='1500'>
                      <img src={services.image} alt=""
                        className="w-full h-[300px] object-cover object-center" />
                      <div className="text-[#0E4C9C] flex items-center space-x-4 mt-3 text-[11px] lg:text-[14px] xl:text-[16px] font-[400] h-[100px] px-6 services_clip bg-[#fff]">
                        <h1 className='text-[50px] lg:text-[80px] font-[200] italic'>{services.number}</h1>
                        <p>{services.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev">
                  <MdKeyboardArrowLeft />
                </div>
                <div className="swiper-button-next">
                  <MdKeyboardArrowRight />
                </div>

                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id='future' className='relative top-[-50px] max-w-7xl mx-auto px-2 md:px-4'>
        <hr className='h-4 bg-[#F6BF22] border-none' data-aos='fade-up' data-aos-duration='1500' />
        <div className='grid grid-cols-1 md:grid-cols-2 mt-2 overflow-hidden'>
          <div className='bg-[#F6BF22] text-[#000] p-4 md:p-10 order-2 md:order-none' data-aos='fade-right' data-aos-duration='1800'>
            <h1 className='text-[25px] md:text-[30px] lg:text-[40px] text-[#fff] font-[700] leading-none'>Future Business <br/> Plan</h1>

            <p className='pt-5 md:pt-10 text-[10px] sm:text-[12px] lg:text-[15px] text-justify'>Three Way Logistics Co., LTD always strive for development, and by being flourished, we are so aware that 
                we must keep improving our flaws and being better from time to time. We know that logistics sector is very 
                competitive and challenging, but we are very determined to moving forward through every shackle we experience
                along the way. Moreover, we plan to expand Three Way Logistics Co., LTD to be bigger than it is today as we know 
                that we have all the resources and are capable to make it successful. In the future, we would like to cooperate with 
                huge logistics company both local and abroad as we see that current work flow is required the such network. 
                With such cooperation, we believe we can handle big project shipment as the project shipment in particular is for country development.</p>
          </div>

          <div className='order-1 md:order-none' data-aos='fade-left' data-aos-duration='1800'>
            <img src={services_6} alt="" className='w-full h-[300px] sm:h-[400px] md:h-full object-cover object-center' />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services