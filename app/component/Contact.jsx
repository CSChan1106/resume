import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { WEB3FORM_KEY } from '../web3form'
const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");
  const basePath = process.env.NODE_ENV === 'production' ? '/test' : '';
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", WEB3FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id='contact'
        className='w-full px-[12%] py-20 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]'
        style={!isDarkMode ? { backgroundImage: `url(${basePath}/footer-bg-color.png)` } : {}}
        >

        <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: "tween", ease: "easeInOut" }}
            className='text-center text-5xl font-Ovo'
        >
            Get in touch
        </motion.h2>

        <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "tween" }}
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto"
        >
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6, type: "spring", bounce: 0.3 }}
                    type="text"
                    placeholder='Enter your name'
                    required 
                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:border-white/90 dark:bg-[#2a004a]/30'
                    name='name'
                    whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #a855f7" }}
                />
                <motion.input 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, type: "tween", ease: "easeOut" }}
                    type="email"
                    placeholder='Enter your email'
                    required 
                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:border-white/90 dark:bg-[#2a004a]/30'
                    name='email'
                    whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #a855f7" }}
                />
            </div>
            <motion.textarea 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7, type: "spring", damping: 12 }}
                rows='6'
                placeholder='Enter your messgae'
                required
                className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:border-white/90 dark:bg-[#2a004a]/30'
                name='message'
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #a855f7" }}
            ></motion.textarea>
            <motion.button 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6, type: "tween", ease: "backOut" }}
                whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: "#a855f7", 
                    transition: { delay: 0, duration: 0.2 } 
                }}
                whileTap={{ 
                    scale: 0.97, 
                    transition: { delay: 0, duration: 0.1 } 
                }}
                className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]'
                type='submit'
            >
                Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.button>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: result ? 1 : 0 }}
                transition={{ duration: 0.5, type: "tween" }}
                className='mt-4'
            >
                {result}
            </motion.p>
        </motion.form>
    </motion.div>
)
}

export default Contact