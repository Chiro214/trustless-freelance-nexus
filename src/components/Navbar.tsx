
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import WalletConnect from "./WalletConnect";
import { useWallet } from "@/context/WalletContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { account } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handlePostJob = () => {
    if (!account) {
      // If wallet not connected, still allow navigation to post job page
      // The post job page can handle wallet connection requirement
      navigate('/post-job');
    } else {
      navigate('/post-job');
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-lg shadow-2xl border-b border-accent-light/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-light to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Wallet className="w-6 h-6 text-primary font-bold" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-accent-light to-yellow-400 bg-clip-text text-transparent">
              BlockLance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent-light relative group ${
                  location.pathname === item.path 
                    ? 'text-accent-light' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-light to-yellow-400 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect variant="outline" className="border-accent-light/30 text-accent-light hover:bg-accent-light hover:text-primary transition-all duration-300" />
            <Button 
              onClick={handlePostJob}
              className="bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Post a Job
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent-light transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-secondary/95 backdrop-blur-lg rounded-xl mt-4 border border-accent-light/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'text-accent-light bg-accent-light/10' 
                    : 'text-gray-300 hover:text-accent-light hover:bg-accent-light/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 py-2 space-y-3">
              <WalletConnect className="w-full" />
              <Button 
                onClick={handlePostJob}
                className="w-full bg-gradient-to-r from-accent-light to-yellow-400 text-primary hover:from-accent hover:to-orange-500 font-semibold"
              >
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
