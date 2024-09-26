import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import ArtImageTile from './components/ArtImageTile';
import {
    NavLink,
    Route,
    Switch,
} from 'react-router-dom/cjs/react-router-dom.min';

function App() {
    return (
        <div>
            <div>
                <h1>Hello from App</h1>
                <GalleryNavigation galleries={harvardArt.records} />
            </div>
            <div className="page-wrapper">
                <Switch>
                    <Route
                        exact
                        path="/galleries/:galleryId"
                        render={(props) => (
                            <GalleryView
                                galleries={harvardArt.records}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                <h2>Harvard Art Museum</h2>
                                <p>
                                    Look, but Don't Touch. Please select a
                                    Gallery in the navigation bar.
                                </p>
                            </div>
                        )}
                    />
                    <Route render={() => <h2> Page Not Found 404</h2>} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
