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
      className="w-full px-[12%] py-12 md:py-20 scroll-mt-20"
      aria-labelledby="education-heading"
    >
      <motion.h2
        id="education-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-4xl md:text-5xl font-Ovo mb-8 md:mb-10"
      >
        Education
      </motion.h2>

      {/* Note: items-center on small screens, lg:items-start so text doesn't stretch to match image height */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-12"
      >
        {/* Image (right on large screens) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03, boxShadow: hoverShadow }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 rounded-3xl overflow-hidden flex-shrink-0"
          style={{ height: 'auto' }}
        >
          {/* keep a fixed visual height on large screens, but allow the image to size naturally on small screens */}
          <div className="w-full h-auto lg:h-[420px]">
            <Image
              src={assets.school}
              alt="Hong Kong Metropolitan University"
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Text content (left on large screens) — NOT forced to match image height */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.02, boxShadow: hoverShadow }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`w-full lg:w-1/2 rounded-3xl overflow-hidden cursor-pointer ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
          } shadow-lg`}
        >
          {/* reduced padding so card height fits content naturally */}
          <div className="p-5 md:p-7 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-Ovo mb-2">
              Hong Kong Metropolitan University
            </h3>

            <p className="text-base md:text-lg font-medium mb-3">
              Bachelor of Science in Computer Science — First Class Honours
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                Graduated 2025
              </span>

              <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                cGPA: 3.63
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
