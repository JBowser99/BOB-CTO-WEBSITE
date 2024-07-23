import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import getCarouselImages from '../utils/getCarouselImages';

const ImageCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      const shuffledImages = await getCarouselImages();
      setImages(shuffledImages);
      setCurrentImage(shuffledImages[0]);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          setCurrentImage(images[nextIndex]);
          setIsTransitioning(false);

          // Restart slideshow with a new random order after all images are shown
          if (nextIndex === 0) {
            const shuffledImages = images.sort(() => 0.5 - Math.random());
            setImages(shuffledImages);
          }

          return nextIndex;
        });
      }, 500); // Transition duration
    }, 3000); // Display duration

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-4xl h-64 md:h-96 lg:h-128 overflow-hidden rounded-lg shadow-lg">
        {currentImage && (
          <Image
            key={currentImage}
            src={currentImage}
            alt="Carousel"
            layout="fill"
            objectFit="contain"
            className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          />
        )}
      </div>
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transition: opacity 1s ease-in;
        }
        .fade-out {
          opacity: 0;
          transition: opacity 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
