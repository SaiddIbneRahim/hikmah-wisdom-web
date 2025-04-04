
import React, { useEffect } from 'react';
import { BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-school-blue" />,
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed to develop critical thinking and problem-solving skills.',
  },
  {
    icon: <Users className="w-10 h-10 text-school-blue" />,
    title: 'Expert Faculty',
    description: 'Experienced and dedicated teachers committed to bringing out the best in every student.',
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-school-blue" />,
    title: 'Modern Facilities',
    description: 'Well-equipped classrooms, laboratories, and library to enhance the learning experience.',
  },
  {
    icon: <Trophy className="w-10 h-10 text-school-blue" />,
    title: 'Holistic Development',
    description: 'Focus on academics, sports, arts, and character building for well-rounded growth.',
  }
];

const FeatureSection = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Choose Al-Hikmah?
          </h2>
          <div className="w-20 h-1 bg-school-green mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We provide an environment where students can excel academically while developing
            into well-rounded individuals with strong moral values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
