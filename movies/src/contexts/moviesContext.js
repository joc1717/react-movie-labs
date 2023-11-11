import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])

  const [myReviews, setMyReviews] = useState({})

  const [watchList, setwatchList] = useState([])

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    }
    else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };
  console.log(myReviews);

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter(
      (mId) => mId !== movie.id
    ))
  };

  const addToWatchList = (movie) => {
    let newWatchList = []
    if (!watchList.includes(movie.id)) {
      newWatchList = [...watchList, movie.id]
    }
    else {
      const index = watchList.indexOf(movie.id)
      newWatchList = [...watchList]
      newWatchList.splice(index, 1)
    }
    console.log(newWatchList)
    setwatchList(newWatchList)
  }

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchList,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;