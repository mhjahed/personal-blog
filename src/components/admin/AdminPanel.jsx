import { useState } from 'react';
import { Plus, Edit, Trash2, Download, Eye, EyeOff } from 'lucide-react';
import blogsData from '../../data/blogs.json';
import AddBlogForm from './AddBlogForm';
import EditBlogForm from './EditBlogForm';

export default function AdminPanel() {
  const [blogs, setBlogs] = useState(blogsData.blogs);
  const [activeTab, setActiveTab] = useState('view');
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBlog = (newBlog) => {
    const blog = {
      ...newBlog,
      id: Math.max(...blogs.map(b => b.id), 0) + 1,
      views: 0,
      likes: 0,
      publishDate: new Date().toISOString().split('T')[0]
    };
    setBlogs([...blogs, blog]);
    setActiveTab('view');
    alert('Blog added successfully!');
  };

  const handleUpdateBlog = (updatedBlog) => {
    setBlogs(blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b));
    setEditingBlog(null);
    setActiveTab('view');
    alert('Blog updated successfully!');
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(blogs.filter(b => b.id !== id));
      alert('Blog deleted successfully!');
    }
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify({ blogs }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `blogs-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container-lg">
      {/* Tabs */}
      <div className="d-flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => {
            setActiveTab('view');
            setEditingBlog(null);
          }}
          className={`btn fw-bold px-4 py-2 ${activeTab === 'view' ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          📋 View All Blogs
        </button>
        <button
          onClick={() => {
            setActiveTab('add');
            setEditingBlog(null);
          }}
          className={`btn fw-bold px-4 py-2 d-flex align-items-center gap-2 ${activeTab === 'add' ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          <Plus size={18} />
          Add New Blog
        </button>
        <button
          onClick={downloadJSON}
          className="btn btn-warning fw-bold px-4 py-2 d-flex align-items-center gap-2 ms-auto"
        >
          <Download size={18} />
          Export JSON
        </button>
      </div>

      {/* View Blogs Tab */}
      {activeTab === 'view' && (
        <div>
          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search blogs by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Blog List */}
          <div className="row g-3">
            {filteredBlogs.map(blog => (
              <div key={blog.id} className="col-12">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row align-items-center gap-3">
                      <div className="col">
                                            <div className="d-flex align-items-center gap-2 mb-2">
                      <span 
                        className="badge badge-primary"
                        style={{
                          background: '#2d3748',
                          color: 'white',
                          fontWeight: 700
                        }}
                      >
                        {blog.category}
                      </span>
                          {blog.features.trending && <span className="badge badge-orange">🔥 Trending</span>}
                          {blog.features.secret && <span className="badge badge-danger">🔒 Secret</span>}
                        </div>
                        <h5 className="fw-700 mb-2" style={{ color: '#1a365d' }}>
                          {blog.title}
                        </h5>
                        <p className="text-muted small mb-2">
                          by {blog.author.name} • {new Date(blog.publishDate).toLocaleDateString()}
                        </p>
                        <div className="d-flex gap-3 small text-muted">
                          <span>👁️ {blog.views} views</span>
                          <span>❤️ {blog.likes} likes</span>
                          <span>⏱️ {blog.readingTime} min</span>
                        </div>
                      </div>
                      <div className="col-auto d-flex gap-2">
                        <button
                          onClick={() => {
                            setEditingBlog(blog);
                            setActiveTab('edit');
                          }}
                          className="btn btn-sm btn-info fw-bold d-flex align-items-center gap-1"
                          style={{ background: '#0ea5e9', color: 'white' }}
                        >
                          <Edit size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="btn btn-sm btn-danger fw-bold d-flex align-items-center gap-1"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                        <button
                          className="btn btn-sm btn-secondary fw-bold"
                          onClick={() => {
                            const newBlogs = blogs.map(b =>
                              b.id === blog.id
                                ? { ...b, features: { ...b.features, secret: !b.features.secret } }
                                : b
                            );
                            setBlogs(newBlogs);
                          }}
                        >
                          {blog.features.secret ? <Eye size={16} /> : <EyeOff size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No blogs found</p>
            </div>
          )}
        </div>
      )}

      {/* Add Blog Tab */}
      {activeTab === 'add' && (
        <AddBlogForm onSubmit={handleAddBlog} onCancel={() => setActiveTab('view')} />
      )}

      {/* Edit Blog Tab */}
      {activeTab === 'edit' && editingBlog && (
        <EditBlogForm
          blog={editingBlog}
          onSubmit={handleUpdateBlog}
          onCancel={() => {
            setActiveTab('view');
            setEditingBlog(null);
          }}
        />
      )}
    </div>
  );
}