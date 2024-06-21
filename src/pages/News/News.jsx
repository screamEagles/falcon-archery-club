import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import styles from './News.module.css';

const sources = [
  {
    src: 'al-burhani',
    title: 'Al-Nadi Al-Burhani: The First Experience',
    description: 'The archery community joined in a thrilling tournament arranged by Ba-Kamaan and Al Nadi Al Burhani Sports Complex on 14th January 2024. The competition, which featured about 86 gifted archers, was a demonstration of talent, accuracy, and sportsmanship. Umaiza deserves special recognition for winning 🏆the 20-meter range competition with outstanding accuracy and poise. Special credit goes to Sir Moiz Malik, her committed coach, who put in endless hours in training Umaiza for months. Cheers to everyone who participated and helped arrange this event, as they made it an unforgettable success. Continue to aim high! 🎯'
  },
  {
    src: 'iba-friendly',
    title: '',
    description: ''
  },
  {
    src: 'njv',
    title: '',
    description: ''
  },
  {
    src: 'sports-factory',
    title: '',
    description: ''
  }
];

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <Routes>
        <Route
          path="/"
          element={(
            <div className={styles.cardList}>
              {sources.map((source, index) => (
                <Card key={index} {...source} basePath="/news" />
              ))}
            </div>
          )}
        />
        {sources.map((source, index) => (
          <Route
            key={index}
            path={source.src}
            element={<Content src={source.src} title={source.title} description={source.description} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default News;