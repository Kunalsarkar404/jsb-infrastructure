import React from 'react';
import { ArrowRight, Search, MapPin } from 'lucide-react';
import video1 from '../videos/video1.mp4';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src={video1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Find Your <span className="text-blue-400">Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Expert guidance and personalized service to help you discover the perfect property
            </p>
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by property type, location..."
                    className="input-field pl-10"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="input-field pl-10"
                  />
                </div>
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <span>Search Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;