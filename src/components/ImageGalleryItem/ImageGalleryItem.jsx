import styles from './ImageGalleryItem.module.css';
import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
export const ImageGalleryItem = ({url}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

    return (
      <li>
        <img
          src={url}
          alt=""
          className={styles.galleryitem}
          onClick={openModal}
        />

        {isOpen && (
          <Modal
            imageUrl={url}
            altText="Large version"
            onClose={closeModal}
          />
        )}
      </li>
    );
  }

