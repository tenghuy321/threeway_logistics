import ceo_image from '../assets/images/ceo_image.png'
import ButtonScroll from './ButtonScroll';
import './about.css';

import '../components/logistic.css'
import Footer from '../components/Footer';

const handleScroll = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const About = () => {
  return (
    <>
      <div>
        <ButtonScroll />
      </div>
      <section className="w-full min-h-screen relative bg-center bg-cover bg-[#0E4C9C]">
        <div className='relative lg:top-[80px] hidden lg:flex space-x-10 text-[#fff] items-center justify-center w-full z-10 overflow-hidden'>
          <a href="#vision" data-aos='fade-down' data-aos-duration='1500' onClick={(e) => handleScroll(e, "vision")} className="">Vision</a>
          <a href="#mission" data-aos='fade-down' data-aos-duration='1700' onClick={(e) => handleScroll(e, "mission")} className="">Mission</a>
          <a href="#messages" data-aos='fade-down' data-aos-duration='1800' onClick={(e) => handleScroll(e, "messages")}>Massages From CEO</a>
          <a href="#our_people" data-aos='fade-down' data-aos-duration='2100' onClick={(e) => handleScroll(e, "our_people")}>Our People</a>
        </div>

        <div className='relative flex flex-col justify-center items-center min-h-screen'>
          <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 px-2 overflow-hidden'>
            <div className='flex items-start space-x-4 text-[#fff] text-[11px] sm:text-[12px] lg:text-[14px]' id='vision' data-aos='fade-right' data-aos-duration='1500'>
              <div>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g mask="url(#mask0_11_2446)">
                    <path d="M35.6694 26.264C36.1592 26.264 36.5567 26.6615 36.5567 27.1513C36.5567 27.6411 36.1592 28.0386 35.6694 28.0386C35.1796 28.0386 34.7821 27.6411 34.7821 27.1513C34.7821 26.6615 35.1796 26.264 35.6694 26.264Z" fill="#F6BF22" />
                    <path d="M9.76034 26.264C10.2501 26.264 10.6476 26.6615 10.6476 27.1513C10.6476 27.6411 10.2501 28.0386 9.76034 28.0386C9.27056 28.0386 8.87305 27.6411 8.87305 27.1513C8.87305 26.6615 9.27056 26.264 9.76034 26.264Z" fill="#F6BF22" />
                    <path d="M18.6333 32.4749C18.6333 37.3754 14.6609 41.3479 9.76031 41.3479C4.85976 41.3479 0.887329 37.3754 0.887329 32.4749C0.887329 31.4075 1.07544 30.3853 1.42059 29.4377C1.64774 28.8148 1.94233 28.2256 2.29458 27.6773C3.87397 25.2257 6.62726 23.6019 9.76031 23.6019C14.6609 23.6019 18.6333 27.5743 18.6333 32.4749Z" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.1063 28.3367C14.3121 29.3137 15.084 30.8061 15.084 32.4751C15.084 35.4112 12.6963 37.7989 9.76025 37.7989" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M43.1351 27.6775C43.4874 28.2258 43.7819 28.815 44.0092 29.4379C44.3542 30.3855 44.5424 31.4077 44.5424 32.4751C44.5424 37.3756 40.57 41.3481 35.6694 41.3481C30.7688 41.3481 26.7964 37.3756 26.7964 32.4751C26.7964 27.5746 30.7688 23.6021 35.6694 23.6021C38.8024 23.6021 41.5557 25.2259 43.1351 27.6775Z" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.0163 28.3323C39.4529 28.6863 39.8371 29.1114 40.1521 29.6003C40.3641 29.9303 40.5398 30.2844 40.6729 30.649C40.8859 31.2338 40.9932 31.846 40.9932 32.4751C40.9932 35.4112 38.6055 37.7989 35.6694 37.7989" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.7964 12.9545V14.7291V19.1656V25.3767V28.9259V32.4751" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M43.1351 27.6775L37.1912 14.5748L34.9658 9.668C34.3296 8.68044 33.3118 7.96173 32.1202 7.72038C31.8336 7.66182 31.5363 7.63076 31.2329 7.63076C28.783 7.63076 26.7964 9.61742 26.7964 12.0673" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.6333 12.0673C18.6333 9.61742 16.6466 7.63076 14.1968 7.63076C13.8933 7.63076 13.5961 7.66182 13.3095 7.72038C12.1178 7.96173 11.1001 8.68044 10.4639 9.668L8.23857 14.5748L2.29456 27.6775" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.6333 32.4751V28.9259V25.3767V19.1656V14.7291V12.9545" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.6333 28.9259H26.7964" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.6333 25.3767H26.7964" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.6333 14.7291H26.7964" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.7964 12.9545V12.0672V6.74344C26.7964 5.27319 27.988 4.08155 29.4583 4.08155C30.9285 4.08155 32.1202 5.27319 32.1202 6.74344V7.71947" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.3096 7.71947V6.74344C13.3096 5.27319 14.5012 4.08155 15.9715 4.08155C17.4417 4.08155 18.6334 5.27319 18.6334 6.74344V12.0672V12.9545" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.7964 19.1656C26.7964 15.7353 29.5772 12.9545 33.0075 12.9545C34.6188 12.9545 36.0873 13.5685 37.1911 14.5747" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.23865 14.5747C9.34245 13.5685 10.8109 12.9545 12.4223 12.9545C15.8526 12.9545 18.6333 15.7353 18.6333 19.1656" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>

              <div className='flex flex-col space-y-2 text-justify'>
                <h1 className='text-[25px] lg:text-[30px] font-[700]'>Vision</h1>
                <p>Three Way Logistics Co., LTD have a vision to strive to be the most reliable and efficient
                  logistics company in Cambodia, which is able to provide the value, trust, and a better
                  service to our customers and society as a whole.</p>
              </div>
            </div>

            <div className='flex items-start space-x-4 text-[#fff] text-[11px] sm:text-[12px] lg:text-[14px]' id='mission' data-aos='fade-left' data-aos-duration='1500'>
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g mask="url(#mask0_11_2485)">
                    <path d="M27.5289 22.8702L32.486 17.9131C33.3597 17.0396 33.8504 15.8548 33.8504 14.6193V5.20176C33.8504 3.91537 34.8933 2.8726 36.1796 2.8726C37.4659 2.8726 38.5088 3.91537 38.5088 5.20176V17.9186C38.5088 19.7348 37.872 21.4936 36.7093 22.8889L30.7449 30.0461V33.9281H19.8755V27.1526C19.8755 25.0936 20.6934 23.1189 22.1493 21.6629L28.9097 14.9021C29.8192 13.9926 31.2938 13.9925 32.2034 14.9019C33.113 15.8115 33.1131 17.2862 32.2036 18.1958L27.529 22.8706" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.222 22.8702L7.26493 17.9131C6.39126 17.0396 5.90051 15.8548 5.90051 14.6193V5.20176C5.90051 3.91537 4.85766 2.8726 3.57135 2.8726C2.28503 2.8726 1.24219 3.91537 1.24219 5.20176V17.9186C1.24219 19.7348 1.8789 21.4936 3.0417 22.8889L9.00605 30.0461V33.9281H19.8755V27.1526C19.8755 25.0936 19.0575 23.1189 17.6017 21.6629L10.8413 14.9021C9.93174 13.9926 8.45715 13.9925 7.54753 14.9019C6.63792 15.8115 6.63784 17.2862 7.54738 18.1958L12.2219 22.8706" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32.2977 38.5864H19.8755V33.928H32.2977V38.5864Z" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.8755 38.5864H7.45337V33.928H19.8755V38.5864Z" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.8755 3.46149L18.7074 2.29341C17.2022 0.788232 14.7619 0.788232 13.2566 2.29341C11.7514 3.79867 11.7514 6.23901 13.2566 7.74426L19.8755 14.3631L26.4943 7.74426C27.9996 6.23901 27.9996 3.79867 26.4943 2.29341C24.9891 0.788232 22.5487 0.788232 21.0436 2.29341L19.8755 3.46149Z" stroke="#F6BF22" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>

              <div className='flex flex-col space-y-2 text-justify'>
                <h1 className='text-[25px] lg:text-[30px] font-[700]'>Mission</h1>
                <p>Three Way Logistics Co., LTD have a mission to provide our customers reliable and efficient services
                  that they can be satisfied and beneficial. In Three Way Logistics Co., LTD, we highly value each other
                  and are hard-working and dedicated to our craft. Moreover, we would like to be the best counselor for
                  our customers coming to us for various types of logistics question both import and export.
                  We would also like to be a part of an important party to involve in every activity and aspect of
                  the Logistics Association as we firmly believe that together with the Logistics Association we can create a
                  masterpiece for the customers and society. In Three Way Logistics Co., LTD, we highly value each other and
                  are hard-working and dedicated to our craft.</p>
              </div>
            </div>
          </div>
        </div>


        <div className='w-[80%] h-[30px] sm:h-[40px] md:h-[50px] xl:h-[60px] clip_about absolute bottom-0 left-0'>
        </div>
      </section>

      {/* message from ceo */}
      <section>
        <div className='max-w-6xl mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 md:space-x-12 overflow-hidden' id='messages'>
          <img src={ceo_image} alt="" className='w-full md:w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-contain object-center ' data-aos='fade-right' data-aos-duration='1500' />
          <div className='text-[12px] md:text-[14px] space-y-3 text-justify px-0 sm:px-8 md:px-0 pb-10 md:pb-0' data-aos='fade-left' data-aos-duration='1500'>
            <h1 className='text-[#F6BF22] text-[25px] sm:text-[30px] md:text-[40px] font-[700] pt-2 md:pt-0'>Messages From CEO</h1>
            <p>In Three Way Logistics Co., LTD, we really believe in honesty, hard-work, reliability, dedication, mutual benefit, and social contribution. If you treasure those things too, Three Way Logistics Co., LTD is the right partner and place for you to make your business flourish.</p>
          </div>
        </div>
      </section>


      <section id='our_people' className='pt-2'>
        <hr className='max-w-6xl mx-auto h-2 bg-[#F6BF22]' />
        <div className='bg-[#0E4C9C] w-full min-h-screen md:h-screen overflow-hidden'>
          <div className='max-w-6xl mx-auto px-2 xl:px-0 py-20'>
            <h1 className='text-[30px] md:text-[40px] font-[700] text-[#F6BF22]' data-aos='fade-right' data-aos-duration='1000'>Our People</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 pt-10'>
              <div className='col-span-2 md:col-span-4 flex items-center space-x-4' data-aos='fade-right' data-aos-duration='1000'>
                <div className='bg-[#fff] p-2 leading-none h-[190px] lg:h-[230px] clip-logistic relative'>
                  <img src={ceo_image} alt="" className='w-full h-full object-contain object-center' />
                </div>
                <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]'>
                  <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Mr. Meng Pheakdey</h1>
                  <p>General Manager</p>
                </div>
              </div>


              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='1000'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Ms. Uk Sosorphea</h1>
                <p>Senior Accountant</p>
              </div>

              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='1500'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Ms. Ek Bunrany</h1>
                <p>Accountant</p>
              </div>

              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='2000'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Mr. Soem Piseth</h1>
                <p>Sales & Marketing Executive</p>
              </div>

              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='2500'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Ms. Kim Sopha</h1>
                <p>Senior Operation Officer</p>
              </div>

              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='1000'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Ms. Suo Sotheara</h1>
                <p>Senior Operation Officer</p>
              </div>

              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='1500'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Mr. Sea Sopheaktra</h1>
                <p>Operation Officer</p>
              </div>

              <div className='text-[#fff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]' data-aos='fade-up' data-aos-duration='2000'>
                <h1 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[700]'>Mr. Va Synal</h1>
                <p>Operation Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>


  )
}

export default About