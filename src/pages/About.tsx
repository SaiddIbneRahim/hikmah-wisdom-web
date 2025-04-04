
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SchoolButton } from '../components/ui/school-button';
import { Helmet } from 'react-helmet';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    <>
      <Helmet>
        <title>About Us | Al-Hikmah Senior Secondary School</title>
        <meta name="description" content="Learn about Al-Hikmah Senior Secondary School's history, mission, vision, and values. Discover what makes our educational approach unique." />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-school-blue text-white py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our School</h1>
              <p className="text-xl text-blue-100">
                Since 1995, Al-Hikmah Senior Secondary School has been dedicated to providing quality education
                that nurtures intellectual growth and character development.
              </p>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section id="history" className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="School History" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6 animate-on-scroll" style={{animationDelay: '0.2s'}}>
                <div className="inline-block bg-school-blue/10 text-school-blue px-4 py-2 rounded-full text-sm font-medium">
                  Our History
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  A Journey of Excellence
                </h2>
                <div className="w-20 h-1 bg-school-green"></div>
                <p className="text-gray-600 leading-relaxed">
                  Al-Hikmah Senior Secondary School was founded in 1995 by a group of visionary educators who believed in creating an institution that would offer quality education while instilling strong moral values in students.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Starting with just three classrooms and a handful of dedicated teachers, the school has grown into one of the region's most respected educational institutions. Over the years, we have expanded our facilities, enhanced our curriculum, and consistently maintained high academic standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, Al-Hikmah stands as a testament to our founders' vision, with modern facilities, a comprehensive curriculum, and a strong alumni network that spans across various professional fields.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section id="mission" className="py-16 bg-school-gray">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-school-blue mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll" style={{animationDelay: '0.2s'}}>
                <div className="text-school-blue text-2xl font-bold mb-4">Our Mission</div>
                <p className="text-gray-600 mb-4">
                  To provide a nurturing educational environment that fosters academic excellence, character development, and a lifelong love for learning, enabling students to become responsible citizens who contribute positively to society.
                </p>
                <p className="text-gray-600">
                  We strive to balance rigorous academics with character education, preparing students not just for examinations but for the challenges of life beyond school walls.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll" style={{animationDelay: '0.4s'}}>
                <div className="text-school-green text-2xl font-bold mb-4">Our Vision</div>
                <p className="text-gray-600 mb-4">
                  To be recognized as a center of educational excellence that produces well-rounded individuals who are intellectually capable, morally upright, and prepared to meet the challenges of a rapidly changing global society.
                </p>
                <p className="text-gray-600">
                  We envision a learning community where innovation meets tradition, where students develop the skills and confidence to pursue their dreams while maintaining strong values.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section id="values" className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-school-green mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                These guiding principles shape our approach to education and our school community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Excellence',
                  description: 'We pursue excellence in all endeavors, encouraging students to strive for their personal best in academics, sports, and character.'
                },
                {
                  title: 'Integrity',
                  description: 'We promote honesty, transparency, and ethical behavior in all interactions within and beyond the school community.'
                },
                {
                  title: 'Respect',
                  description: 'We foster mutual respect among students, staff, and parents, appreciating the diversity of backgrounds and perspectives.'
                },
                {
                  title: 'Responsibility',
                  description: 'We develop a sense of personal and social responsibility, preparing students to be accountable for their actions and decisions.'
                },
                {
                  title: 'Innovation',
                  description: 'We encourage creative thinking and innovative approaches to learning and problem-solving.'
                },
                {
                  title: 'Community',
                  description: 'We build a supportive community where collaboration, teamwork, and mutual support are valued and practiced.'
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-school-gray p-6 rounded-lg hover:shadow-md transition-shadow animate-on-scroll"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-school-blue">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Principal's Message */}
        <section className="py-16 bg-school-blue text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Principal's Message
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  A Word From Our Principal
                </h2>
                <div className="w-20 h-1 bg-white"></div>
                <p className="leading-relaxed">
                  Welcome to Al-Hikmah Senior Secondary School, a place where we believe in nurturing not just academic excellence but the overall development of our students. Our goal is to create an environment where every child feels valued, challenged, and inspired.
                </p>
                <p className="leading-relaxed">
                  At Al-Hikmah, we understand that education is not just about textbooks and examinations. It's about preparing young minds for the future, equipping them with the knowledge, skills, and values they need to navigate an increasingly complex world.
                </p>
                <p className="leading-relaxed">
                  We invite you to join our community and experience the Al-Hikmah difference – where tradition meets innovation, where academic rigor meets character development, and where every student is encouraged to discover and fulfill their potential.
                </p>
                <div className="pt-4">
                  <p className="font-semibold text-xl">Prof. Abdullah Rahman</p>
                  <p className="text-blue-200">Principal, Al-Hikmah Senior Secondary School</p>
                </div>
              </div>
              
              <div className="animate-on-scroll" style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="School Principal" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-school-green rounded-lg p-6 shadow-xl max-w-xs hidden md:block">
                    <p className="text-white italic">
                      "Education is not the learning of facts, but the training of the mind to think."
                    </p>
                    <p className="text-white/70 text-sm mt-2">- Albert Einstein</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-school-gray">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-on-scroll">
              Join Our School Community
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              Discover the Al-Hikmah difference and be part of our journey toward educational excellence.
            </p>
            <div className="flex justify-center space-x-4 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <SchoolButton to="/admissions" className="bg-school-blue hover:bg-school-blue/90 text-white" withArrow>
                Apply for Admission
              </SchoolButton>
              <SchoolButton to="/contact" variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white" withArrow>
                Contact Us
              </SchoolButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
