import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
// wrapping in curly braces will only export the item you needed but not the default export 
// in this case, FavoriteContext will not be exported here

ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>,
    document.getElementById('root'));
