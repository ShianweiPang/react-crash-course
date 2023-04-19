import MeetupList from "../components/meetups/MeetupList";
import axios from 'axios';
import { useState, useEffect } from "react";

function AllMeetupsPage() {
    // if you are trying to call the GET API here, it will make your function become an async functtion
    // an async funcion is no longer a valid JSX component, a valid one should be directly returing the JSX elements
    // but we cant defer returning a value until we have a response
    // so can use temp JSX component like spinning loader
    // whenever state change, it will reevaluate the code and repeat the same code, to prevent infinite loop we use useHook
    const [isLoading, setIsLoading] = useState(true); // iniital loading state is true
    const [loadedMeetups, setLoadedMeetutps] = useState([]);

    function getMeetupHandler() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        axios.get(mssql_fastapi_url, config)
            .then(response => {
                setIsLoading(false);
                setLoadedMeetutps(response.data.meetups);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        getMeetupHandler();
    }, [])


    const mssql_fastapi_url = 'http://localhost:8000/api/meetups/'

    if (isLoading) {
        return (
            <section>
                <p>Loading..</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;