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
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
      ${isScrolled || !isHomePage
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-purple-500/20' 
        : 'bg-white/60 dark:bg-black/60 backdrop-blur-md'
      }
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/5 before:to-blue-500/5 before:opacity-0 before:transition-opacity before:duration-500
      ${isScrolled ? 'before:opacity-100' : ''}
    `}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo with enhanced effects */}
          <Link to="/" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-110"></div>
            <div className="relative p-2 rounded-xl transition-all duration-500 group-hover:bg-white/10 dark:group-hover:bg-black/20">
              <Logo 
                size="md" 
                animated={false} 
                className="transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`
                  text-sm font-medium transition-all duration-500 relative group
                  hover:text-purple-600 dark:hover:text-purple-400
                  ${location.pathname === item.path 
                    ? 'text-purple-600 dark:text-purple-400' 
                    : 'text-gray-700 dark:text-gray-300'
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                
                {/* Animated underline */}
                <span className={`
                  absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 
                  transition-all duration-500 ease-out
                  ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect 
              variant="outline" 
              className="
                border-purple-300/50 dark:border-purple-600/50 
                text-purple-600 dark:text-purple-400 
                hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 
                transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25
                backdrop-blur-sm bg-white/10 dark:bg-black/10
                hover:scale-105 hover:border-purple-500
              " 
            />
            <Button 
              onClick={handlePostJob}
              className="
                bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                hover:from-purple-700 hover:to-blue-700 
                font-semibold px-6 py-2 rounded-xl shadow-lg 
                hover:shadow-xl hover:shadow-purple-500/25 
                transform hover:scale-105 transition-all duration-500 
                relative overflow-hidden group
                border border-purple-500/20
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center gap-2">
                Post a Job
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden p-3 rounded-xl transition-all duration-500
              text-gray-700 dark:text-gray-300 
              hover:text-purple-600 dark:hover:text-purple-400 
              hover:bg-purple-100/50 dark:hover:bg-purple-900/20
              backdrop-blur-sm border border-gray-200/20 dark:border-purple-500/20
            "
          >
            <div className="relative">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with Glassmorphism */}
        <div className={`
          md:hidden transition-all duration-700 ease-out overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="
            py-6 space-y-4 mt-4 rounded-2xl
            bg-white/90 dark:bg-black/90 backdrop-blur-xl 
            border border-gray-200/30 dark:border-purple-500/30 
            shadow-2xl shadow-purple-500/10
            relative overflow-hidden
          ">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
            
            <div className="relative z-10">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    block w-full text-left px-6 py-3 text-sm font-medium 
                    transition-all duration-500 rounded-xl mx-2
                    hover:bg-purple-100/50 dark:hover:bg-purple-900/20
                    hover:scale-105 hover:translate-x-2
                    ${location.pathname === item.path 
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-100/30 dark:bg-purple-900/20 border-l-4 border-purple-500' 
                      : 'text-gray-700 dark:text-gray-300'
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="px-4 py-4 space-y-3 border-t border-gray-200/20 dark:border-purple-500/20 mt-4">
                <WalletConnect className="w-full" />
                <Button 
                  onClick={handlePostJob}
                  className="
                    w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                    hover:from-purple-700 hover:to-blue-700 font-semibold
                    rounded-xl shadow-lg hover:shadow-xl
                    transition-all duration-500 hover:scale-105
                  "
                >
                  Post a Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;