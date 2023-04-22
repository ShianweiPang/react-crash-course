import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorite';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  // localhost:3000
  // avoid passing props from components to components, it will build up the props chain, making the project hard to maintain
  // to tackle this: e.g. use state management package (Redux) / React built-in (Context)
  return (<div>
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </Layout>


  </div>);
}

export default App;
