import { Link } from "react-router-dom"

// import CSS before it is render
// the naming 'classes' can be anything
import mainnav_css from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={mainnav_css.header}>
            <div className={mainnav_css.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>Favourites</Link>
                    </li>

                </ul>
            </nav>

        </header>
    )
}
/* Using Link tag to prevent default where anchor tag will request from server */

export default MainNavigation;