import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as API from '../../services/tmdbAPI';
import noImage from '../../assets/no-image.svg';

import s from './MovieDetails.module.scss';
import Loader from 'components/common/Loader';

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await API.getMovieDetails(params.movieId);
        // console.log(data)
        if (data) {
          setMovieDetails(data);
        }
      }
      catch (e) {
        console.log('error')
      }
      finally {
        setIsLoading(false);
      }
    })();
  }, [params.movieId])

  if (isLoading) {
    return <Loader />
  }

  if (!movieDetails) {
    return;
  }

  const getLinkClassName = ({ isActive }) => s.tab + (isActive ? " " + s.active : "");

  const { title, poster_path, overview, release_date, first_air_date, vote_average, genres } = movieDetails;
  const releaseDate = release_date || first_air_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : 0;
  const userScore = (vote_average * 10).toFixed(0);
  const genresString = genres.map((({ name }) => name)).join(' ');


  return (
    <div >
      <Link to={location?.state?.from ?? '/movies'} className={s.link}> Go Back</Link>
      <div className={s.info}>
        <img src={poster_path ? API.IMAGES_BASE_URL + 'w342' + poster_path : noImage} alt={title} className={s.poster} />
        <div>
          <h2>{title} {releaseYear && `(${releaseYear})`}</h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </div>
      </div>

      <hr />
      <h3>Additional Information:</h3>
      <ul className={s.btnList}>
        <li><NavLink to={`/movies/${params.movieId}/reviews`} state={location.state} className={getLinkClassName}>Reviews</NavLink></li>
        <li><NavLink to={`/movies/${params.movieId}/cast`} state={location.state} className={getLinkClassName}>Cast</NavLink></li>
      </ul>
      {/* <hr /> */}
      <Outlet />
    </div>
  )
};

// MovieDetails.propTypes = {};

export default MovieDetails;
