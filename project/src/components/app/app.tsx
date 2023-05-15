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
import MyList from '../../pages/film-list/film-list';

const { MainPage, Login, Films, PlayerPage, PageNotFound, MyListPage } = Path;

type AppProps = {
  filmName: string;
  yearFilm: number;
  filmGenre: string;
}

function App({ filmName, yearFilm, filmGenre }: AppProps): JSX.Element {
  return <Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre} />;
}

export default App;
