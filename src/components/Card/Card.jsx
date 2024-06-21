import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

const importAll = (r) => r.keys().map(r);

const contexts = {
  // to add more, make a folder with date for activity, and name for competition
  // then insert images and videos, and make sure the images are first
  // then, add the names of the folders here, and do the same in Content.jsx
  // finally, go to Activity.jsx or News.jsx, to add the name of the folder in the src, along with title and desc

  // daily activity
  '2023-09-15': require.context('../../assets/activities/2023-09-15', false, /\.(jpg|jpeg|png)$/),
  '2023-10-27': require.context('../../assets/activities/2023-10-27', false, /\.(jpg|jpeg|png)$/),
  '2023-12-22': require.context('../../assets/activities/2023-12-22', false, /\.(jpg|jpeg|png)$/),
  '2023-12-23': require.context('../../assets/activities/2023-12-23', false, /\.(jpg|jpeg|png)$/),
  '2024-01-12': require.context('../../assets/activities/2024-01-12', false, /\.(jpg|jpeg|png)$/),
  '2024-03-30': require.context('../../assets/activities/2024-03-30', false, /\.(jpg|jpeg|png)$/),
  '2024-05-04': require.context('../../assets/activities/2024-05-04', false, /\.(jpg|jpeg|png)$/),
  
  // competitions
  'al-burhani': require.context('../../assets/competitions/al-burhani', false, /\.(jpg|jpeg|png)$/),
  'iba-friendly': require.context('../../assets/competitions/iba-friendly', false, /\.(jpg|jpeg|png)$/),
  'njv': require.context('../../assets/competitions/njv', false, /\.(jpg|jpeg|png)$/),
  'sports-factory': require.context('../../assets/competitions/sports-factory', false, /\.(jpg|jpeg|png)$/),
};

const getContext = (src) => {
  if (!contexts[src]) {
    throw new Error(`Unknown source directory: ${src}`);
  }
  return contexts[src];
};

const Card = ({ src, basePath }) => {
  const navigate = useNavigate();
  const mediaFiles = importAll(getContext(src));

  const image = mediaFiles.length > 0 ? mediaFiles[0] : null;

  const handleCardClick = () => {
    navigate(`${basePath}/${src}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      {image && <img src={image} alt="" className={styles.cardImage} />}
    </div>
  );
};

export default Card;
