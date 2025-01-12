import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const Properties = () => {
    const allProperties = [
      {
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Modern Villa",
        price: "$1,250,000",
        location: "Beverly Hills",
        beds: 4,
        baths: 3,
        sqft: 3200,
        featured: true
      },
      {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Luxury Penthouse",
        price: "$2,500,000",
        location: "Downtown LA",
        beds: 3,
        baths: 2.5,
        sqft: 2800,
        featured: false
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Beachfront House",
        price: "$3,750,000",
        location: "Malibu",
        beds: 5,
        baths: 4,
        sqft: 4500,
        featured: true
      },
      {
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Mountain View Estate",
        price: "$4,200,000",
        location: "Hollywood Hills",
        beds: 6,
        baths: 5,
        sqft: 5200,
        featured: false
      },
      {
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Modern Apartment",
        price: "$980,000",
        location: "Santa Monica",
        beds: 2,
        baths: 2,
        sqft: 1800,
        featured: true
      },
      {
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Coastal Villa",
        price: "$5,500,000",
        location: "Pacific Palisades",
        beds: 7,
        baths: 6,
        sqft: 6500,
        featured: false
      }
    ];

    const [visibleProperties, setVisibleProperties] = useState(3);

    const showMore = () => {
      setVisibleProperties(prev => Math.min(prev + 3, allProperties.length));
    };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Featured Properties</h2>
        <p className="section-subtitle text-center">
          Discover our handpicked selection of premium properties
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProperties.slice(0, visibleProperties).map((property, index) => (
            <div key={index} className="card property-card group">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  {property.featured && (
                    <span className="absolute top-4 left-4 bg-blue-100 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <span className="text-blue-600 font-bold text-xl">{property.price}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProperties < allProperties.length && (
          <div className="text-center mt-12">
            <button onClick={showMore} className="btn-primary">
              Show More Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;