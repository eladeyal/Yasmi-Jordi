import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Photos.css';

const Photos = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      src: '/Pictures/2025 - Proposal.png',
      title: 'The Proposal',
      year: '2025',
      location: 'Proposal'
    },
    {
      src: '/Pictures/2025 - Yaffo Tlv.png', 
      title: 'Yaffo, Tel Aviv',
      year: '2025',
      location: 'Yaffo'
    },
    {
      src: '/Pictures/2025 - Ein Yahav.png',
      title: 'Ein Yahav Desert',
      year: '2025', 
      location: 'Ein Yahav'
    },
    {
      src: '/Pictures/Dead Sea - 2024.png',
      title: 'Dead Sea Adventure',
      year: '2024',
      location: 'Dead Sea'
    },
    {
      src: '/Pictures/2024 - Kineret.png',
      title: 'Sea of Galilee',
      year: '2024',
      location: 'Kineret'
    },
    {
      src: '/Pictures/2023 - Turkey.png',
      title: 'Turkey Vacation',
      year: '2023',
      location: 'Turkey'
    },
    {
      src: '/Pictures/2023 - Pinetown.png',
      title: 'Pinetown Memories',
      year: '2023',
      location: 'Pinetown'
    },
    {
      src: '/Pictures/2023 - Hermon.png',
      title: 'Mount Hermon',
      year: '2023',
      location: 'Hermon'
    },
    {
      src: '/Pictures/2023 - Beer Sheva.png',
      title: 'Beer Sheva Days',
      year: '2023',
      location: 'Beer Sheva'
    },
    {
      src: '/Pictures/2022 - Negev.png',
      title: 'Negev Desert',
      year: '2022',
      location: 'Negev'
    },
    {
      src: '/Pictures/2022 - Montreal.png',
      title: 'Montreal Trip',
      year: '2022',
      location: 'Montreal'
    },
    {
      src: '/Pictures/2021 - Purim.png',
      title: 'Purim Celebration',
      year: '2021',
      location: 'Purim'
    },
    {
      src: '/Pictures/2021 - Hertzliya.png',
      title: 'Hertzliya Beach',
      year: '2021',
      location: 'Hertzliya'
    },
    {
      src: '/Pictures/2021 - Ein Gedi.png',
      title: 'Ein Gedi Oasis',
      year: '2021',
      location: 'Ein Gedi'
    },
    {
      src: '/Pictures/2020 - Bulgaria.png',
      title: 'Bulgaria Escape',
      year: '2020',
      location: 'Bulgaria'
    },
    {
      src: '/Pictures/2019 - Niagara Falls.png',
      title: 'Niagara Falls',
      year: '2019',
      location: 'Niagara'
    },
    {
      src: '/Pictures/2019 - Jack\'s Lake.png',
      title: 'Jack\'s Lake',
      year: '2019',
      location: 'Canada'
    },
    {
      src: '/Pictures/2018 - Tel Aviv.png',
      title: 'Tel Aviv Life',
      year: '2018',
      location: 'Tel Aviv'
    },
    {
      src: '/Pictures/2018 - Tel Aviv.2.png',
      title: 'Tel Aviv Nights',
      year: '2018',
      location: 'Tel Aviv'
    },
    {
      src: '/Pictures/2018 - Stellenbosch.png',
      title: 'Stellenbosch Wine',
      year: '2018',
      location: 'South Africa'
    },
    {
      src: '/Pictures/2017 - Ramon.png',
      title: 'Ramon Crater',
      year: '2017',
      location: 'Ramon'
    }
  ];

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = photos.findIndex(photo => photo.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = photos.findIndex(photo => photo.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
  };

  return (
    <section id="photos" className="section">
      <div className="container">
        <div className="photos-content">
          <h2 className="elegant-title" style={{ fontSize: '50px', lineHeight: '50px' }}>
            {t('photos.title')}
          </h2>
          <p className="subtitle">{t('photos.subtitle')}</p>
          
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="photo-item"
                onClick={() => openModal(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <span className="photo-year">{photo.year}</span>
                  <span className="photo-title">{photo.title}</span>
                  <span className="photo-location">{photo.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <button className="nav-btn prev-btn" onClick={prevImage}>‹</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <button className="nav-btn next-btn" onClick={nextImage}>›</button>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.location} • {selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;
