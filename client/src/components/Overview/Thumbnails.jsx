import React from 'react';

const Thumbnails = ({ images, currentImageIndex, onThumbnailClick }) => {
  return (
    <div className="thumbnails" data-testid="thumbnails">
      {images.map((img, index) => (
        <div
          key={index}
          className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
          onClick={() => onThumbnailClick(index)}
          style={{ backgroundImage: `url(${img.thumbnail_url})` }}
          data-testid="thumbnail"
        />
      ))}
    </div>
  );
};

export default Thumbnails;
