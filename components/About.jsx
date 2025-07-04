// components/About.jsx
"use client";

import { motion } from 'framer-motion';

export default function About() {
  
  const interests = [ 
    {
      name: "Hiking",
      icon: "🌄",
    },
    {
      name: "Singing",
      icon: "🎤",
    },
    {
      name: "cook",
      icon: "🥘",
    },
  ];

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
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6">
            {/* Professional Strengths */}
            <div className="my-10">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                {/* Card 1: Problem Solving */}
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  </div>
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-md">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Strength</h4>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">Junior Developer with full-cycle development experience, from client requirements to delivery. Strong communicator and team player, seeking a structured dev team to grow and focus on software development.</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">  {/* Content above the glow */}
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-blue-400 pl-4 italic">
                I’ve recently taken my skills to the next level by focusing on building visually appealing and modern websites. I’ve been actively working with up-to-date technologies such as <span className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-blue-800 dark:text-blue-300 font-medium shadow-sm hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 transition-shadow">Tailwind CSS</span>, <span className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-blue-800 dark:text-blue-300 font-medium shadow-sm hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 transition-shadow">Next.js, Nuxt.js</span> for the frontend, along with <span className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-blue-800 dark:text-blue-300 font-medium shadow-sm hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 transition-shadow">Node.js + Fastify </span> for backend development. This journey reflects my passion for both design and performance in web development.  
                </p>
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg relative overflow-hidden">
              {/* Glow effects */}
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-blue-300/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-300/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">  {/* Content above the glow */}
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Hobbies & Interests
                </h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {interests?.map((interest, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent dark:from-blue-500/10 dark:to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-3xl mb-2 relative z-10 drop-shadow-sm">{interest.icon}</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200 relative z-10">{interest.name}</span>
                    </div>
                  ))}
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
                  <h4 className="text-lg font-bold">Junior Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400">BIZPOTENTIAL • Present</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Developing and maintaining web applications using PHP (CodeIgniter), MySQL, Oracle, JavaScript, jQuery/ajax, and Bootstrap. Key responsibilities include:</p>
                  <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 ml-2">
                    <li>Developed ERP modules based on organizational needs </li>
                    <li>Analyzed user requirements and implemented system enhancements based on feedback</li>
                    <li>Provided technical support, resolved issues, and offered system usage guidance</li>
                    <li>Participated in stakeholder meetings for requirement gathering and continuous improvement</li>
                    <li>Developed and maintained internal information systems to ensure stability and efficiency</li>
                    <li>Worked on systems such as:
                      <ul className="ml-6 mt-1 list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>Financial Information System for Cooperatives</li>
                        <li>Cooperative Membership & Shareholding System</li>
                        <li>Farmer Database Management System</li>
                      </ul>
                    </li>
                  </ul>
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