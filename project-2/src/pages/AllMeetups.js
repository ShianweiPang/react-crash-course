import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://t4.ftcdn.net/jpg/05/29/21/05/360_F_529210582_dnPgF7wC6c1LptEwW0PbQ7A1cqTvfx73.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://t4.ftcdn.net/jpg/05/29/21/05/360_F_529210582_dnPgF7wC6c1LptEwW0PbQ7A1cqTvfx73.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
}

export default AllMeetupsPage;