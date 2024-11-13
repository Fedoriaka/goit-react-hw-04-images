import React, { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
 const BASE_URL = 'https://pixabay.com/api/';
 const API_KEY = '46254604-623035f39894a833efa0483b4';


export const App = () => {
  const [images, setImages] = useState([]);
  const [SearchTerm, setSeatchTerm] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 12;
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const handlefetch = useCallback(() => {
    const url = `${BASE_URL}?key=${API_KEY}&q=${SearchTerm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;
    setIsLoading(true);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setTotalImages(data.total);
        setIsLoading(false);

      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      });
  }, [SearchTerm, page]);

  useEffect(() => {
    if (SearchTerm !== '' && page > 0) {
      handlefetch();
    }
  }, [SearchTerm, page, handlefetch]);
 
 
 const handleSearchSubmit = inputValue => {
   setSeatchTerm(inputValue);
   setImages([]);
   setPage(1);
  };

 const handleLoadMore = () => {
   setPage(prevPage => prevPage + 1);
  };


    return (
      <div>
        <Searchbar onSubmit={handleSearchSubmit} />
        <ImageGallery
          images={images}
          totalImages={totalImages}
          isLoading={isLoading}
          SearchTerm={SearchTerm}
          onLoad={handleLoadMore}
        />
      </div>
    );
  }

