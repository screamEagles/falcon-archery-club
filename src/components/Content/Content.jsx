import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
import styles from './Content.module.css';

const importAll = (r) => r.keys().map(r);

const contexts = {
    // to add more, make a folder with date for activity, and name for competition
    // then insert images and videos, and make sure the images are first
    // then, add the names of the folders here, and do the same in Card.jsx
    // finally, go to Activity.jsx or News.jsx, to add the name of the folder in the src, along with title and desc

    // daily actvity
    '2023-09-15': require.context('../../assets/activities/2023-09-15', false, /\.(jpg|jpeg|png|mp4)$/),
    '2023-10-27': require.context('../../assets/activities/2023-10-27', false, /\.(jpg|jpeg|png|mp4)$/),
    '2023-12-22': require.context('../../assets/activities/2023-12-22', false, /\.(jpg|jpeg|png|mp4)$/),
    '2023-12-23': require.context('../../assets/activities/2023-12-23', false, /\.(jpg|jpeg|png|mp4)$/),
    '2024-01-12': require.context('../../assets/activities/2024-01-12', false, /\.(jpg|jpeg|png|mp4)$/),
    '2024-03-30': require.context('../../assets/activities/2024-03-30', false, /\.(jpg|jpeg|png|mp4)$/),
    '2024-05-04': require.context('../../assets/activities/2024-05-04', false, /\.(jpg|jpeg|png|mp4)$/),
    
    // competitions
    'al-burhani': require.context('../../assets/competitions/al-burhani', false, /\.(jpg|jpeg|png|mp4)$/),
    'iba-friendly': require.context('../../assets/competitions/iba-friendly', false, /\.(jpg|jpeg|png|mp4)$/),
    'njv': require.context('../../assets/competitions/njv', false, /\.(jpg|jpeg|png|mp4)$/),
    'sports-factory': require.context('../../assets/competitions/sports-factory', false, /\.(jpg|jpeg|png|mp4)$/),
};

const getContext = (src) => {
    if (!contexts[src]) {
        throw new Error(`Unknown source directory: ${src}`);
    }
    return contexts[src];
};


Modal.setAppElement('#root');

const Content = ({ title, src, description }) => {
    const mediaFiles = importAll(getContext(src));
    const images = mediaFiles.filter(file => !file.endsWith('.mp4'));
    const videos = mediaFiles.filter(file => file.endsWith('.mp4'));

    const [isImageModalOpen, setImageModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const openImageModal = (index) => {
        if (!isSmallScreen) {
        setCurrentImageIndex(index);
        setImageModalOpen(true);
        }
    };

    const closeImageModal = () => {
        setImageModalOpen(false);
        setCurrentImageIndex(0);
    };

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
        if (isImageModalOpen) {
            if (event.key === 'ArrowRight') {
            nextImage();
            } else if (event.key === 'ArrowLeft') {
            prevImage();
            } else if (event.key === 'Escape') {
            closeImageModal();
            }
        }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isImageModalOpen, nextImage, prevImage]);

    return (
        <div className={styles.contentContainer}>
            <h2>{title}</h2><br />
            <p style={{textAlign: 'left'}}>{description}</p>
            <div className={styles.gallerySection}>
                <div className={styles.imageGallery}>
                <ul className={styles.mediaList}>
                    {images.map((image, index) => (
                    <li key={index} className={styles.mediaItem}>
                        <img
                        src={image}
                        alt={`Activity ${index + 1}`}
                        className={styles.mediaThumbnail}
                        onClick={() => openImageModal(index)}
                        />
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className={styles.gallerySection}>
                <div className={styles.videoGallery}>
                    <ul className={styles.videoMediaList}>
                        {videos.map((video, index) => (
                        <li key={index} className={styles.mediaItem}>
                            <video
                            className={styles.mediaThumbnail}
                            controls
                            >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Image Modal */}
            {!isSmallScreen && (
                <Modal
                isOpen={isImageModalOpen}
                onRequestClose={closeImageModal}
                contentLabel="Image Modal"
                className={styles.modal}
                overlayClassName={styles.overlay}
                >
                <button onClick={prevImage} className={`${styles.navButton} ${styles.prevButton}`}>&#9664;</button>
                <img src={images[currentImageIndex]} alt={`Activity ${currentImageIndex + 1}`} className={styles.modalMedia} />
                <button onClick={nextImage} className={`${styles.navButton} ${styles.nextButton}`}>&#9654;</button>
                <br />
                <button onClick={closeImageModal} className={styles.closeButton}>Close</button>
                </Modal>
            )}
        </div>
    );
};

export default Content;
