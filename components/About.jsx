// components/About.jsx
"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I started my coding journey with a passion for creating things that could be shared on the internet. Today, I have the privilege of building software for clients. 
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, I focus on creating accessible and inclusive digital products and experiences for a wide range of clients. I am constantly learning and exploring new technologies to stay current.  
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I am not in front of my computer, I am often hiking, hanging out with friends, or exploring beautiful landscapes.
            </p>
            
            {/* Professional Strengths */}
            <div className="my-8">
              <h3 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">Professional Strengths</h3>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Card 1: Problem Solving */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Junior Developer</h4>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">Junior Developer with full-cycle development experience, from client requirements to delivery. Strong communicator and team player, seeking a structured dev team to grow and focus on software development.</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Strength</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
          
          {/* Right side - Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">Full Stack Web Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400">BIZPOTENTIAL • Present</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Developing web applications using PHP, CodeIgniter, MySQL, Oracle, JavaScript, jQuery, and Bootstrap.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">BURIRAM RAJABHAT UNIVERSITY</h4>
                  <p className="text-blue-600 dark:text-blue-400">Bachelor of Science Program in Computer Science </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">2015 - 2018</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">TRAINING SOFTWARE TESTER</h4>
                  <p className="text-blue-600 dark:text-blue-400">By Software testing by P’Beam</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}