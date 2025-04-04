
import React, { useState, useEffect } from 'react';
import { SchoolButton } from '../ui/school-button';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    heading: 'Shaping Minds, Building Futures',
    text: 'Welcome to Al-Hikmah Senior Secondary School, where academic excellence meets character development.'
  },
  {
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    heading: 'Discover Your Potential',
    text: 'Our dedicated teachers and modern facilities provide the perfect environment for students to excel.'
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    heading: 'Excellence in Education',
    text: 'We combine academic rigor with holistic development to nurture well-rounded individuals.'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="container mx-auto h-full flex items-center relative z-20 px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                {slide.heading}
              </h1>
              <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
                {slide.text}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <SchoolButton to="/about" className="bg-school-green hover:bg-school-green-light text-white" withArrow>
                  Learn More
                </SchoolButton>
                <SchoolButton to="/admissions" className="bg-white text-school-blue hover:bg-gray-100" withArrow>
                  Apply Now
                </SchoolButton>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-30">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
