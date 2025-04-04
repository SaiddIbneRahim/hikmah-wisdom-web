
import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { SchoolButton } from '../ui/school-button';

const news = [
  {
    title: 'Annual Science Fair 2025',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    excerpt: 'Students will showcase innovative projects at our upcoming Science Fair. Parents and community members are welcome to attend.',
    link: '/news/science-fair-2025'
  },
  {
    title: 'New Sports Complex Opening',
    date: 'April 30, 2025',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    excerpt: 'We are excited to announce the opening of our new state-of-the-art sports complex, featuring indoor and outdoor facilities.',
    link: '/news/sports-complex'
  },
  {
    title: 'Parent-Teacher Meeting',
    date: 'April 10, 2025',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    excerpt: 'The quarterly Parent-Teacher Meeting will be held to discuss student progress and address any questions or concerns.',
    link: '/news/parent-teacher-meeting'
  }
];

const NewsSection = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Latest News & Announcements
          </h2>
          <div className="w-20 h-1 bg-school-blue mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Stay updated with the latest events and announcements from Al-Hikmah Senior Secondary School.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all animate-on-scroll"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <SchoolButton to={item.link} variant="outline" className="text-school-blue hover:bg-school-blue hover:text-white border-school-blue" withArrow>
                  Read More
                </SchoolButton>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll" style={{animationDelay: '0.5s'}}>
          <SchoolButton to="/news" className="bg-school-blue hover:bg-school-blue/90" withArrow>
            View All News
          </SchoolButton>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
