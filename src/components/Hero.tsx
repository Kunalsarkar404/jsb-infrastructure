import React from 'react';
import { ArrowRight } from 'lucide-react';
import video1 from '../videos/video1.mp4';

const Hero = () => {
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div id="home" className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src={video1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#fed019]/30" />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your <span className="text-blue-400">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Expert guidance and personalized service to help you discover the perfect property
          </p>
          <button
            onClick={scrollToProperties}
            className="btn-primary flex items-center space-x-2 text-lg group"
          >
            <span>View Properties</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;