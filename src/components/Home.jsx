// import { useState } from 'react';
import main_bg from '../assets/images/main_bg_1.png';
import './about.css';
import ButtonScroll from './ButtonScroll';
import client1 from '../assets/images/clients/client_1.png';
import client2 from '../assets/images/clients/client_2.png';
import client3 from '../assets/images/clients/client_3.png';
import client4 from '../assets/images/clients/client_4.png';
import client5 from '../assets/images/clients/client_5.png';
import client6 from '../assets/images/clients/client_6.png';
import client7 from '../assets/images/clients/client_7.png';
import client8 from '../assets/images/clients/client_8.png';
import client9 from '../assets/images/clients/client_9.png';
import client10 from '../assets/images/clients/client_10.png';
import Footer from '../components/Footer';

const client = [
  {
    image: client1,
  },
  {
    image: client2,
  },
  {
    image: client3,
  },
  {
    image: client4,
  },
  {
    image: client5,
  },
  {
    image: client6,
  },
  {
    image: client7,
  },
  {
    image: client8,
  },
  {
    image: client9,
  },
  {
    image: client10,
  },
]

const handleScroll = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
const Home = () => {
    // const [showMore1, setShowMore1] = useState(false);
    // const [showMore2, setShowMore2] = useState(false);
    // const [showMore3, setShowMore3] = useState(false);
    return (
        <>
            <div>
                <ButtonScroll />
            </div>
            <section className="w-full h-[60vh] sm:h-[70vh] md:h-screen relative bg-center bg-cover" style={{ backgroundImage: `url(${main_bg})` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='relative lg:top-[80px] hidden lg:flex space-x-10 text-[#fff] items-center justify-center w-full z-10 overflow-hidden'>
                    <a href="#aboutus" data-aos='fade-down' data-aos-duration='1500' onClick={(e) => handleScroll(e, "aboutus")} className="">About Us</a>
                    <a href="#whyus" data-aos='fade-down' data-aos-duration='1700' onClick={(e) => handleScroll(e, "whyus")} className="">Why Us</a>
                    <a href="#clients" data-aos='fade-down' data-aos-duration='1900' onClick={(e) => handleScroll(e, "clients")}>Our Clients</a>
                </div>
                <div className="relative flex flex-col justify-center items-center h-full leading-none text-[#ffff]">
                    <h3 className="text-[18px] sm:text-[20px] md:text-[30px] font-[300]" data-aos='fade-up' data-aos-duration='1200'>Welcome to</h3>
                    <h1 className="text-[#F6BF22] font-[700] text-[50px] sm:text-[70px] md:text-[90px]" data-aos='fade-up' data-aos-duration='1500'>THREE WAY</h1>
                    <h2 className="font-[700] tracking-[6px] text-[30px] sm:text-[40px] md:text-[50px]" data-aos='fade-up' data-aos-duration='1800'>LOGISTICS</h2>
                </div>

                <div className='w-[80%] h-[30px] sm:h-[40px] md:h-[50px] xl:h-[60px] clip_about absolute bottom-0 left-0'>
                </div>
            </section>

            {/* aboutus */}
            <section>
                <div className='max-w-7xl mx-auto px-2 md:px-4 text-[12px] sm:text-[14px] md:text-[16px] pt-10 md:pt-0' id='aboutus'>
                    <h1 className='text-[30px] md:text-[40px] text-[#F6BF22] font-[700]' data-aos='fade-right' data-aos-duration='1000'>About Us</h1>
                    <div className='mt-2 flex flex-col space-y-3'>
                        <h1 className='text-[25px] sm:text-[30px] md:text-[40px] text-[#0E4C9C] font-[700] leading-none' data-aos='fade-right' data-aos-duration='1200'>Three Way Logistics Co., LTD </h1>
                        <p className='pt-2 md:pt-4' data-aos='fade-right' data-aos-duration='1400'>was founded and established on 1st February 2024 by Mr. Meng Pheakdey. The company is located in Sangkat Srah Chork, Khan Doun Penh, Phnom Penh.</p>
                        <p data-aos='fade-right' data-aos-duration='1600'>The reason that Three Way Logistics Co., LTD was created is that we would like to contribute into the importing and exporting sectors as we firmly believe that our efforts in contributing into this sector will be an important part in joining hands with other relative parties to develop the sector in the country as strong as in order to compete with logistics sector in other countries. </p>
                        <p data-aos='fade-right' data-aos-duration='1800'>Speaking of brand imported, we do not have certain brands to import as we generally import various types of products.</p>
                    </div>
                </div>
            </section>

            {/* why us */}
            <section className='mt-[8rem] md:mt-[16rem] image_after'>
                <hr className='h-[8px] bg-[#F6BF22]' />
                <div className='relative bg-[#0E4C9C] mt-2 min-h-screen py-20 sm:py-32 md:py-10' id='whyus'>
                    <div className='max-w-5xl mx-auto flex flex-col justify-center min-h-screen'>
                        <h1 className='text-[30px] md:text-[40px] text-[#F6BF22] font-[700] px-4' data-aos='fade-right' data-aos-duration='1000'>Why Us</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 pt-20 gap-10 px-4 sm:px-20 md:px-2 z-[999]'>
                            <div className='text-[#fff] text-[12px] md:text-[14px]' data-aos='fade-up' data-aos-duration='1000'>
                                <p className='bg-[#7FCFEE] text-[150px] font-[700] p-4 leading-none h-[230px] flex items-end clip-bottom-right'>
                                    01
                                </p>

                                <p className='py-4'>It has been a year since Three Way Logistics Co., LTD stepped its foot on freight forwarding business.</p>
                            </div>

                            <div className='text-[#fff] text-[12px] md:text-[14px]' data-aos='fade-up' data-aos-duration='1500'>
                                <p className='bg-[#306BB6] text-[150px] font-[700] p-4 leading-none h-[230px] flex items-end clip-bottom-right'>
                                    02
                                </p>
                                <p className='py-4'>In Three Way Logistics Co., LTD, we have qualified and experienced people working in logistics sector for years.</p>
                            </div>

                            <div className='text-[#fff] text-[12px] md:text-[14px]' data-aos='fade-up' data-aos-duration='2000'>
                                <p className='bg-[#F6BF22] text-[150px] font-[700] p-4 leading-none h-[230px] flex items-end clip-bottom-right'>
                                    03
                                </p>
                                <p className='py-4'>In Three Way Logistics Co., LTD, we prioritize our customers the most as we are able to provide logistics.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[80%] h-[30px] sm:h-[40px] md:h-[50px] xl:h-[60px] clip_about absolute bottom-0 left-0'>
                    </div>
                </div>
            </section>

            {/* clients */}
            <section className='max-w-7xl mx-auto px-4' id='clients'>
                <h1 className='text-[30px] md:text-[40px] text-[#F6BF22] font-[700]'>Our Clients</h1>
                <div className="h-[200px] w-full max-w-7xl mx-auto relative overflow-hidden">
                    {client.map((clients, index) => (
                        <div key={index} className={`client_item item${index + 1} flex items-center justify-center`}>
                            <img src={clients.image} alt="" />
                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Home