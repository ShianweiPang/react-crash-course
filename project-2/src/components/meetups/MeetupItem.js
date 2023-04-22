import Card from '../ui/Card.js'
import meetupitem_css from './MeetupItem.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context.js';

function MeetupItem(props) {
    const favoritesContext = useContext(FavoritesContext)
    const itemIsFavorite = favoritesContext.itemIsFavorite(props.meetup.id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.meetup.id);
        }
        else {
            favoritesContext.addFavorite(props.meetup);
        }
    }

    return (
        <li className={meetupitem_css.item}>
            <Card>
                <div className={meetupitem_css.image}>
                    <img src={props.meetup.image} alt={props.meetup.title} />
                </div>
                <div className={meetupitem_css.content}>
                    <h3>{props.meetup.title}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className={meetupitem_css.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;