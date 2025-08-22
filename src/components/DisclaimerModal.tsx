'use client';

import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface DisclaimerModalProps {
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative transform transition-all animate-slide-up border border-gray-200/80">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close disclaimer"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center mb-5">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Disclaimer</h2>
        </div>
        
        <p className="text-gray-600 mb-8 text-base leading-relaxed">
          This is a temporary website for the Student Induction Programme. For official information, please refer to your email and the primary RVCE website.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
           <a 
            href="https://rvce.edu.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Visit Official RVCE Website
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
