import React from "react";
import "./style.css";
import "../../styles/colors.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

const Movie = ({ title, release_date, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' } alt={title} />
        
        <div className="movie-info">
            <div>
                <h3>{title}</h3>
                <small>({release_date})</small>
            </div>
            <div>
                <span className={
                    `tag ${setVoteClass(vote_average)}`
                    }>
                    {vote_average}
                </span>            
            </div>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
    );

export default Movie;