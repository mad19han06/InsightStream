import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const BreakingNews: React.FC = () => {
  
  const breakingNews = [
    "🏛️ Tamil Nadu CM announces new infrastructure projects worth ₹50,000 crores",
    "🤖 OpenAI releases GPT-5 with revolutionary multimodal capabilities", 
    "🏏 India qualifies for FIFA World Cup 2026 after 24 years",
    "🚇 Chennai Metro Phase 3 gets Central Government approval",
    "⚕️ Google's MedAI achieves 99% accuracy in disease diagnosis",
    "🏏 IPL 2024 auction sees record-breaking bids for Tamil Nadu players",
    "🏭 Tata Group announces ₹1 lakh crore investment in Tamil Nadu manufacturing",
    "💻 Microsoft launches AI-powered GitHub Copilot X for developers",
    "🎬 Netflix invests ₹3000 crores in Indian original content",
    "🏥 Revolutionary cancer treatment shows 95% success rate in trials",
    "🧠 Mental health campaign reaches 10 million Indians nationwide",
    "🛍️ Reliance expands retail network with 500 new stores across India"
  ];

  const scrollingText = breakingNews.join(' • ');

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white text-red-600 px-3 py-1 rounded font-bold text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>BREAKING</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-nowrap animate-scroll">
              <span className="inline-block">{scrollingText} • {scrollingText}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BreakingNews;