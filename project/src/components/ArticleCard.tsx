import React from 'react';
import { Clock, User } from 'lucide-react';

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

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
            {article.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            {article.publishedAt}
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <User className="w-3 h-3 mr-1" />
            {article.author}
          </div>
          <button 
            onClick={() => onReadMore(article)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
          Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;