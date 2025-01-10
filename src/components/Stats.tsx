import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, CheckCircle, Construction } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, duration, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span>{count}+</span>;
};

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      value: 500,
      label: 'Happy Customers',
      duration: 2000
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      value: 750,
      label: 'Completed Projects',
      duration: 2000
    },
    {
      icon: <Construction className="h-8 w-8 text-blue-600" />,
      value: 150,
      label: 'Ongoing Projects',
      duration: 2000
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card p-8 text-center group hover:bg-blue-600 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-blue-100 rounded-full group-hover:bg-white/10">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2 group-hover:text-white">
                <Counter 
                  end={stat.value} 
                  duration={stat.duration} 
                  isVisible={inView} 
                />
              </div>
              <div className="text-gray-600 font-medium group-hover:text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;