import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BlogSection.css";
import CategoryName from "./BlogCategoryName";
import BlogCard from "./BlogCard";

// Define all required interfaces
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

interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    blog_count: number;
    blog: BlogPost[];
}

const BlogSection: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://api.tellida.com/api/categories");
                setCategories(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch categories");
                setLoading(false);
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleReadClick = (postId: number) => {
        navigate(`/blog/${postId}`);
    };

    if (loading) {
        return <div className="loading">Loading categories...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <section className="global-blog-container">
            {categories.map((category) => (
                category.blog_count > 0 && (
                    <div key={category.id}>
                        <CategoryName name={category.name} />
                        <div className="blog-section">
                            {category.blog.map((post: BlogPost) => (
                                <BlogCard
                                    key={post.id}
                                    title={post.title}
                                    excerpt={post.text.split('\n')[0]}
                                    author={post.author.name}
                                    date={formatDate(post.created_at)}
                                    imageUrl={post.image}
                                    category={category.name}
                                    onReadClick={() => handleReadClick(post.id)}
                                />
                            ))}
                        </div>
                    </div>
                )
            ))}
        </section>
    );
};

export default BlogSection;