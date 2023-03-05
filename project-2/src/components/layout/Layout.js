import MainNavigation from "./MainNavigation";
import layout_css from "./Layout.module.css"

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={layout_css.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;

