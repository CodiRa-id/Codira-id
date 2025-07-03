import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselControls = ({ onPrev, onNext, currentIndex, totalItems }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className={`p-3 rounded-full transition-all duration-300 ${
          currentIndex === 0
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-white bg-white/10 hover:bg-white/20'
        }`}
        aria-label="Previous project"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/30 w-2'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentIndex === totalItems - 1}
        className={`p-3 rounded-full transition-all duration-300 ${
          currentIndex === totalItems - 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-white bg-white/10 hover:bg-white/20'
        }`}
        aria-label="Next project"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CarouselControls;
