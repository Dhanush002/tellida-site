import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css';

// Reuse your existing interfaces
interface Author {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

interface BlogPost {
  id: number;
  category_id: number;
  created_by_user: number;
  title: string;
  text: string;
  image: string;
  created_at: string;
  updated_at: string;
  author: Author;
}

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://api.tellida.com/api/blogs/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError("Failed to fetch post");
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!post) {
    return <div className="error">Post not found</div>;
  }

  return (
      <div className="blog-post-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back to Blog
        </button>
        <h1 className='blog-post-title'>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author.name}</span>
          <span>{formatDate(post.created_at)}</span>
        </div>
        {post.image && (
            <img
                src={post.image}
                alt={post.title}
                className="post-image"
            />
        )}
        <div className="post-content">
          {post.text.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
  );
};

export default BlogPost;