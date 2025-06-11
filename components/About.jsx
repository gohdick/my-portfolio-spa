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
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Frontend Development</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Backend Development</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">UI/UX Design</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Database</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
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