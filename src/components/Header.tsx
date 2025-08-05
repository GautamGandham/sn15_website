import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import sn15Logo from '../assets/sn15-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHidden(true); // scroll down, hide
      } else {
        setIsHidden(false); // scroll up, show
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Demo', href: '/demo' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-2 ${
          isScrolled 
            ? 'bg-slate-700/95 backdrop-blur-md shadow-lg border-b border-slate-600' 
            : 'bg-slate-700/90 backdrop-blur-sm shadow-md'
        } ${isHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0 pointer-events-auto'} transform`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={sn15Logo} 
                  alt="SN15 AI & Robotics Logo" 
                  className="h-10 w-10 object-contain" 
                />
                <span className="text-base font-semibold text-white leading-tight">
                  SN Fifteen AI & Robotics
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 hover:text-blue-300 relative ${
                    location.pathname === item.href
                      ? 'text-blue-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/book-demo"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-200 hover:text-white transition-colors duration-200 p-1"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-slate-600">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 py-1 ${
                      location.pathname === item.href
                        ? 'text-blue-300'
                        : 'text-slate-200 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/book-demo"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Demo
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;