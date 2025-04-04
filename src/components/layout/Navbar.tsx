
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'School History', path: '/about#history' },
        { name: 'Mission & Vision', path: '/about#mission' },
        { name: 'Our Values', path: '/about#values' }
      ] 
    },
    {
      name: 'Academics',
      path: '/academics',
      dropdown: [
        { name: 'Curriculum', path: '/academics#curriculum' },
        { name: 'Faculty', path: '/academics#faculty' }
      ]
    },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarClasses = cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  );

  return (
    <>
      <div className="bg-school-blue text-white py-2 hidden md:block">
        <div className="container mx-auto flex justify-end items-center space-x-6">
          <a href="tel:+1234567890" className="flex items-center space-x-1 text-sm hover:text-school-blue-light">
            <Phone size={14} />
            <span>(123) 456-7890</span>
          </a>
          <a href="mailto:info@alhikmahschool.com" className="flex items-center space-x-1 text-sm hover:text-school-blue-light">
            <Mail size={14} />
            <span>info@alhikmahschool.com</span>
          </a>
          <Button variant="outline" size="sm" asChild className="bg-white text-school-blue hover:bg-opacity-90">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>
      </div>

      <nav className={navbarClasses}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-3xl text-school-blue">
              Al-<span className="text-school-green">Hikmah</span>
            </div>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-sm font-medium">Senior Secondary</span>
              <span className="text-xs">School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    className="flex items-center space-x-1 text-gray-700 hover:text-school-blue font-medium"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link to={link.path} className="text-gray-700 hover:text-school-blue font-medium">
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-blue hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-50 animate-fade-in">
            <div className="container mx-auto space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="py-1">
                  {link.dropdown ? (
                    <div>
                      <button 
                        className="w-full flex items-center justify-between py-2 px-4 hover:bg-gray-100 text-left"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={16} className={activeDropdown === link.name ? "rotate-180 transition-all" : "transition-all"} />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="pl-6 py-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link 
                              key={item.name}
                              to={item.path}
                              className="block py-2 px-4 hover:bg-gray-100 text-sm"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="block py-2 px-4 hover:bg-gray-100"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2 px-4">
                <Button asChild size="sm" className="w-full">
                  <Link to="/admissions" onClick={closeMenu}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="pt-16 md:pt-24"></div>
    </>
  );
};

export default Navbar;
