import logo from '../assets/images/logo.png';
import footer_bg from '../assets/images/footer_bg.png';
import { NavLink } from 'react-router-dom';
import '../components/footer.css'
const Footer = () => {
    return (
        <footer className='w-full relative min-h-screen lg:h-screen bg-cover bg-center mt-10' style={{ backgroundImage: `url(${footer_bg})` }}>
            <div className='absolute inset-0 mix-blend-multiply bg-color min-h-screen'></div>
            <div className='relative w-full min-h-[40%] flex flex-col sm:flex-row items-center justify-center space-x-4 py-10 px-2 lg:py-0 z-10 text-[#fff]' data-aos='fade-right' data-aos-duration='1000'>
                <img src={logo} alt="" className='w-20 h-20' />
                <h1 className='text-[30px] md:text-[40px] font-[700]'>Three Way Logistic</h1>
            </div>

            <div className='relative w-full min-h-[60%] py-10 text-[#fff]'>
                <div className='absolute inset-0 w-full h-full bg-[#001836] mix-blend-multiply'></div>
                <div className='relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2'>
                    <div className='text-[12px] xl:text-[13px]'>
                        <h1 className='text-[13px] xl:text-[14px] font-[700]'>Information</h1>
                        <ul className='flex flex-col space-y-3 pt-2'>
                            <li><NavLink className={({ isActive }) => `footer_link ${isActive ? 'active font-[600]' : ''}`} to="/">Home</NavLink></li>
                            <li><NavLink className="footer_link" to="/about">About Us</NavLink></li>
                            <li><NavLink className="footer_link" to="/services">Logistics Services</NavLink></li>
                            <li><NavLink className="footer_link" to="/career">Career</NavLink></li>
                            <li><NavLink className="footer_link" to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>

                    <div className='text-[12px] xl:text-[13px] pt-5 sm:pt-0'>
                        <h1 className='text-[13px] xl:text-[14px] font-[700]' >Three Way Logistics Co., LTD </h1>
                        <p className='pt-2'>was founded and established on 1st February 2024 by Mr. Meng Pheakdey. The company is located in Sangkat Srah Chork, Khan Doun Penh, Phnom Penh.</p>

                        <div className='pt-5 text-[12px] xl:text-[13px] space-y-3'>
                            <p>For all business inquiries, please contact to:</p>
                            <p>Mr. Meng Pheakdey (General Manager)</p>
                            <p><span><a href="tel:099 709 797">099 709 797</a></span> / <span><a href="tel:096 333 0904">096 333 0904</a></span></p>
                            <a href="mailto:pheakdey.meng@threewaylogisticskh.com">pheakdey.meng@threewaylogisticskh.com</a>
                        </div>
                    </div>

                    <div className="w-full lg:w-[70%] md:ml-auto flex flex-col h-[300px] lg:h-[250px] xl:h-[300px] col-span-1 sm:col-span-2 py-4 lg:py-0">
                        <iframe className='rounded-sm'
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.552959492127!2d104.9072938748017!3d11.583871243782143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951615e57be5f%3A0x1d56ed7e547a77f7!2sTH1%20Building!5e0!3m2!1sen!2skh!4v1740710425611!5m2!1sen!2skh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <div className='pt-4 flex items-center space-x-4'>
                            <h1>Follow</h1>
                            <a href="#" className='transition-all hover:scale-110 duration-300'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9155 0C4.89671 0 0 4.89671 0 10.9155C0 16.9338 4.89671 21.831 10.9155 21.831C16.9338 21.831 21.831 16.9338 21.831 10.9155C21.831 4.89671 16.9347 0 10.9155 0ZM13.6301 11.2998H11.8542V17.6294H9.22271C9.22271 17.6294 9.22271 14.1709 9.22271 11.2998H7.97183V9.06267H9.22271V7.61569C9.22271 6.57936 9.71516 4.96002 11.8784 4.96002L13.8284 4.9675V7.13907C13.8284 7.13907 12.6434 7.13907 12.413 7.13907C12.1826 7.13907 11.8551 7.25427 11.8551 7.74847V9.06311H13.86L13.6301 11.2998Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#" className='transition-all hover:scale-110 duration-300'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9155 21.831C16.9439 21.831 21.831 16.9439 21.831 10.9155C21.831 4.88703 16.9439 0 10.9155 0C4.88703 0 0 4.88703 0 10.9155C0 16.9439 4.88703 21.831 10.9155 21.831Z" fill="white" />
                                    <path d="M4.99471 10.679L15.519 6.6212C16.0075 6.44473 16.4341 6.74036 16.2759 7.47897L16.2768 7.47806L14.4848 15.9203C14.352 16.5188 13.9963 16.6643 13.4988 16.3824L10.7699 14.3712L9.45368 15.6392C9.30814 15.7847 9.18534 15.9075 8.90336 15.9075L9.09711 13.1305L14.1546 8.56142C14.3747 8.36767 14.1055 8.25852 13.8153 8.45136L7.56531 12.3864L4.871 11.5459C4.28611 11.3603 4.27338 10.961 4.99471 10.679Z" fill="#0E4C9C" />
                                </svg>
                            </a>
                            <a href="#" className='transition-all hover:scale-110 duration-300'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8289 10.9798C21.8289 4.98702 16.9708 0.128906 10.978 0.128906C4.98519 0.128906 0.127075 4.98702 0.127075 10.9798C0.127075 16.9726 4.98519 21.8307 10.978 21.8307C16.9708 21.8307 21.8289 16.9726 21.8289 10.9798Z" fill="white" />
                                    <path d="M13.5479 5.26904H8.40802C7.57496 5.26904 6.77602 5.59997 6.18696 6.18904C5.5979 6.7781 5.26697 7.57704 5.26697 8.41009V13.55C5.26697 14.3831 5.5979 15.182 6.18696 15.7711C6.77602 16.3601 7.57496 16.691 8.40802 16.691H13.5479C14.381 16.691 15.1799 16.3601 15.769 15.7711C16.358 15.182 16.689 14.3831 16.689 13.55V8.41009C16.689 7.57704 16.358 6.7781 15.769 6.18904C15.1799 5.59997 14.381 5.26904 13.5479 5.26904ZM15.6895 13.0988C15.6895 13.7865 15.4164 14.446 14.9301 14.9322C14.4439 15.4185 13.7844 15.6916 13.0968 15.6916H8.85919C8.17154 15.6916 7.51205 15.4185 7.02581 14.9322C6.53956 14.446 6.26639 13.7865 6.26639 13.0988V8.86126C6.26639 8.17361 6.53956 7.51412 7.02581 7.02788C7.51205 6.54164 8.17154 6.26847 8.85919 6.26847H13.0968C13.7844 6.26847 14.4439 6.54164 14.9301 7.02788C15.4164 7.51412 15.6895 8.17361 15.6895 8.86126V13.0988Z" fill="#0E4C9C" />
                                    <path d="M13.061 8.9183L13.0339 8.89117L13.0111 8.86833C12.4712 8.33036 11.7401 8.02845 10.9779 8.02881C10.5931 8.03142 10.2125 8.10984 9.85796 8.25959C9.50342 8.40933 9.18185 8.62747 8.91163 8.90153C8.64142 9.17559 8.42785 9.50021 8.28313 9.85683C8.13841 10.2135 8.06537 10.5951 8.06819 10.98C8.06761 11.761 8.37549 12.5107 8.92484 13.0659C9.19393 13.3383 9.51458 13.5543 9.86806 13.7014C10.2216 13.8485 10.6008 13.9237 10.9837 13.9226C11.558 13.9105 12.1163 13.7316 12.5907 13.4077C13.0651 13.0837 13.4349 12.6288 13.6552 12.0982C13.8754 11.5677 13.9365 10.9846 13.831 10.4199C13.7255 9.85527 13.458 9.33352 13.061 8.9183ZM10.9779 12.916C10.5939 12.9214 10.217 12.8124 9.89506 12.603C9.57313 12.3936 9.32077 12.0931 9.17007 11.7398C9.01937 11.3866 8.97713 10.9965 9.04874 10.6192C9.12036 10.2418 9.30257 9.89435 9.57222 9.62087C9.84187 9.34739 10.1868 9.16029 10.563 9.08336C10.9393 9.00644 11.33 9.04316 11.6853 9.18886C12.0407 9.33456 12.3446 9.58266 12.5586 9.9016C12.7726 10.2205 12.8868 10.5959 12.8869 10.98C12.8887 11.2325 12.8408 11.4828 12.7459 11.7168C12.651 11.9508 12.5109 12.1638 12.3336 12.3436C12.1563 12.5233 11.9453 12.6665 11.7127 12.7647C11.4801 12.8629 11.2304 12.9143 10.9779 12.916Z" fill="#0E4C9C" />
                                    <path d="M14.7515 7.89345C14.7522 7.98506 14.7349 8.07593 14.7005 8.16084C14.6661 8.24576 14.6153 8.32305 14.551 8.3883C14.4866 8.45355 14.4101 8.50547 14.3257 8.54109C14.2412 8.57671 14.1506 8.59534 14.059 8.5959C13.9682 8.59586 13.8782 8.57779 13.7944 8.54274C13.7106 8.5077 13.6346 8.45637 13.5707 8.39173C13.474 8.29359 13.4082 8.16922 13.3815 8.03404C13.3548 7.89886 13.3684 7.75882 13.4205 7.63127C13.4727 7.50373 13.5611 7.39429 13.6748 7.31653C13.7886 7.23878 13.9227 7.19612 14.0604 7.19385C14.2217 7.19382 14.3778 7.25041 14.5016 7.35376L14.5159 7.36803C14.5389 7.38678 14.56 7.40783 14.5787 7.43085L14.5944 7.44799C14.6966 7.57389 14.7521 7.73128 14.7515 7.89345Z" fill="#0E4C9C" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 w-full py-2 bg-[#fff] text-[14px] font-[700] text-[#0E4C9C] text-center'>
                    All right reserved 2025
                </div>
            </div>
        </footer>
    )
}

export default Footer