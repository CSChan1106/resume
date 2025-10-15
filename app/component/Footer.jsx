import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center '>
            <Image src={isDarkMode?assets.logo_dark:assets.logo} alt='' className='w-38 mx-auto mb-2 h-26 rounded-full object-cover'/>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt012 py-6'>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6'/>
                cschan1106@gamil.com
            </div>
        </div>
    </div>
  )
}

export default Footer