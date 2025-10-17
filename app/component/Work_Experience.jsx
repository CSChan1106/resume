import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function Work_Experience({ isDarkMode = false }) {
  const hoverShadow = isDarkMode ? '4px 4px 0 #fff' : '4px 4px 0 #000'

  const experiences = [
    {
      company: 'Innocorn Technology',
      role: 'Software Engineer Intern',
      period: '1/7/2024 - 29/8/2024',
      description: [
        'Shopify web extension development.',
        'QA testing.'
      ]

    },
    {
      company: 'Manpower',
      role: 'Part-Time Public Library Computer Technician',
      period: '08/7/2023 - 28/6/2024',
      description: [
        'Customer Service',
        'Computer troubleshooting',
      ]

    },
  ]

  return (
    <motion.section
      id="work_experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
      aria-labelledby="work-heading"
    >
      <motion.h2
        id="work-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10 dark:text-white"
      >
        Work Experience
      </motion.h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, boxShadow: hoverShadow }}
            transition={{ duration: 0.45, delay: idx * 0.12 }}
            className={`flex flex-col lg:flex-row items-start gap-6 rounded-3xl p-6 ${
              isDarkMode ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-black shadow-md'
            } cursor-pointer overflow-hidden`}
          >
            {/* Timeline marker (left on large screens) */}
            <div className="flex-shrink-0 flex items-center lg:flex-col lg:items-center gap-4">
              <div className="hidden lg:flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-300 block" />
                <div className="w-[2px] h-full bg-gray-200 dark:bg-gray-700 mt-2" />
              </div>

              {/* compact date/role chip for small screens */}
              <div className="lg:hidden text-sm text-gray-500 dark:text-gray-400">
                <div className="font-semibold">{exp.role}</div>
                <div className="text-xs mt-1">{exp.period}</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 hidden lg:block">
                    {exp.role} · {exp.period}
                  </p>
                </div>

              </div>

              {/* bullets */}
              <ul className="mt-4 ml-4 list-disc text-sm space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

    


    </motion.section>
  )
}
