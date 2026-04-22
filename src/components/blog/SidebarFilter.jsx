import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

export default function SidebarFilter({ 
  categories, 
  allTags, 
  onCategoryChange, 
  onTagChange, 
  onSortChange,
  selectedCategory,
  selectedTags,
  sortBy
}) {
  const [expandedCategory, setExpandedCategory] = useState('categories');

  return (
    <div className="sticky-top" style={{ top: '100px' }}>
      {/* Categories Section */}
      <div className="card mb-4 border-0">
        <div className="card-header bg-primary text-white fw-bold" style={{ cursor: 'pointer' }}>
          <div 
            className="d-flex justify-content-between align-items-center"
            onClick={() => setExpandedCategory(expandedCategory === 'categories' ? null : 'categories')}
          >
            <span>Categories</span>
            <ChevronDown 
              size={20} 
              style={{
                transform: expandedCategory === 'categories' ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
        </div>
        {expandedCategory === 'categories' && (
          <div className="card-body p-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className="d-block w-100 text-start p-3 border-bottom-0"
                style={{
                  background: selectedCategory === category ? '#ebf2f7' : 'transparent',
                  color: selectedCategory === category ? '#1a365d' : '#4b5563',
                  fontWeight: selectedCategory === category ? 700 : 500,
                  border: 'none',
                  borderBottom: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = '#f3f4f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags Section */}
      <div className="card mb-4 border-0">
        <div 
          className="card-header bg-primary text-white fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => setExpandedCategory(expandedCategory === 'tags' ? null : 'tags')}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span>Tags</span>
            <ChevronDown 
              size={20}
              style={{
                transform: expandedCategory === 'tags' ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
        </div>
        {expandedCategory === 'tags' && (
          <div className="card-body">
            <div className="d-flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => onTagChange(tag)}
                  className="badge"
                  style={{
                    background: selectedTags.includes(tag) ? '#f97316' : '#ebf2f7',
                    color: selectedTags.includes(tag) ? 'white' : '#1a365d',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedTags.includes(tag)) {
                      e.currentTarget.style.background = '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedTags.includes(tag)) {
                      e.currentTarget.style.background = '#ebf2f7';
                    }
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sort Section */}
      <div className="card border-0">
        <div 
          className="card-header bg-primary text-white fw-bold"
          style={{ cursor: 'pointer' }}
          onClick={() => setExpandedCategory(expandedCategory === 'sort' ? null : 'sort')}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span>Sort By</span>
            <ChevronDown 
              size={20}
              style={{
                transform: expandedCategory === 'sort' ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
        </div>
        {expandedCategory === 'sort' && (
          <div className="card-body p-0">
            {[
              { value: 'newest', label: 'Newest First' },
              { value: 'oldest', label: 'Oldest First' },
              { value: 'popular', label: 'Most Popular' },
              { value: 'trending', label: 'Trending' }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => onSortChange(option.value)}
                className="d-block w-100 text-start p-3 border-bottom-0"
                style={{
                  background: sortBy === option.value ? '#ebf2f7' : 'transparent',
                  color: sortBy === option.value ? '#1a365d' : '#4b5563',
                  fontWeight: sortBy === option.value ? 700 : 500,
                  border: 'none',
                  borderBottom: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (sortBy !== option.value) {
                    e.currentTarget.style.background = '#f3f4f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (sortBy !== option.value) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}