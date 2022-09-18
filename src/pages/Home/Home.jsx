import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import * as API from '../../services/tmdbAPI';

// import s from './Home.module.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import { Pagination } from 'components/Pagination';
import Loader from 'components/common/Loader';

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setMovies([]);
        const data = await API.getTrending(page);
        if (data.results.length) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
      }
      catch (e) {
        console.log(e)
      }
      finally {
        setIsLoading(false);
      }
    })();
  }, [page])

  const gotoPage = pageNum => {
    setSearchParams(Number(pageNum) === 1 ? {} : { page: pageNum })
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2>
        Trending Movies
      </h2>
      {!!movies.length && <MovieList items={movies} state={location} />}
      <Pagination page={page} total_pages={totalPages} onNavigate={gotoPage} />
    </>
  )
};

// Home.propTypes = {};

export default Home;
