import React from 'react'
import { motion } from 'motion/react'

export default function Achievements_Awards({ isDarkMode = false }) {
  const hoverShadow = isDarkMode ? '4px 4px 0 #fff' : '4px 4px 0 #000'

  const achievements = [
    { title: 'Council Medal Award', amount: '', icon: '🏅' },
    { title: 'Outstanding Performance Scholarship 2024', amount: '$40,000', icon: '🎓' },
    { title: 'Outstanding Performance Scholarship 2025', amount: '$40,000', icon: '🎓' },
    { title: 'Outstanding Student Scholarship', amount: '$10,000', icon: '🎓' },
    { title: 'Reaching Out Award', amount: '$10,000', icon: '🌏' },
    { title: 'Dean’s List: Autumn Term 2022', amount: '', icon: '📜' },
    { title: 'Dean’s List: Spring Term 2022', amount: '', icon: '📜' },
    { title: 'Dean’s List: Autumn Term 2023', amount: '', icon: '📜' },
    { title: 'Dean’s List: Spring Term 2023', amount: '', icon: '📜' },
    { title: 'Dean’s List: Autumn Term 2024', amount: '', icon: '📜' },
    { title: 'Dean’s List: Spring Term 2024', amount: '', icon: '📜' },
    { title: 'Dean’s List: Spring Term 2025', amount: '', icon: '📜' },
  ]

  return (
    <motion.section
      id="achievements_awards"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
      aria-labelledby="achievements-heading"
    >
      <motion.h2
        id="achievements-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10 dark:text-white"
      >
        Achievements & Awards
      </motion.h2>

      {/* Awards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: hoverShadow }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={`rounded-2xl p-5 cursor-pointer overflow-hidden min-h-[80px] ${
              isDarkMode ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-black shadow-md'
            }`}
          >
            {/* Single-row layout: icon | title (flex-1) | amount */}
            <div className="flex items-center gap-4 h-full">
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl text-xl shrink-0 ${
                  isDarkMode ? 'bg-white/10' : 'bg-black/5'
                }`}
                aria-hidden
              >
                {a.icon}
              </div>

              {/* Title (flex grows) */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{a.title}</h3>
              </div>

              {/* Amount (if any) */}
              {a.amount && (
                <div className="flex-shrink-0 ml-2">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400 whitespace-nowrap">
                    {a.amount}
                  </span>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
