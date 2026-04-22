import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';
import SidebarFilter from '../components/blog/SidebarFilter';
import blogsData from '../data/blogs.json';

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilter, setShowFilter] = useState(false);

  // Extract unique categories and tags
  const categories = ['All', ...new Set(blogsData.blogs.map(b => b.category))];
  const allTags = [...new Set(blogsData.blogs.flatMap(b => b.tags))].sort();

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let result = blogsData.blogs.filter(blog => {
      // Search filter
      const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.subHeading.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         blog.author.name.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchCategory = selectedCategory === 'All' || blog.category === selectedCategory;

      // Tags filter
      const matchTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => blog.tags.includes(tag));

      return matchSearch && matchCategory && matchTags;
    });

    // Sorting
    switch(sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
        break;
      case 'popular':
        result.sort((a, b) => b.views - a.views);
        break;
      case 'trending':
        result.sort((a, b) => (b.likes / b.views) - (a.likes / a.views));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTags, sortBy]);

  const handleTagChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTags([]);
    setSortBy('newest');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTags.length > 0;

  return (
    <>
      {/* Hero Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
          color: 'white',
          padding: '4rem 1.5rem'
        }}
      >
        <div className="container-lg text-center">
          <h1 className="display-4 fw-900 mb-3">Explore Our Blog</h1>
          <p className="lead text-white-50 mb-4">Discover articles on technology, design, and innovation</p>

          {/* Search Bar */}
          <div className="search-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                className="search-input"
                placeholder="Search articles, authors, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-light">
        <div className="container-lg">
          <div className="row g-4">
            {/* Sidebar - Hidden on mobile */}
            <div className="col-lg-3 d-none d-lg-block">
              <SidebarFilter
                categories={categories}
                allTags={allTags}
                onCategoryChange={handleCategoryChange}
                onTagChange={handleTagChange}
                onSortChange={setSortBy}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                sortBy={sortBy}
              />
            </div>

            {/* Mobile Filter Button */}
            <div className="col-12 d-lg-none mb-3">
              <button
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={() => setShowFilter(!showFilter)}
              >
                <Filter size={20} />
                {showFilter ? 'Hide' : 'Show'} Filters
              </button>
            </div>

            {/* Mobile Filter Sidebar */}
            {showFilter && (
              <div className="col-12 d-lg-none mb-4">
                <SidebarFilter
                  categories={categories}
                  allTags={allTags}
                  onCategoryChange={handleCategoryChange}
                  onTagChange={handleTagChange}
                  onSortChange={setSortBy}
                  selectedCategory={selectedCategory}
                  selectedTags={selectedTags}
                  sortBy={sortBy}
                />
              </div>
            )}

            {/* Blog Grid */}
            <div className="col-lg-9">
              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="mb-4 p-3 bg-white rounded-lg border-2" style={{ borderColor: '#f97316' }}>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      {searchQuery && (
                        <span className="badge" style={{ background: '#f97316', color: 'white', fontSize: '0.9rem', padding: '0.5rem 0.75rem' }}>
                          Search: {searchQuery}
                          <button 
                            className="btn btn-link p-0 ms-2 text-white"
                            onClick={() => setSearchQuery('')}
                            style={{ fontSize: '1rem' }}
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {selectedCategory !== 'All' && (
                        <span className="badge" style={{ background: '#f97316', color: 'white', fontSize: '0.9rem', padding: '0.5rem 0.75rem' }}>
                          {selectedCategory}
                          <button 
                            className="btn btn-link p-0 ms-2 text-white"
                            onClick={() => setSelectedCategory('All')}
                            style={{ fontSize: '1rem' }}
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {selectedTags.map(tag => (
                        <span key={tag} className="badge" style={{ background: '#f97316', color: 'white', fontSize: '0.9rem', padding: '0.5rem 0.75rem' }}>
                          {tag}
                          <button 
                            className="btn btn-link p-0 ms-2 text-white"
                            onClick={() => handleTagChange(tag)}
                            style={{ fontSize: '1rem' }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={handleClearFilters}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              )}

              {/* Blog Count */}
              <p className="text-muted fw-600 mb-4">
                Showing <span style={{ color: '#f97316' }}>{filteredBlogs.length}</span> of <span style={{ color: '#f97316' }}>{blogsData.blogs.length}</span> articles
              </p>

              {/* Blog Cards Grid */}
              {filteredBlogs.length > 0 ? (
                <div className="row g-4">
                  {filteredBlogs.map((blog, index) => (
                    <div 
                      key={blog.id} 
                      className="col-md-6 col-lg-12 col-xl-6"
                      style={{
                        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <BlogCard blog={blog} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                    No articles found matching your criteria
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}