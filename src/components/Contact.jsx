import logo from '../assets/images/logo.png';
import footer_bg from '../assets/images/footer_bg.png';
import { NavLink } from 'react-router-dom';
const Contact = () => {
  return (
    <>

      <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${footer_bg})` }}>
        <div className='absolute inset-0 w-full min-h-screen bg-[#001836] mix-blend-multiply'></div>
        <div className='w-full h-full relative pt-[10px] lg:pt-[130px] xl:pt-[150px] min-h-screen'>
          <div className='w-full max-w-7xl mx-auto flex items-center space-x-4 py-10 px-2 lg:py-0 z-10 text-[#fff]' data-aos='fade-right' data-aos-duration='1000'>
            <img src={logo} alt="" className='w-20 h-20' />
            <h1 className='text-[25px] sm:text-[30px] md:text-[40px] font-[700]'>Three Way Logistic</h1>
          </div>
          <div className='relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 pt-6 md:pt-14 xl:pt-20'>
            <div className='text-[13px] xl:text-[14px] text-[#fff]'>
              <h1 className='font-[700]'>Information</h1>
              <ul className='flex flex-col space-y-2 pt-2'>
                <li><NavLink className={({ isActive }) => `footer_link ${isActive ? 'active font-[600]' : ''}`} to="/">About Us</NavLink></li>
                <li><NavLink className="footer_link" to="/logistics">Logistics</NavLink></li>
                <li><NavLink className="footer_link" to="/services">Services</NavLink></li>
                <li><NavLink className="footer_link" to="/career">Career</NavLink></li>
                <li><NavLink className="footer_link" to="/contact">Contact Us</NavLink></li>
              </ul>

              <div className='pt-5 md:pt-10 lg:pt-20'>
                <p>Follow</p>
                <div className='flex space-x-4 pt-2'>
                  <a href="#" className='hover:scale-110 transition-all duration-300'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9155 0C4.89671 0 0 4.89671 0 10.9155C0 16.9338 4.89671 21.831 10.9155 21.831C16.9338 21.831 21.831 16.9338 21.831 10.9155C21.831 4.89671 16.9347 0 10.9155 0ZM13.6301 11.2998H11.8542V17.6294H9.22271C9.22271 17.6294 9.22271 14.1709 9.22271 11.2998H7.97183V9.06267H9.22271V7.61569C9.22271 6.57936 9.71516 4.96002 11.8784 4.96002L13.8284 4.9675V7.13907C13.8284 7.13907 12.6434 7.13907 12.413 7.13907C12.1826 7.13907 11.8551 7.25427 11.8551 7.74847V9.06311H13.86L13.6301 11.2998Z" fill="white" />
                    </svg>
                  </a>
                  <a href="#" className='hover:scale-110 transition-all duration-300'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9155 21.831C16.9439 21.831 21.831 16.9439 21.831 10.9155C21.831 4.88703 16.9439 0 10.9155 0C4.88703 0 0 4.88703 0 10.9155C0 16.9439 4.88703 21.831 10.9155 21.831Z" fill="white" />
                      <path d="M4.99495 10.679L15.5193 6.62114C16.0078 6.44467 16.4344 6.7403 16.2761 7.47891L16.277 7.478L14.4851 15.9202C14.3522 16.5187 13.9966 16.6643 13.499 16.3823L10.7702 14.3711L9.45393 15.6391C9.30839 15.7847 9.18559 15.9075 8.9036 15.9075L9.09735 13.1304L14.1549 8.56136C14.375 8.36761 14.1057 8.25846 13.8156 8.4513L7.56555 12.3863L4.87125 11.5458C4.28636 11.3603 4.27362 10.9609 4.99495 10.679Z" fill="#0E4C9C" />
                    </svg>
                  </a>
                  <a href="#" className='hover:scale-110 transition-all duration-300'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8288 10.9799C21.8288 4.98714 16.9706 0.129028 10.9779 0.129028C4.98507 0.129028 0.126953 4.98714 0.126953 10.9799C0.126953 16.9727 4.98507 21.8308 10.9779 21.8308C16.9706 21.8308 21.8288 16.9727 21.8288 10.9799Z" fill="white" />
                      <path d="M13.548 5.26923H8.40814C7.57508 5.26923 6.77614 5.60016 6.18708 6.18922C5.59802 6.77828 5.26709 7.57722 5.26709 8.41028V13.5502C5.26709 14.3832 5.59802 15.1822 6.18708 15.7712C6.77614 16.3603 7.57508 16.6912 8.40814 16.6912H13.548C14.3811 16.6912 15.18 16.3603 15.7691 15.7712C16.3582 15.1822 16.6891 14.3832 16.6891 13.5502V8.41028C16.6891 7.57722 16.3582 6.77828 15.7691 6.18922C15.18 5.60016 14.3811 5.26923 13.548 5.26923ZM15.6897 13.099C15.6897 13.7867 15.4165 14.4462 14.9303 14.9324C14.444 15.4186 13.7845 15.6918 13.0969 15.6918H8.85931C8.17166 15.6918 7.51217 15.4186 7.02593 14.9324C6.53968 14.4462 6.26652 13.7867 6.26652 13.099V8.86145C6.26652 8.1738 6.53968 7.51431 7.02593 7.02806C7.51217 6.54182 8.17166 6.26865 8.85931 6.26865H13.0969C13.7845 6.26865 14.444 6.54182 14.9303 7.02806C15.4165 7.51431 15.6897 8.1738 15.6897 8.86145V13.099Z" fill="#0E4C9C" />
                      <path d="M13.0613 8.91842L13.0342 8.89129L13.0113 8.86845C12.4715 8.33048 11.7403 8.02857 10.9782 8.02893C10.5933 8.03155 10.2128 8.10997 9.85821 8.25971C9.50366 8.40946 9.18209 8.62759 8.91188 8.90165C8.64166 9.17571 8.42809 9.50033 8.28337 9.85696C8.13865 10.2136 8.06562 10.5952 8.06844 10.9801C8.06786 11.7611 8.37573 12.5108 8.92509 13.066C9.19417 13.3384 9.51482 13.5544 9.86831 13.7015C10.2218 13.8486 10.601 13.9238 10.9839 13.9227C11.5582 13.9106 12.1166 13.7317 12.5909 13.4078C13.0653 13.0839 13.4352 12.6289 13.6554 12.0984C13.8756 11.5678 13.9367 10.9847 13.8312 10.42C13.7257 9.85539 13.4582 9.33364 13.0613 8.91842ZM10.9782 12.9161C10.5942 12.9215 10.2172 12.8125 9.8953 12.6031C9.57338 12.3937 9.32101 12.0932 9.17031 11.74C9.01961 11.3867 8.97738 10.9966 9.04899 10.6193C9.1206 10.242 9.30282 9.89447 9.57246 9.62099C9.84211 9.34752 10.187 9.16041 10.5633 9.08349C10.9396 9.00656 11.3302 9.04328 11.6856 9.18898C12.0409 9.33469 12.3449 9.58279 12.5588 9.90173C12.7728 10.2207 12.8871 10.596 12.8871 10.9801C12.889 11.2326 12.8411 11.483 12.7462 11.7169C12.6512 11.9509 12.5111 12.1639 12.3338 12.3437C12.1566 12.5235 11.9456 12.6666 11.713 12.7648C11.4804 12.863 11.2307 12.9144 10.9782 12.9161Z" fill="#0E4C9C" />
                      <path d="M14.7515 7.89375C14.7522 7.98537 14.7349 8.07623 14.7005 8.16115C14.6661 8.24606 14.6153 8.32336 14.551 8.3886C14.4866 8.45385 14.4101 8.50577 14.3257 8.5414C14.2412 8.57702 14.1506 8.59564 14.059 8.5962C13.9682 8.59616 13.8782 8.57809 13.7944 8.54305C13.7106 8.508 13.6346 8.45667 13.5707 8.39204C13.474 8.2939 13.4082 8.16953 13.3815 8.03435C13.3548 7.89917 13.3684 7.75912 13.4205 7.63158C13.4727 7.50403 13.5611 7.3946 13.6748 7.31684C13.7886 7.23908 13.9227 7.19642 14.0604 7.19415C14.2217 7.19412 14.3778 7.25072 14.5016 7.35406L14.5159 7.36834C14.5389 7.38708 14.56 7.40813 14.5787 7.43116L14.5944 7.44829C14.6966 7.5742 14.7521 7.73159 14.7515 7.89375Z" fill="#0E4C9C" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className='text-[12px] xl:text-[14px] text-[#fff] pt-5 sm:pt-0'>
              <h1 className='font-[700]' >Three Way Logistics Co., LTD </h1>
              <p className='pt-2'>was founded and established on 1st February 2024 by Mr. Meng Pheakdey. The company is located in Sangkat Srah Chork, Khan Doun Penh, Phnom Penh.</p>

              <div className='pt-5 text-[12px] xl:text-[14px] space-y-2'>
                <p>For all business inquiries, please contact to:</p>
                <p>Mr. Meng Pheakdey (General Manager)</p>
              </div>

              <div className='flex flex-col space-y-2 pt-5'>
                <a href="tel:099 709 797">099 709 797</a>
                <a href="tel:096 333 0904">096 333 0904</a>
              </div>

              <div className='pt-5'>
                <a href="mailto:pheakdey.meng@threewaylogisticskh.com">pheakdey.meng@threewaylogisticskh.com</a>
              </div>
            </div>

            <div className="w-full lg:w-[70%] md:ml-auto flex flex-col h-[300px] lg:h-[250px] xl:h-[300px] col-span-1 sm:col-span-2 pb-16 py-4 lg:py-0">
              <iframe className='rounded-md'
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.552959492127!2d104.9072938748017!3d11.583871243782143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951615e57be5f%3A0x1d56ed7e547a77f7!2sTH1%20Building!5e0!3m2!1sen!2skh!4v1740710425611!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className='absolute bottom-0 left-0 w-full py-2 bg-[#fff] text-[14px] font-[700] text-[#0E4C9C] text-center'>
            All right reserved 2025
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact