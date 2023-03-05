import Card from '../ui/Card';
import form_css from './NewMeetup.module.css';

function NewMeetup() {
    return (
        <Card>
            <form className={form_css.form}>
                <div className={form_css.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" required id="title" autocomplete="off"></input>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='iamge'>Image</label>
                    <input type="url" required id="iamge" autocomplete="off"></input>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" autocomplete="off"></input>
                </div>
                <div className={form_css.control}>
                    <label htmlFor='title'>Meetup Description</label>
                    <textarea required id="description" rows='5'></textarea>
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