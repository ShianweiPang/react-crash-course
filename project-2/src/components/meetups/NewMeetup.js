import { useRef, useState } from 'react';
import Card from '../ui/Card';
import form_css from './NewMeetup.module.css';

function NewMeetup(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    const scheduleInputRef = useRef();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (e) => {
        if (!e.target['validity'].valid) return;
        const date = e.target['value'] + ':00Z';
        setSelectedDate(date);
    };

    // function handleChange(ev) {
    //     if (!ev.target['validity'].valid) return;
    //     const dt= ev.target['value'] + ':00Z';
    //     setDatetime(dt);
    //   }


    function submitHandler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredDateTime = scheduleInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
            schedule: enteredDateTime
        }
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={form_css.form} onSubmit={submitHandler}>
                <div className={form_css.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" required id="title" autoComplete="off" ref={titleInputRef}></input>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="url" required id="image" autoComplete="off" ref={imageInputRef}></input>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" autoComplete="off" ref={addressInputRef}></input>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='title'>Meetup Description</label>
                    <textarea required id="description" rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='title'>Schedule Time</label>
                    <input type="datetime-local" required ref={scheduleInputRef} value={(selectedDate || '').toString().substring(0, 16)} onChange={handleChange} min={new Date().toISOString().substring(0, 16)} />
                </div>
                <div className={form_css.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetup;
// htmlFor is the normal HTML for attribute just like className