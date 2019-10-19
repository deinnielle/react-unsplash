import React from 'react';

const Images = () => {
  return (
    <div>
      {images.map(image => (
        <div className="grid-item" key={image.id}>
          <img src={image.urls.regular} alt={image.description} />
          <div className="text">{image.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Images;

