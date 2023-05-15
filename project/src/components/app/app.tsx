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

const { MainPage, Login, Films, PlayerPage, NotFoundPage, MyList } = Path;

type AppProps = {
  filmName: string;
  yearFilm: number;
  filmGenre: string;
}

function App({ filmName, yearFilm, filmGenre }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MainPage}>
          <Route index element={<Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre} />} />
          <Route path={Login} element={<SignIn />} />
          <Route path={Films.MainPage}>
            <Route index element={<MoviePage />} />
            <Route path={Films.Review} element={<AddReview />} />
          </Route>
          <Route path={PlayerPage} element={<Player />} />
          <Route path={MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FilmList />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={NotFoundPage} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
