import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  activeCategory: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onCategoryFilter, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Politics', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategoryClick = (category: string) => {
    onCategoryFilter(category);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">
              Mad News Channel
            </h1>
          </div>
          
          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:bg-gray-600 w-64"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-gray-700`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 py-4">
            {categories.map((category) => (
              <li key={category}>
                <button 
                  onClick={() => handleCategoryClick(category)}
                  className={`hover:text-red-400 transition-colors font-medium ${
                    activeCategory === category ? 'text-red-600 font-semibold' : ''
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:bg-gray-600"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;