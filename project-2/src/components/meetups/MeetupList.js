import meetuplist_css from './MeetupList.module.css'
import MeetupItem from './MeetupItem';

// this function can be reused at Favorite page and as well as AllMeetup page
// it will just depends on the data source that is passed into this function
function MeetupList(props) {
    return (
        <ul className={meetuplist_css.list}>
            {props.meetups.map((meetup) => {
                return <MeetupItem key={meetup.id} meetup={meetup} />
            })}
        </ul>
    )
}

export default MeetupList;