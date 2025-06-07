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
              I started my coding journey with a passion for creating things that live on the internet. Fast-forward to today, and I've had the privilege of building software for various clients and companies.  
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I'm constantly learning and exploring new technologies to stay at the cutting edge.  
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not at the computer, I'm usually rock climbing, hanging out with friends, or exploring beautiful landscapes.
            </p>
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Frontend Development</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Backend Development</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">UI/UX Design</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">DevOps</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
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
                  <h4 className="text-lg font-bold">Senior Frontend Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400">Tech Company • 2022 - Present</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Led the development of modern web applications using React, Next.js, and TypeScript.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">Full Stack Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400">Digital Agency • 2019 - 2022</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Developed and maintained various client projects using Node.js, Express, and MongoDB.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">Master's in Computer Science</h4>
                  <p className="text-blue-600 dark:text-blue-400">University Name • 2017 - 2019</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Specialized in Web Technologies and Cloud Computing</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-bold">Bachelor's in Software Engineering</h4>
                  <p className="text-blue-600 dark:text-blue-400">University Name • 2013 - 2017</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Graduated with honors, focused on full-stack development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}