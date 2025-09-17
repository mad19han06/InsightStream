import React from 'react';
import { X, Clock, User, Share2 } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  category: string;
  publishedAt: string;
  author: string;
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
              {article.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {article.publishedAt}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-red-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4 font-medium">{article.description}</p>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {article.fullContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;