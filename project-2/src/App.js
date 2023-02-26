import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetup';


function App() {
  //localhost:3000
  return (<div>
    <Routes>
      <Route path='/' element={<AllMeetupsPage />} />
      <Route path='/new-meetup' element={<NewMeetupPage />} />
      <Route path='/favourites' element={<FavouritesPage />} />
    </Routes>

  </div>);
}

export default App;
