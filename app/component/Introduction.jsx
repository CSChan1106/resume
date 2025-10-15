import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { assets } from '@/assets/assets'

export default function Introduction({ isDarkMode = false }) {
  return (
    <section
      id="introduction"
      className="w-full px-[12%] py-20 scroll-mt-20 pt-32 sm:pt-36 lg:pt-40"
      aria-labelledby="introduction-heading"
    >
      <motion.h2
        id="introduction-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo mb-8"
      >
        Introduction
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-12 my-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden flex-shrink-0"
        >
          <Image
            src={assets.user_image}
            alt="Profile — Chan Chak Shing"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`flex-1 p-6 rounded-3xl cursor-pointer duration-500 ${
            isDarkMode
              ? 'bg-gray-900 text-white shadow-lg hover:shadow-[4px_4px_0_#fff]'
              : 'bg-gray-100 text-black shadow-lg hover:shadow-[4px_4px_0_#000]'
          }`}
        >
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-end gap-2 text-xl md:text-2xl m-4 font-Ovo"
          >
            Hi! I am Brian Chan
            <Image src={assets.hand_icon} alt="wave" className="w-5" />
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl m-4 font-Ovo"
          >
            I am a recent Computer Science graduate from Hong Kong Metropolitan
            University with a strong academic record. I'm passionate about web
            and backend development, quick to learn new technologies, and eager
            to apply my skills. I'm currently seeking opportunities to
            contribute to projects and gain valuable experience.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:scale-105 duration-300"
            >
              Contact me
              <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="/ChanChakShing_resume.pdf"
              download
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:scale-105 duration-300"
            >
              My resume
              <Image src={assets.download_icon} alt="download" className="w-4" />
            </motion.a>
          </div>
        </motion.div>
        
      </motion.div>
      
    </section>
  )
}
