
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Al-Hikmah has provided my child with not just academic knowledge but also valuable life lessons. The teachers are dedicated and the school environment is nurturing.",
    author: "Mrs. Fatima Ahmed",
    role: "Parent"
  },
  {
    quote: "The quality of education at Al-Hikmah is exceptional. My son has grown tremendously in his academic abilities and confidence since joining the school.",
    author: "Mr. Ibrahim Mustafa",
    role: "Parent"
  },
  {
    quote: "As a former student, I can attest to the excellent foundation Al-Hikmah provided me. The values and education I received here have shaped my success today.",
    author: "Zainab Yusuf",
    role: "Alumnus"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-school-blue text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Say About Us
          </h2>
          <div className="w-20 h-1 bg-school-green-light mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative animate-on-scroll" style={{animationDelay: '0.2s'}}>
          <div className="testimonial-slider overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="flex flex-col items-center text-center">
                    <Quote size={48} className="mb-6 text-school-green-light opacity-50" />
                    <p className="text-xl md:text-2xl italic mb-8">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                      <p className="text-school-blue-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white/10 hover:bg-white/20 p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white/10 hover:bg-white/20 p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-school-green-light w-8' : 'bg-white/40'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
