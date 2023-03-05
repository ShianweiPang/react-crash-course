import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  //localhost:3000
  return (<div>
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>


  </div>);
}

export default App;
