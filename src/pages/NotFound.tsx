
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SchoolButton } from '../components/ui/school-button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-7xl font-bold mb-4 text-school-blue">404</h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <SchoolButton to="/" className="bg-school-blue hover:bg-school-blue/90 text-white" withArrow>
            Return to Homepage
          </SchoolButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
