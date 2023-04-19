import NewMeetup from "../components/meetups/NewMeetup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewMeetupPage() {
    const navigate = useNavigate();
    const mssql_fastapi_url = 'http://localhost:8000/api/meetups/'
    function addMeetupHandler(meetupData) {
        const data = meetupData;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        axios.post(mssql_fastapi_url, data, config)
            .then(response => {
                // Handle success
                console.log(response.data);
                navigate('/')
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    }

    return (
        <div>
            <h2>Add New Meetup</h2>
            <NewMeetup onAddMeetup={addMeetupHandler} />
        </div>

    )
}

export default NewMeetupPage;