import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound from '../../pages/not-found/not-found';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { Path } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../private-route/const';
import FilmList from '../../pages/film-list/film-list';

const { Main, SignIn, Films, Player, NotFound, FilmList } = Path;

type AppProps = {
  filmName: string;
  yearFilm: number;
  filmGenre: string;
}

function App({ filmName, yearFilm, filmGenre }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main}>
          <Route index element={<Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre} />} />
          <Route path={SignIn} element={<SignIn />} />
          <Route path={Films.Main}>
            <Route index element={<MoviePage />} />
            <Route path={Films.Review} element={<AddReview />} />
          </Route>
          <Route path={Player} element={<Player />} />
          <Route path={FilmList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FilmList />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
