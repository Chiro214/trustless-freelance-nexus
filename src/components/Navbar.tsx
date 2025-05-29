
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';
import WalletConnect from './WalletConnect';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary py-4 px-6 shadow-md fixed w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-sm">DF</span>
              </div>
              <span className="text-accent-light">De</span>Freelance
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-white hover:text-accent-light transition-colors">Jobs</Link>
            <Link to="/post-job" className="text-white hover:text-accent-light transition-colors">Post a Job</Link>
            <Link to="/how-it-works" className="text-white hover:text-accent-light transition-colors">How it Works</Link>
            <Link to="/about" className="text-white hover:text-accent-light transition-colors">About</Link>
            <WalletConnect
              variant="outline" 
              className="bg-transparent border border-accent-light text-accent-light hover:bg-accent-light hover:text-primary"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-secondary p-4 rounded-md animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/jobs" 
                className="text-white hover:text-accent-light transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                to="/post-job" 
                className="text-white hover:text-accent-light transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Post a Job
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-white hover:text-accent-light transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-accent-light transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <WalletConnect
                variant="outline" 
                className="bg-transparent border border-accent-light text-accent-light hover:bg-accent-light hover:text-primary w-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
