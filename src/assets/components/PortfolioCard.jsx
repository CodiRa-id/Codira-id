import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

// Shine Effect Component
const ShineEffect = () => (
  <div className="shine-container">
    <div className="shine-effect"></div>
  </div>
);

const PortfolioCard = ({ item, techIcons = {} }) => {
  // Destructure item props
  const { title, description, image, tags = [], demoUrl, codeUrl } = item || {};
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const startShine = () => {
      setIsShining(true);
      
      // Automatically hide the shine after animation completes (1s)
      const timer = setTimeout(() => {
        setIsShining(false);
        
        // Schedule next shine after a random delay (2-4 seconds)
        const nextShineDelay = 4000 + Math.random() * 4000;
        const nextTimer = setTimeout(startShine, nextShineDelay);
        
        return () => clearTimeout(nextTimer);
      }, 1000);
      
      return () => clearTimeout(timer);
    };
    
    // Initial delay before first shine (1-2 seconds)
    const initialDelay = 1000 + Math.random() * 1000;
    const initialTimer = setTimeout(startShine, initialDelay);
    
    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
      {isShining && <ShineEffect />}
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <img 
          src={image} 
          alt={title || 'Portfolio Image'} 
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title || 'Project Title'}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description || 'Project description goes here'}
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {tags && tags.length > 0 ? (
            tags.map((tag, i) => (
              <div 
                key={i} 
                className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-accent/10 hover:text-accent dark:hover:text-accent transition-colors"
                title={tag}
              >
                {techIcons[tag] || <FiCode className="w-4 h-4" />}
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">No tags available</div>
          )}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex gap-3">
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {codeUrl && codeUrl !== '#' && (
              <a 
                href={codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <FiGithub className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
