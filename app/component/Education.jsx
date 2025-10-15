import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { assets } from '@/assets/assets'

export default function Education({ isDarkMode = false }) {
  const hoverShadow = isDarkMode ? '4px 4px 0 #fff' : '4px 4px 0 #000'

  return (
    <motion.div
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
      aria-labelledby="education-heading"
    >
      <motion.h2
        id="education-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo mb-10"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row-reverse items-center gap-12 my-8"
      >
        {/* School Image (right on large screens) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg lg:w-[480px] sm:w-96 rounded-3xl overflow-hidden flex-shrink-0"
        >
          <Image
            src={assets.school}
            alt="Hong Kong Metropolitan University"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* Text content (left on large screens) */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, boxShadow: hoverShadow }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`flex-1 rounded-3xl p-6 ml-55 shadow-lg overflow-hidden cursor-pointer ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold font-Ovo mb-3">
            Hong Kong Metropolitan University
          </h3>

          <p className="text-lg font-medium mb-4">Bachelor of Science (Hons) — Computer Science</p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
              Graduated 2025
            </span>

            <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              cGPA: 3.63
            </span>
          </div>
        </motion.div>
      </motion.div>

    </motion.div>
    
  )
}
