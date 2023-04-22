import { createContext, useState } from "react";

// the createContext() function will in the end create a React Components, and React Components naming convention normally starts with capital letter.
// thus naming for the variable starts with a capital "F"
// createContext take argument which is the initial state for the context
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
});

// Regular react component
// Providing this context to all components that are interested listening to the value
// Responsible to update the context value
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    function addFavoriteHandler(favoriteMeetup) {
        // this is a better way of updating the state, if today your updating function is depending on the last state of the item
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    // exposing function using context
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;