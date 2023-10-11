import './Main.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies, savedMovies } from '../../utils/initialMovies';
import SearchFilms from '../SearchFilms/SearchFilms';

function Main({ name, onCardClick, onDeleteClick, cards, onCardLike, isLoading, handleRegister,  handleLogin, outOfAccount, isSending, handleButtonEditClick, isOpenEdit, setIsOpenEdit, handleUpdateUser }) {
 
  return (
    <main className="main">
      {name ==='mainHomePage' ?
        <><Promo /><AboutProject /><Techs /><AboutMe /><Portfolio /></>
      :
      name ==='mainSignUp' ?
        <Register 
          handleRegister={handleRegister}
        />
      :
      name ==='mainSignIn' ?
        <Login 
          handleLogin={handleLogin}
        />
      :
      name ==='mainProfile' ?
        <Profile 
        handleButtonEditClick={handleButtonEditClick}
        isOpenEdit={isOpenEdit}
        setIsOpenEdit={setIsOpenEdit}
        handleUpdateUser={handleUpdateUser}
        outOfAccount={outOfAccount}
        />
      :
      name ==='mainMovies' ?
      <>
        <SearchFilms />
        <MoviesCardList
          movies={movies} />
      </> 
      :
      name ==='mainSavedMovies' ?
      <>
        <SearchFilms />
        <MoviesCardList
          movies={savedMovies} />
      </> 

      :
       <PageNotFound />
      }
    </main>
  );
}

export default Main;