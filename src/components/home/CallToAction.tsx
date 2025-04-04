
import React from 'react';
import { SchoolButton } from '../ui/school-button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-school-blue text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-school-green/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-school-blue-light/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our School Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards a bright future for your child. Apply for admission or contact us for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SchoolButton to="/admissions" className="bg-white text-school-blue hover:bg-gray-100" withArrow>
              Apply for Admission
            </SchoolButton>
            <SchoolButton to="/contact" variant="outline" className="border-white text-white hover:bg-white/10" withArrow>
              Contact Us
            </SchoolButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
