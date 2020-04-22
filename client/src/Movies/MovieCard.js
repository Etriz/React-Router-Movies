import React from "react";
// import SavedList from "./SavedList";
import { useParams } from "react-router-dom";

const MovieCard = (props) => {
  const { title, director, metascore, stars } = props.movie;
  const params = useParams();

  if (params.id) {
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map((star) => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div
          className="save-button"
          onClick={(event) => {
            event.preventDefault();

            if (
              !props.savedList.includes(
                props.savedList.find((item) => item.id === Number(props.movie.id))
              )
            ) {
              props.saveMovie(props.movie);
            }
          }}>
          Save
        </div>
      </div>
    );
  } else
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div>Click for more info ...</div>
        </div>
      </div>
    );
};

export default MovieCard;
