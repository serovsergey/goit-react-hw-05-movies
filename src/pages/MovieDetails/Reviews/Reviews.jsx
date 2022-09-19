import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import * as API from '../../../services/tmdbAPI';

import s from './Reviews.module.scss';
import { useParams } from 'react-router-dom';
import Loader from 'components/common/Loader';

export const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setReviews([]);
        const data = await API.getMovieReviews(params.movieId);
        // console.log(data)
        if (data.results.length) {
          setReviews(data.results);
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

  if (!reviews.length) {
    return (
      <div>We don't have any reviews for this movie.</div>
    );
  }

  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={s.item}>
          <p className={s.header}>{author}</p>
          <p className={s.content}>{content}</p>
        </li>
      ))}
    </ul>
  )
};

// Reviews.propTypes = {};
