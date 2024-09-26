import { Link } from 'react-router-dom';

function ArtImageTile({ art, galleryId }) {
  // Check if the art object has images
  if (!art.images || art.images.length === 0) {
    return <p>No images available for this artwork.</p>;
  }

  return (
    <div>
      {art.images.map((image, index) => (
        <Link key={index} to={`/galleries/${galleryId}/art/${art.id}`}>
          <img src={image.baseimageurl} alt={`${art.title} - Image ${index + 1}`} />
        </Link>
      ))}
    </div>
  );
}

export default ArtImageTile;

