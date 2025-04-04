
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-school-blue text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="font-bold text-3xl text-white">
                Al-<span className="text-school-green-light">Hikmah</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 text-sm">
              Building characters, nurturing minds, and preparing students for a future of excellence and contribution to society.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-school-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-school-green-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-school-green-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-school-green-light transition-colors inline-flex items-center">
                  <span>About Us</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-school-green-light transition-colors inline-flex items-center">
                  <span>Academics</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-school-green-light transition-colors inline-flex items-center">
                  <span>Facilities</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-school-green-light transition-colors inline-flex items-center">
                  <span>Admissions</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-school-green-light transition-colors inline-flex items-center">
                  <span>Gallery</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Education Street, Learning City, ST 12345</span>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-school-green-light">(123) 456-7890</a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@alhikmahschool.com" className="hover:text-school-green-light">info@alhikmahschool.com</a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to stay updated with school news and events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-3 py-2 text-black rounded-l-md w-full focus:outline-none"
              />
              <Button className="bg-school-green hover:bg-school-green-light rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400 mb-3 md:mb-0">
            &copy; {currentYear} Al-Hikmah Senior Secondary School. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-school-green-light transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-school-green-light transition-colors">Terms of Use</Link>
            <Link to="/contact" className="hover:text-school-green-light transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
