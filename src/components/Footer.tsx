
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-accent-light">De</span>Freelance
            </h3>
            <p className="text-gray-300">
              A decentralized freelancing platform leveraging blockchain technology for secure, 
              transparent transactions between clients and freelancers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-300 hover:text-accent-light transition-colors">Browse Jobs</Link></li>
              <li><Link to="/post-job" className="text-gray-300 hover:text-accent-light transition-colors">Post a Job</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-accent-light transition-colors">How It Works</Link></li>
              <li><Link to="/fees" className="text-gray-300 hover:text-accent-light transition-colors">Fee Structure</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-accent-light transition-colors">FAQ</Link></li>
              <li><Link to="/tutorials" className="text-gray-300 hover:text-accent-light transition-colors">Tutorials</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-accent-light transition-colors">Blog</Link></li>
              <li><a href="https://docs.defreelance.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Connect</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-light transition-colors">Contact Us</Link></li>
              <li><a href="https://twitter.com/defreelance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light transition-colors">Twitter</a></li>
              <li><a href="https://discord.gg/defreelance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light transition-colors">Discord</a></li>
              <li><a href="https://github.com/defreelance" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-light transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DeFreelance. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-accent-light text-sm transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-accent-light text-sm transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
