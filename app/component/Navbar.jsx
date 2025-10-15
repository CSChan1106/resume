import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRef } from 'react'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
  const [isScroll, setIsScroll] = React.useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform='translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform='translateX(16rem)';
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY>50){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    })
  }, []);
  return (
    <>
    <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image priority={true} src={assets.header_bg_color} alt="" className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-[#000] dark:shadow-white/20":""}`}>
        <a href="#top" >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-38 h-26 rounded-full object-cover"
        />
        </a>
        <ul className={`hidden lg:flex items-center gap-6 xl:gap-8 rounded-full px-12 py-3 mr-3 ${isScroll ? "": " bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}` }>
            <li> <a className='font-Ovo' href="#top">Introduction</a> </li>
            <li> <a className='font-Ovo' href="#education">Education</a> </li>
            <li> <a className='font-Ovo' href="#skills">Skills</a> </li>
            <li> <a className='font-Ovo' href="#work_experience">Work Experience</a> </li>
            <li> <a className='font-Ovo' href="#my_fyp">FYP</a> </li>
            <li> <a className='font-Ovo' href="#achievements_awards">Achievements/Awards</a> </li>
        </ul>
        <div className='flex items-center justify-between '>
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
          </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full  font-ovo dark:border-white/50 lg:ml-3'> 
                Contact<Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'></Image></a>

          <button className='block lg:hidden ml-3 ' onClick={openMenu}>
            <Image src={isDarkMode?assets.menu_white:assets.menu_black} alt="" className='w-6' />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul ref= {sideMenuRef} className='flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode?assets.close_white:assets.close_black} className='w-5 cursor-pointer' alt=""/>
          </div>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#top">Introduction</a> </li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#education">Education</a> </li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a> </li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#work_experience">Work Experience</a> </li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#my_fyp">FYP</a> </li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#achievements_awards">Achievements/Awards</a> </li>
            <li> <a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a> </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
