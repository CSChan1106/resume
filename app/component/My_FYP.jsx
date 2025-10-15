import React from 'react'
import { motion } from 'motion/react'

export default function My_FYP({ isDarkMode = false }) {
  const hoverShadow = isDarkMode ? '4px 4px 0 #fff' : '4px 4px 0 #000'
  const drivePreviewUrl =
    'https://drive.google.com/file/d/1dWnI1ht--TuJ2UAbLuOUQrsNei_lhTgx/preview'

  return (
    <motion.section
      id="my_fyp"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10 dark:text-white"
      >
        My Final Year Project
      </motion.h2>

      {/* Layout: Text left, Video right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
      >
        {/* Left: FYP Content */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: hoverShadow }}
          transition={{ duration: 0.4 }}
          className={`flex-1 rounded-3xl shadow-lg p-8 ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold font-Ovo mb-4">
            MindWave: A concept platform for Brain diseases detection with Deep Learning and AI Chat
          </h3>

          <p className="text-base leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
            MindWave is an EEG-based brain-health monitoring platform designed to aid detection 
            of neurological and cognitive disorders such as Alzheimer’s, Dementia, Parkinson’s, and 
            Anxiety Disorder. It integrates deep learning, AI assistance, and a web interface 
            to empower users in detecting brain diseases.
          </p>

          <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-1">
            <li>EEG-based system for detection of brain diseases.</li>
            <li>Utilize CNN-LSTM models to analyze EEG patterns with high accuracy.</li>
            <li>Provide interactive AI support and visual summaries for users.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Python',
              'TensorFlow',
              'Keras',
              'NumPy',
              'MNE',
              'Flask',
              'PostgreSQL',
              'OpenAI API',
            ].map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1 rounded-full border ${
                  isDarkMode
                    ? 'border-gray-600 bg-gray-800 text-gray-200'
                    : 'border-gray-200 bg-gray-100 text-gray-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href="https://github.com/CSChan1106/FYP"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border bg-black text-white dark:bg-transparent hover:opacity-90 transition-all"
          >
            View on GitHub
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14 3h7v7m0-7L10 14" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 13v8h8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right: Video (Google Drive preview) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 overflow-hidden lg:max-w-lg w-full"
        >
          <p
            className={`mb-3 text-sm font-medium ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Demo:
          </p>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={drivePreviewUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-3xl"
              title="MindWave Project Video"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
