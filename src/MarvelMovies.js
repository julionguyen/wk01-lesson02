import React from "react";
import Movie from "./Movie";

const movies = [
    "Black Widow",
    "Iron Man",
    "Spider Man: Into the SPider-verse",
    "Captain America",
    "The Avengers"
    ]
class MarvelMovies extends React.Component {
    render() {
        return (
            <>
                {movies.map((movie,index) =>
                    <Movie key={index} title={movie} />
                )}
            </>
        )
    }

}

export default MarvelMovies