import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WalletConnect from "./WalletConnect";
import { useWallet } from "@/context/WalletContext";
import Logo from "./Logo";

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
    navigate('/post-job');
    setIsOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || !isHomePage
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-white/10' 
        : 'bg-white/60 dark:bg-black/60 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="group">
            <Logo 
              size="md" 
              animated={false} 
              className="group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 relative group ${
                  location.pathname === item.path 
                    ? 'text-purple-600 dark:text-purple-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect 
              variant="outline" 
              className="border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25" 
            />
            <Button 
              onClick={handlePostJob}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Post a Job</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/20"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-xl mt-4 border border-gray-200/20 dark:border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg mx-2 ${
                  location.pathname === item.path 
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 py-2 space-y-3">
              <WalletConnect className="w-full" />
              <Button 
                onClick={handlePostJob}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 font-semibold"
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