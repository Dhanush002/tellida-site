import React from "react";
import "./BlogCategoryName.css";

// Define props interface with TypeScript
interface CategoryNameProps {
  name: string;
  className?: string;
  textColor?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

const CategoryName: React.FC<CategoryNameProps> = ({
                                                     name,
                                                     className = '',
                                                     textColor,
                                                     tag: Tag = 'h2'  // Default to h2 if not specified
                                                   }) => {
  // Combine base class with any additional classes
  const combinedClasses = `blog-category-name ${className}`.trim();

  // Apply custom color if provided
  const style = textColor ? { color: textColor } : {};

  return (
      <div className="category-name-wrapper">
        <Tag className={combinedClasses} style={style}>
          {name}
        </Tag>
      </div>
  );
};

export default CategoryName;