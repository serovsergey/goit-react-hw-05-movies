import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// import s from './Movies.module.scss';
import Searchbar from 'components/Searchbar';
import * as API from '../../services/tmdbAPI';
import { MovieList } from 'components/MovieList';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Pagination } from 'components/Pagination';
import Loader from 'components/common/Loader';


const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        setMovies([]);
        setTotalPages(0);

        const res = await API.searchMovies(query, page);
        if (res.results?.length) {
          setMovies(res.results);
          setTotalPages(res.total_pages);
        }
      } catch (e) {

      }
      finally {
        setIsLoading(false);
      }
    })();
  }, [page, query]);

  const handleSearch = query => {
    setSearchParams({ query });
  }

  const gotoPage = pageNum => {
    setSearchParams(prevParams => {
      const params = { ...prevParams };
      if (query) {
        params.query = query;
      }
      if (Number(pageNum) !== 1) {
        params.page = pageNum;
      }
      return params
    });
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <MovieList items={movies} state={location} />
      <Pagination page={Number(page)} total_pages={totalPages} onNavigate={gotoPage} />

    </div>
  )
};

// Movies.propTypes = {};

export default Movies;
