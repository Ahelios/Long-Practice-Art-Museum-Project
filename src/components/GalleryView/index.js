import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

function GalleryView({ galleries }) {
  const { galleryId } = useParams(); // Extract galleryId from URL

  // Find the correct gallery based on galleryId
  const gallery = galleries.find((g) => g.id === Number(galleryId));

  // Check if gallery is found
  if (!gallery) {
    return <h2>Gallery not found</h2>;
  }

  return (
    <div>
      <h2>{gallery.name}</h2>

      {/* Map over the gallery objects (artworks) and create ArtImageTile for each artwork */}
      <div className="art-images-grid">
        {gallery.objects.map((art) => (
          <ArtImageTile key={art.id} art={art} galleryId={galleryId} />
        ))}
      </div>
    </div>
  );
}

export default GalleryView;
