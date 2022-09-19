import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { MovieDetails } from "pages/MovieDetails";
// import { Home } from "../pages/Home";
// import { Movies } from "../pages/Movies";
import { Cast } from "../pages/MovieDetails/Cast";
import { Reviews } from "../pages/MovieDetails/Reviews";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route exact path="cast" element={<Cast />} />
          <Route exact path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
