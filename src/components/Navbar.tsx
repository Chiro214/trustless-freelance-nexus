
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navigation = [
    { name: "Find Work", href: "/jobs" },
    { name: "Post Job", href: "/post-job" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Sparkles className="h-8 w-8 text-orange-500 group-hover:text-orange-600 transition-colors" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-yellow-700 transition-all duration-300">
                  DeFreelance
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-orange-50 group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 hover:bg-orange-50 rounded-full px-4 py-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium max-w-32 truncate">{user?.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 p-2">
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer hover:bg-red-50 rounded-md">
                    <LogOut className="w-4 h-4 mr-2 text-red-500" />
                    <span className="text-red-600">Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/auth">
                  <Button variant="ghost" className="hover:bg-orange-50 text-gray-700 hover:text-orange-600">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-200/50 rounded-b-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-orange-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 rounded-lg">
                      {user?.email}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/auth"
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth"
                      className="block px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-center hover:from-orange-600 hover:to-yellow-600 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
