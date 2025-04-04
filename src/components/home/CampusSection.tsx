
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const facilities = [
  {
    title: 'Science Lab',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '/facilities#science-lab'
  },
  {
    title: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '/facilities#library'
  },
  {
    title: 'Sports Complex',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '/facilities#sports'
  },
  {
    title: 'Computer Lab',
    image: 'https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '/facilities#computer-lab'
  }
];

const CampusSection = () => {
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
    <section className="py-20 bg-school-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Explore Our Campus
          </h2>
          <div className="w-20 h-1 bg-school-green mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our modern facilities create an ideal environment for learning, growth, and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Link 
              to={facility.link} 
              key={index}
              className="group campus-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all animate-on-scroll bg-white"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{facility.title}</h3>
                  <ArrowRight size={18} className="text-school-green group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll" style={{animationDelay: '0.6s'}}>
          <Link to="/facilities" className="inline-flex items-center text-school-blue hover:text-school-green font-medium">
            <span>View All Facilities</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
