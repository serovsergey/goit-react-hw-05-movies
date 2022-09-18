import axios from "axios"

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/';
// const GENRES_CACHE_KEY = 'genres';
// const GENRES_TTL = 1000 * 60 * 60 * 24 * 30;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd211d18bbdd8eeb23b9914a8b27a6ac5',
  }
})

const getTrending = async (page, timeWindow = 'day') => {
  const params = {};
  if (page) {
    params.page = page;
  }
  return (await instance.get(`/trending/movie/${timeWindow}`, { params })).data;
}

const searchMovies = async (query, page) => {
  const params = {
    query,
  }
  if (page) {
    params.page = page;
  }
  return (await instance.get(`/search/movie`, { params })).data;
}

// const getCachedGenres = async (forceUpdate = false) => {
//   let genres_cache = localStorage.getItem(GENRES_CACHE_KEY);
//   try {
//     genres_cache = JSON.parse(genres_cache);
//   }
//   catch
//   {
//     genres_cache = null
//   }
//   if (forceUpdate || !genres_cache || !genres_cache.timestamp || genres_cache.timestamp + GENRES_TTL < Date.now()) {
//     try {
//       genres_cache = (await axios.get(`/genre/movie/list`)).data.genres;
//     }
//     catch (e) {
//       console.error(e.message);
//       return null;
//     }
//     genres_cache = { genres: genres_cache, timestamp: Date.now() };
//     localStorage.setItem(GENRES_CACHE_KEY, JSON.stringify(genres_cache));
//   }
//   return genres_cache.genres;
// }

// const processedResult = movieInfo => {
//   const genresData = getCachedGenres();
//   let genres;
//   console.log(movieInfo)
//   if (genresData) {
//     genres = movieInfo.genre_ids.map(genreId => genresData.find(el => el.id === genreId).name);
//   }
//   else {
//     genres = [...movieInfo.genre_ids];
//   }
//   const releaseDate = movieInfo.release_date || movieInfo.first_air_date;

//   return {
//     id: movieInfo.id,
//     genres,
//     title: movieInfo.title || movieInfo.name,
//     overview: movieInfo.overview,
//     poster_path: IMAGES_BASE_URL + 'w400' + movieInfo.poster_path,
//     releaseYear: releaseDate ? new Date(releaseDate).getFullYear() : 0,
//     original_title: movieInfo.original_title,
//     popularity: movieInfo.popularity,
//     vote_average: movieInfo.vote_average,
//     vote_count: movieInfo.vote_count,
//     timestamp: Date.now(),
//   }
// }

const getMovieDetails = async movieId => {
  return (await instance.get(`/movie/${movieId}`)).data;
  // return processedResult((await instance.get(`/movie/${movieId}`)).data);
}

const getMovieCredits = async movieId => {
  return (await instance.get(`/movie/${movieId}/credits`)).data;
}

const getMovieReviews = async movieId => {
  return (await instance.get(`/movie/${movieId}/reviews`)).data;
}
export { getTrending, searchMovies, getMovieDetails, getMovieCredits, getMovieReviews, IMAGES_BASE_URL }
