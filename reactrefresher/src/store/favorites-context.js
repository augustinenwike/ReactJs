import { createContext, useState } from "react";

const FavoritesContext =  createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoritesMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritesMeetup);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetupId !== meetupId);
        });
    }

    function itemIsFavouriteHandler(meetupId) {
        return  userFavorites.some(meetup => meetupId === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;