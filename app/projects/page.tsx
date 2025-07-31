'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const projects = [
  {
    title: 'Project One',
    image: '/images/project1.jpg',
    description: 'Description for project one.',
  },
  {
    title: 'Project Two',
    image: '/images/project2.jpg',
    description: 'Description for project two.',
  },
  {
    title: 'Project Three',
    image: '/images/project3.jpg',
    description: 'Description for project three.',
  },
  {
    title: 'Project Four',
    image: '/images/project4.jpg',
    description: 'Description for project four.',
  },
  {
    title: 'Project Five',
    image: '/images/project5.jpg',
    description: 'Description for project five.',
  },
  {
    title: 'Project Six',
    image: '/images/project6.jpg',
    description: 'Description for project six.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group perspective"
          >
            <div className="relative w-full h-72 cursor-pointer transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white rounded-xl shadow-lg p-6 rotate-y-180">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
