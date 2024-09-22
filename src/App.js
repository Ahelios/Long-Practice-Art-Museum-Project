import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';

function App() {
    return (
        <div>
            <h1>Hello from App</h1>
            <GalleryNavigation galleries={harvardArt.records} />
        </div>
    );
}

export default App;
