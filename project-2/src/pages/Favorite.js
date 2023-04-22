import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { Link } from "react-router-dom"

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);
    const favorites = favoritesContext.favorites;

    let content;

    if (favoritesContext.totalFavorites === 0) {
        content = <h3>You got no favorites yet. <Link to='/'>Start adding some?</Link></h3>
    }
    else {
        content = <MeetupList meetups={favorites} />
    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;