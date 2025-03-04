import ButtonScroll from './ButtonScroll';
import career_bg from '../assets/images/career_bg.png';
import career_bg1 from '../assets/images/career_bg1.png';
import Footer from '../components/Footer';
const Career = () => {
  return (
    <>
      <div>
        <ButtonScroll />
      </div>
      <section className="w-full h-[60vh] sm:h-screen relative bg-center bg-cover" style={{ backgroundImage: `url(${career_bg})` }}>
        <div className='absolute inset-0 bg-[#0E4C9C] opacity-80'></div>
        <div className="relative top-[10px] sm:top-[50px] lg:top-[100px] xl:top-[150px] max-w-6xl mx-auto px-2 sm:px-4">
          <h1 className='text-[40px] text-[#F6BF22] font-[700] px-2 sm:px-4' data-aos='fade-right' data-aos-duration='1500'>Career</h1>
          <hr className='h-4 bg-[#F6BF22] border-none my-4' data-aos='fade-right' data-aos-duration='1700' />
          <div className='p-0 bg-cover bg-center ' style={{ backgroundImage: `url(${career_bg1})` }}>
            <div className='flex w-full overflow-hidden'>
              <div className='relative w-full md:w-2/3 lg:w-1/2'>
                <div className='absolute inset-0 bg-[#F6BF22] mix-blend-multiply'></div>
                <div className='p-5 sm:p-10 relative mb-[1rem] sm:mb-[5rem]' data-aos='fade-right' data-aos-duration='1500'>
                  <h1 className='text-[30px] sm:text-[40px] lg:text-[60px] text-[#0E4C9C] font-[700] leading-none'>Start to work <br />
                    with us!</h1>
                  <h2 className='text-[20px] sm:text-[30px] text-[#ffffff] py-4'>Apply your dream job today!</h2>

                  <div className='border-[#fff] border-2 rounded-[30px] py-2 px-2 flex items-center space-x-4'>
                    <div>
                      <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.3497 29C6.90093 29 0.0273438 22.4953 0.0273438 14.5C0.0273438 6.50467 6.90093 0 15.3497 0C23.7985 0 30.6721 6.50467 30.6721 14.5C30.6721 22.4953 23.7985 29 15.3497 29ZM23.2957 19.5937C23.4846 19.5937 23.6384 19.4483 23.6384 19.2695V10.1664L15.8425 16.0248C15.6983 16.1333 15.5239 16.1875 15.3497 16.1875C15.1754 16.1875 15.0011 16.1332 14.8568 16.0248L7.06104 10.1664V19.2695C7.06104 19.4483 7.2148 19.5937 7.4037 19.5937H23.2957ZM22.101 9.40625L15.3497 14.4798L8.59836 9.40625H22.101ZM25.2235 9.73052V19.2696C25.2235 20.2755 24.3586 21.0939 23.2957 21.0939H7.4037C6.34071 21.0939 5.47601 20.2755 5.47601 19.2696V9.73052C5.47601 8.72464 6.34077 7.9063 7.4037 7.9063H23.2957C24.3586 7.90624 25.2235 8.72464 25.2235 9.73052Z" fill="white" />
                      </svg>
                    </div>
                    <a className='underline text-[#ffffff] text-[12px] lg:text-[16px]' href="mailto: pheakdey.meng@threewaylogisticskh.com"> pheakdey.meng@threewaylogisticskh.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Career