import React, { useState } from 'react';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import ArticleCard from './components/ArticleCard';
import ArticleModal from './components/ArticleModal';
import TrendingSidebar from './components/TrendingSidebar';
import Footer from './components/Footer';
import { articles, Article } from './data/articles';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    setSearchQuery(''); // Clear search when filtering by category
  };

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearch={handleSearch} 
        onCategoryFilter={handleCategoryFilter}
        activeCategory={activeCategory}
      />
      <BreakingNews />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {(searchQuery || activeCategory !== 'All') && (
              <div className="mb-6">
                {searchQuery ? (
                  <h2 className="text-2xl font-bold text-gray-800">
                    Search Results for "{searchQuery}"
                  </h2>
                ) : (
                  <h2 className="text-2xl font-bold text-gray-800">
                    {activeCategory} News
                  </h2>
                )}
                <p className="text-gray-600 mt-1">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </p>
              </div>
            )}
            
            {!searchQuery && activeCategory === 'All' && (
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest News</h2>
                <p className="text-gray-600">Stay informed with the most recent updates from around the world</p>
              </div>
            )}

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-4 text-red-600 hover:text-red-800 font-medium"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <TrendingSidebar />
          </aside>
        </div>
      </main>

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}

export default App;