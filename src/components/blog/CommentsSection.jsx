import { useState } from 'react';
import { Send, User } from 'lucide-react';

export default function CommentsSection({ blogId }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=3',
      date: '2024-01-20',
      text: 'Great article! Very informative and well-written.',
      likes: 5
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=4',
      date: '2024-01-21',
      text: 'Loved the insights shared here. Definitely implementing some of these tips!',
      likes: 3
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setLoading(false);

    const comment = {
      id: comments.length + 1,
      author: authorName,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      date: new Date().toISOString().split('T')[0],
      text: newComment,
      likes: 0
    };

    setComments([...comments, comment]);
    setNewComment('');
    setAuthorName('');
  };

  return (
    <section className="section-padding bg-light">
      <div className="container-lg" style={{ maxWidth: '800px' }}>
        {/* Title */}
        <h3 className="display-6 fw-900 mb-5" style={{ color: '#1a365d' }}>
          Comments ({comments.length})
        </h3>

        {/* Add Comment Form */}
        <div className="card border-0 mb-5">
          <div className="card-body p-4">
            <h5 className="fw-900 mb-4" style={{ color: '#1a365d' }}>Leave a Comment</h5>
            <form onSubmit={handleAddComment}>
              <div className="mb-3">
                <label className="form-label fw-700">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-700">Comment</label>
                <textarea
                  className="form-control"
                  placeholder="Share your thoughts..."
                  rows="4"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary fw-bold d-flex align-items-center gap-2"
              >
                {loading ? (
                  <>
                    <span 
                      className="spinner-border spinner-border-sm" 
                      style={{ width: '16px', height: '16px' }}
                    ></span>
                    Posting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Post Comment
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Comments List */}
        <div className="d-flex flex-column gap-4">
          {comments.map((comment) => (
            <div key={comment.id} className="card border-0">
              <div className="card-body">
                {/* Comment Header */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img 
                    src={comment.avatar}
                    alt={comment.author}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="flex-grow-1">
                    <p className="fw-700 mb-0" style={{ color: '#1a365d' }}>
                      {comment.author}
                    </p>
                    <p className="text-muted small mb-0">
                      {new Date(comment.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="mb-3" style={{ color: '#4b5563', lineHeight: 1.7 }}>
                  {comment.text}
                </p>

                {/* Actions */}
                <button
                  className="btn btn-link p-0"
                  style={{
                    color: '#f97316',
                    fontWeight: 700,
                    fontSize: '0.875rem'
                  }}
                >
                  ❤️ {comment.likes} Likes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}