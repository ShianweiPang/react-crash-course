import card_css from './Card.module.css'

// props.children will take its children component and then display
function Card(props) {
    return <div className={card_css.card}>
        {props.children}
    </div>;
}

export default Card;