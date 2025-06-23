// components/Home.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { fadeIn, slideIn, staggerItems } from '../utils/motion';
import { motion, useSpring, useMotionValue } from 'framer-motion';


export default function Home() {
  // Typewriter effect for real name
  const realName = "MR. THIRASAK SIMTONG";
  const [typedName, setTypedName] = useState("");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (!isClient) return;
    let i = 0;
    const timer = setInterval(() => {
      setTypedName(realName.slice(0, i + 1));
      i++;
      if (i === realName.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, [isClient]);
  // Draggable icon with spring physics
  const dragConstraints = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 10, stiffness: 100, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
    setIsHovered(false);
  };
  
  // Function to handle drag end with velocity for flinging effect
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    
    // Apply the velocity from the drag gesture for a flinging effect
    const velocityFactor = 5; // Amplify the velocity
    springX.set(x.get() + info.velocity.x * velocityFactor);
    springY.set(y.get() + info.velocity.y * velocityFactor);
  };
  
  // Functions to handle hover state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // Update constraints on mount and window resize
  useEffect(() => {
    const updateConstraints = () => {
      if (dragConstraints.current) {
        // This will be updated when the component mounts
      }
    };
    
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);
  
  // Reorganized tech stacks with frontend and backend separation
  const frontendTech = [
    { name: 'HTML', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'CSS', color: 'bg-blue-300 text-blue-900 dark:bg-blue-600/30 dark:text-blue-400 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'Bootstrap', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'JQuery/Ajax', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'Next.js', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'Vue.js (Nuxt)', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
  ];

  const backendTech = [
    { name: 'PHP (CodeIgniter)', color: 'bg-blue-300 text-blue-900 dark:bg-blue-600/30 dark:text-blue-400 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'Node.js (Fastify)', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
  ];
  
  const database = [
    { name: 'MySQL', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
    { name: 'Oracle', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:shadow-[0_2px_4px_rgb(255,255,255,0.4)]' },
  ];

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const frontendTechRef = useRef(null);
  const backendTechRef = useRef(null);
  const techBadgesRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const profileImageRef = useRef(null);
  const databaseRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) fadeIn(titleRef.current, 0, 0.5);
    if (descriptionRef.current) fadeIn(descriptionRef.current, 0.2, 0.5);
    if (frontendTechRef.current) slideIn(frontendTechRef.current, 'up', 0.4, 0.5);
    if (backendTechRef.current) slideIn(backendTechRef.current, 'up', 0.5, 0.5);
    if (ctaButtonsRef.current) slideIn(ctaButtonsRef.current, 'up', 0.6, 0.5);
    if (profileImageRef.current) fadeIn(profileImageRef.current, 0.3, 0.8);
    if (databaseRef.current) slideIn(databaseRef.current, 'up', 0.7, 0.5);

    if (techBadgesRef.current) {
      const badges = techBadgesRef.current.querySelectorAll('.tech-badge');
      if (badges.length) {
        staggerItems([...badges], (element, delay) => {
          fadeIn(element, 0.6 + delay, 0.3);
        }, 0.1);
      }
    }
  }, []);

  return (
    <section id="home" className="flex items-center justify-center py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Draggable Icon with Spring Physics */}
          <div ref={dragConstraints} className="fixed inset-0 pointer-events-none z-50">
            <motion.div
              style={{ x: springX, y: springY }}
              drag
              dragElastic={0.8}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: isDragging ? 1.2 : 1,
                rotate: isDragging ? [0, 15, -15, 10, -10, 0] : 0
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                scale: { type: "spring", stiffness: 300 },
                rotate: { duration: 0.5, ease: "easeInOut" }
              }}
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Message that appears on hover */}
              <motion.div 
                className="absolute -top-12 whitespace-nowrap bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
              >
                
              </motion.div>
              
            </motion.div>
          </div>
          
          {/* Left Column - Profile Info */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                duration: 0.8 
              }}
              className="relative mx-auto lg:mx-0 mb-8 w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-xl"
              ref={profileImageRef}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full h-full relative"
              >
                <motion.img
                  src="/Cloudflare-Logo.wine.png"
                  alt="Goh Dik"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/30 dark:from-blue-900/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              ref={titleRef}
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Goh Dik</span>
            </motion.h1>

            {/* Typewriter Effect for Real Name */}
            {isClient && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-3xl text-gray-600 dark:text-gray-300 font-semibold mt-0 drop-shadow-lg"
              >
                {typedName}
                <span className="animate-pulse"></span>
              </motion.p>
            )}

          </div>
          
          
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-medium text-blue-600 dark:text-blue-400">
                Full Stack Developer
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-1">
                <span className="text-gray-900 dark:text-white">Junior </span>
                <span className="text-blue-600 dark:text-blue-400">Developer</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              A passionate full-stack developer crafting beautiful and functional web experiences. I specialize in building modern, responsive applications with cutting-edge technologies.
            </motion.p>
            
            {/* Frontend Technologies */}
            <motion.div 
              ref={frontendTechRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-2">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">Frontend Tech</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {frontendTech.map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`${tech.color} px-3 py-1.5 rounded-full text-sm font-medium shadow-sm`}>
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Backend Technologies */}
            <motion.div 
              ref={backendTechRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="pt-2">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">Backend Tech</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {backendTech.map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65 + index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`${tech.color} px-3 py-1.5 rounded-full text-sm font-medium shadow-sm`}>
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Database */}
            <motion.div 
              ref={databaseRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">Database</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {database.map((db, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`${db.color} px-3 py-1.5 rounded-full text-sm font-medium shadow-sm`}>
                    {db.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Call to Action Buttons */}
            <motion.div 
              ref={ctaButtonsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="/CV_Resume_v1.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-300/30 dark:hover:shadow-blue-600/20 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}