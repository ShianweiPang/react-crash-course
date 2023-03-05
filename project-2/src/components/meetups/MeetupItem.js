import Card from '../ui/Card.js'
import meetupitem_css from './MeetupItem.module.css'

function MeetupItem(props) {
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
                    <button>To Favourite</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;