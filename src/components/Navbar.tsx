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
    if (!account) {
      navigate('/post-job');
    } else {
      navigate('/post-job');
    }
    setIsOpen(false);
  };

  // Check if we're on the home page to adjust navbar styling
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo size="md" animated={false} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent transition-all duration-300">
              DeFreelance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative group ${
                  location.pathname === item.path 
                    ? 'text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect 
              variant="outline" 
              className="border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/25" 
            />
            <Button 
              onClick={handlePostJob}
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Post a Job</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-accent/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-xl mt-4 border border-purple-100 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg mx-2 ${
                  location.pathname === item.path 
                    ? 'text-accent bg-accent/10' 
                    : 'text-gray-700 hover:text-accent hover:bg-accent/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 py-2 space-y-3">
              <WalletConnect className="w-full" />
              <Button 
                onClick={handlePostJob}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent font-semibold"
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