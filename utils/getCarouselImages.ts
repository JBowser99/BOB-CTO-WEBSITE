const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getCarouselImages = async () => {
  const response = await fetch('/api/images');
  const filenames = await response.json();
  return shuffleArray(filenames.map((filename) => `/carousel-images/${filename}`));
};

export default getCarouselImages;
