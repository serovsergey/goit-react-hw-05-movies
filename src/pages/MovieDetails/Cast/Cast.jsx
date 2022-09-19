import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import noImage from '../../../assets/no-image.svg';

import s from './Cast.module.scss';
import * as API from '../../../services/tmdbAPI';
import Loader from 'components/common/Loader';

export const Cast = (props) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setCast([]);
        const data = (await API.getMovieCredits(params.movieId)).cast;
        if (data.length) {
          setCast(data);
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
    <Loader />
  }

  if (!cast.length) {
    return (
      <div>No info about cast.</div>
    );
  }
  return (
    <ul className={s.list}>
      {cast.map(({ id, character, name, profile_path }) => (
        <li key={id}>
          <p>{name}</p>
          <img src={profile_path ? API.IMAGES_BASE_URL + 'w154' + profile_path : noImage} alt={name} />
          <p>
            <b>Character:</b> {character}
          </p>
        </li>
      ))}
    </ul>
  )
};

// Cast.propTypes = {};

// adult: false
// cast_id: 2
// character: "Julia Sturges"
// credit_id: "52fe46d99251416c75085817"
// gender: 1
// id: 14974
// known_for_department: "Acting"
// name: "Barbara Stanwyck"
// order: 1
// original_name: "Barbara Stanwyck"
// popularity: 8.741
// profile_path:  "/y9BX4FNoFBjP2HPcs8rlzqXjJbu.jpg"
