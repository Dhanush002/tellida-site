import React from "react";
import "./BlogCard.css";
import "./BlogList.css";

interface BlogCardProps {
    title: string;
    excerpt: string;
    author: string;
    date?: string;
    imageUrl?: string;
    category?: string;
    onReadClick?: () => void; // Add this line for the click handler
}

const BlogCard: React.FC<BlogCardProps> = ({
                                               title,
                                               excerpt,
                                               author,
                                               date = new Date().toLocaleDateString(),
                                               imageUrl,
                                               category,
                                               onReadClick // Add this to the destructured props
                                           }) => {
    return (
        <section className="blog-card">
            {imageUrl && (
                <div className="blog-card__image-container">
                    <img src={imageUrl} alt={title} className="blog-card__image" />
                </div>
            )}

            <div className="blog-card__content">
                <h2 className="blog-card__title">{title}</h2>
                <p className="blog-card__excerpt">{excerpt}</p>
                <div className="blog-card__meta">
                    <span className="blog-card__author">By {author}</span>
                    <span className="blog-card__date">{date}</span>
                </div>
                {onReadClick && ( // Only show if onReadClick is provided
                    <button
                        className="blog-card__read-button"
                        onClick={onReadClick}
                    >
                        Read More
                    </button>
                )}
            </div>
        </section>
    );
};

export default BlogCard;