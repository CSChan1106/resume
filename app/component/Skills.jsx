import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Novice' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 'Intermediate' },
      { name: 'Next.js', level: 'Novice' },
      { name: 'Flask', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'mySQL', level: 'Novice' },
      { name: 'OracleDB', level: 'Intermediate' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'ML', level: 'Novice' },
    ],
  },
]

export default function Skills({ isDarkMode = false }) {
  const hoverShadow = isDarkMode ? '4px 4px 0 #fff' : '4px 4px 0 #000'

  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Skills
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: hoverShadow }}
            className={`rounded-3xl p-6 shadow-lg duration-300 cursor-pointer ${
              isDarkMode
                ? 'bg-gray-900 text-white hover:shadow-[4px_4px_0_#fff]'
                : 'bg-white text-black hover:shadow-[4px_4px_0_#000]'
            }`}
          >
            <h3 className="text-2xl font-semibold font-Ovo mb-4 text-center">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 text-sm rounded-full border ${
                    isDarkMode
                      ? 'border-gray-400 bg-gray-800 text-white'
                      : 'border-gray-300 bg-gray-100 text-gray-900'
                  }`}
                >
                  {skill.name} — <span className="italic text-gray-500">{skill.level}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


    </motion.div>
  )
}
