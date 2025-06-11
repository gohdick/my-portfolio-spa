"use client";

import { motion } from 'framer-motion';
import { categories } from '../data/Toolsandskills';

// Category Box component
const CategoryBox = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br ${category.color} p-8 rounded-xl shadow-lg h-full
                 flex flex-col justify-center items-center text-center text-white
                 hover:shadow-2xl transition-all duration-300`}
      style={{
        boxShadow: `0 10px 30px -5px ${category.shadowColor}`,
      }}
    >
      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
      <p className="text-sm opacity-90 mb-3">{category.description}</p>
      {category.icons && (
        <div className="flex gap-2 mt-2">
          {category.icons.map((icon, i) => (
            <img 
              key={i} 
              src={icon} 
              className="w-8 h-8" 
              alt={category.iconAlts?.[i] || category.name} 
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default function Toolsandskills() {
  return (
    <section id="Tools" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the tools and skills I use to build my projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <CategoryBox key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
