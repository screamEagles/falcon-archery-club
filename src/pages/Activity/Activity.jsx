import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Content from '../../components/Content/Content';
import styles from './Activity.module.css';


const sources = [
  { title: '', src: '2023-09-15', description: '' },
  { title: '', src: '2023-10-27', description: '' },
  { title: '', src: '2023-12-22', description: '' },
  { title: '', src: '2023-12-23', description: '' },
  { title: '', src: '2024-01-12', description: '' },
  { title: '', src: '2024-03-30', description: '' },
  { title: '', src: '2024-05-04', description: '' },
];

const Activity = () => {
  return (
    <div className={styles.activityContainer}>
      <Routes>
        <Route
          path="/"
          element={(
            <div className={styles.cardList}>
              {sources.map((source, index) => (
                <Card key={index} {...source} basePath="/daily" />
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

export default Activity;
