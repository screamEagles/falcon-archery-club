import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';

// need to refactor it...
import gs_title from '../../assets/blogs/getting_started/title_image.png';

const sources = [
  // to add more blogs, do it like this, and then go to BlogPost component to do similar
  {
    title: 'Getting Started with Archery',
    intro: 'Whether you are intrigued by archery for fun or competition, getting started can be an exciting journey for all ages.',
    date: '21st June 2024',
    image: gs_title
  },
];

const Blog = () => {
  const navigate = useNavigate();

  const handleBlogClick = (index) => {
    navigate(`/blog/${index}`);
  };

  return (
    <div className={styles.blogContainer}>
      {sources.map((source, index) => (
        <div
          key={index}
          className={styles.blogPost}
          onClick={() => handleBlogClick(index)}
        >
          <div>
            <h2>{source.title}</h2>
            <p>{source.intro}</p>
            <p>{source.date}</p>
          </div>
          <img src={source.image} alt={source.title} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
