import { useState } from 'react';
import { X } from 'lucide-react';

export default function AddBlogForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    subHeading: '',
    body: '',
    ending: '',
    analysis: '',
    category: 'Technology',
    tags: [],
    author: {
      id: 1,
      name: 'Sarah Chen',
      bio: 'Full-stack developer with 8+ years experience',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    imageUrl: '',
    readingTime: 5,
    features: {
      trending: false,
      favorite: false,
      secret: false
    }
  });

  const [tagInput, setTagInput] = useState('');

  const categories = ['Technology', 'Design', 'Business', 'Lifestyle', 'Education'];
  const authors = [
    { id: 1, name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Marcus Johnson', avatar: 'https://i.pravatar.cc/150?img=2' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        features: { ...formData.features, [name]: checked }
      });
    } else if (name.startsWith('author.')) {
      const key = name.split('.')[1];
      setFormData({
        ...formData,
        author: { ...formData.author, [key]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(t => t !== tag)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.subHeading || !formData.body) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="card border-0">
      <div className="card-body p-4">
        <h4 className="fw-900 mb-4" style={{ color: '#1a365d' }}>Add New Blog Article</h4>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label fw-700">Title *</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Subheading */}
          <div className="mb-3">
            <label className="form-label fw-700">Subheading *</label>
            <input
              type="text"
              className="form-control"
              name="subHeading"
              value={formData.subHeading}
              onChange={handleChange}
              placeholder="Enter subheading"
              required
            />
          </div>

          <div className="row g-3">
            {/* Category */}
            <div className="col-md-6">
              <label className="form-label fw-700">Category</label>
              <select
                className="form-select"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div className="col-md-6">
              <label className="form-label fw-700">Author</label>
              <select
                className="form-select"
                name="author.name"
                value={formData.author.name}
                onChange={(e) => {
                  const author = authors.find(a => a.name === e.target.value);
                  setFormData({
                    ...formData,
                    author: { ...author, bio: formData.author.bio }
                  });
                }}
              >
                {authors.map(author => (
                  <option key={author.id} value={author.name}>{author.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reading Time */}
          <div className="mb-3">
            <label className="form-label fw-700">Reading Time (minutes)</label>
            <input
              type="number"
              className="form-control"
              name="readingTime"
              value={formData.readingTime}
              onChange={handleChange}
              min="1"
            />
          </div>

          {/* Image URL */}
          <div className="mb-3">
            <label className="form-label fw-700">Image URL</label>
            <input
              type="url"
              className="form-control"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Body */}
          <div className="mb-3">
            <label className="form-label fw-700">Body *</label>
            <textarea
              className="form-control"
              name="body"
              value={formData.body}
              onChange={handleChange}
              rows="5"
              placeholder="Enter article body"
              required
            ></textarea>
          </div>

          {/* Analysis */}
          <div className="mb-3">
            <label className="form-label fw-700">Key Analysis / Highlight</label>
            <textarea
              className="form-control"
              name="analysis"
              value={formData.analysis}
              onChange={handleChange}
              rows="3"
              placeholder="Enter key takeaway or analysis"
            ></textarea>
          </div>

          {/* Ending */}
          <div className="mb-3">
            <label className="form-label fw-700">Ending / Conclusion</label>
            <textarea
              className="form-control"
              name="ending"
              value={formData.ending}
              onChange={handleChange}
              rows="3"
              placeholder="Enter article ending/conclusion"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="mb-3">
            <label className="form-label fw-700">Tags</label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Enter tag and press Add"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              />
              <button
                type="button"
                className="btn btn-outline-primary fw-bold"
                onClick={handleAddTag}
              >
                Add Tag
              </button>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {formData.tags.map(tag => (
                <span key={tag} className="badge badge-primary d-flex align-items-center gap-2 px-3 py-2">
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="btn btn-link p-0 text-white"
                    style={{ fontSize: '1.2rem' }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4 p-3 bg-light rounded-lg">
            <label className="form-label fw-700 mb-3">Features</label>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="trending"
                name="trending"
                checked={formData.features.trending}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="trending">
                🔥 Mark as Trending
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="favorite"
                name="favorite"
                checked={formData.features.favorite}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="favorite">
                ⭐ Mark as Favorite
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="secret"
                name="secret"
                checked={formData.features.secret}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="secret">
                🔒 Mark as Secret (Admin Only)
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary fw-bold px-5">
              Add Blog
            </button>
            <button type="button" onClick={onCancel} className="btn btn-outline-secondary fw-bold px-5">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}