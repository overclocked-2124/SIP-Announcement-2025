'use client';

import React from 'react';
import MatrixCanvas from './MatrixCanvas';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden bg-background">
      <MatrixCanvas />
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-800">
        Student Induction
          <span className="block mt-2 md:mt-4 text-primary">2025</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600">
          Welcome, parents and students. Find all the latest circulars, venue details, and important information regarding the Student Induction Programme right here.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="large" 
            onClick={() => document.getElementById('announcements')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Announcements
          </Button>
          <Button 
            size="large" 
            variant="secondary"
            onClick={() => {}}
          >
            SIP Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
