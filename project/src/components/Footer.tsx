import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Mad News Channel</h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for breaking news, in-depth analysis, and comprehensive coverage 
              of global events. Stay informed with Mad News Channel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Editorial Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Politics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Sports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Entertainment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-600 transition-colors">Health</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">123 News Street, Media City, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-300">info@madnewschannel.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Mad News Channel. All rights reserved. | 
            <span className="text-red-600"> Keeping you informed, always.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;