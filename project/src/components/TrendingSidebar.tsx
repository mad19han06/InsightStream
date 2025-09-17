import React, { useState } from 'react';
import { TrendingUp, Mail, Check } from 'lucide-react';

const TrendingSidebar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const trendingTopics = [
    { title: "Climate Change Summit 2024", views: "125K views" },
    { title: "Tech Innovation Awards", views: "98K views" },
    { title: "Global Economic Forecast", views: "87K views" },
    { title: "Space Exploration Updates", views: "76K views" },
    { title: "Healthcare Breakthroughs", views: "65K views" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h3 className="text-xl font-bold text-gray-800">Trending Topics</h3>
        </div>
        <ul className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <li key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
              <a href="#" className="block hover:text-red-600 transition-colors">
                <h4 className="font-medium text-gray-800 mb-1">{topic.title}</h4>
                <p className="text-sm text-gray-500">{topic.views}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5" />
          <h3 className="text-xl font-bold">Stay Updated</h3>
        </div>
        
        {!isSubscribed ? (
          <>
            <p className="mb-4 text-red-100">
              Subscribe to our newsletter and never miss important news updates!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-red-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-2">Thank You!</h4>
            <p className="text-red-100">
              You've successfully subscribed to Mad News Channel. Welcome to our community!
            </p>
          </div>
        )}
      </div>

      {/* Advertisement Placeholder */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <p className="text-gray-600 font-medium">Advertisement</p>
        <p className="text-sm text-gray-500 mt-2">Your ad could be here</p>
      </div>
    </div>
  );
};

export default TrendingSidebar;