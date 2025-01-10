import React from 'react';
import { Home, Search, Key, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: 'Property Listings',
      description: 'Access to exclusive properties and comprehensive market analysis'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Property Search',
      description: 'Personalized property search tailored to your specific needs'
    },
    {
      icon: <Key className="h-8 w-8 text-blue-600" />,
      title: 'Property Management',
      description: 'Full-service property management solutions for investors'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Consultation',
      description: 'Professional guidance throughout your real estate journey'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate services tailored to meet your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;