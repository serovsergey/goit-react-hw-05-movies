import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/tmdbAPI';
import noImage from '../../assets/no-image.svg';
import s from './MovieList.module.scss';

export const MovieList = ({ items, state }) => {
  if (!items.length) {
    return "There are no movies.";
  }
  return (
    <>
      <ul className={s.list}>
        {items.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: state }}>
              <img src={poster_path ? API.IMAGES_BASE_URL + 'w154' + poster_path : noImage} alt={title} />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  })).isRequired,
  state: PropTypes.object,
};
