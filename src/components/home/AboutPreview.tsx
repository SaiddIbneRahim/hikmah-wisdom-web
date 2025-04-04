
import React, { useEffect, useRef } from 'react';
import { SchoolButton } from '../ui/school-button';

const AboutPreview = () => {
  const elementRef = useRef<HTMLDivElement>(null);

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
    <section className="py-20 bg-white" ref={elementRef}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Al-Hikmah School Building" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-school-blue rounded-lg p-6 shadow-xl max-w-xs hidden md:block animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <p className="text-white text-lg font-medium">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>
              <p className="text-school-blue-light text-sm mt-2">- William Butler Yeats</p>
            </div>
          </div>
          
          <div className="space-y-6 animate-on-scroll" style={{animationDelay: '0.3s'}}>
            <div className="inline-block bg-school-green/10 text-school-green px-4 py-2 rounded-full text-sm font-medium">
              About Our School
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              A Tradition of Excellence Since 1995
            </h2>
            <div className="w-20 h-1 bg-school-blue"></div>
            <p className="text-gray-600 leading-relaxed">
              Al-Hikmah Senior Secondary School was established with a vision to provide quality education that balances academic excellence with moral values. For over two decades, we have been committed to nurturing young minds and helping them reach their full potential.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our school offers a comprehensive curriculum designed to challenge students intellectually while developing their character and leadership skills. With dedicated teachers and modern facilities, we create an environment where students can thrive academically and personally.
            </p>
            <div className="pt-4">
              <SchoolButton to="/about" className="bg-school-blue hover:bg-school-blue/90" withArrow>
                Discover Our Story
              </SchoolButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
