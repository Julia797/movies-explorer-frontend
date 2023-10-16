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
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function Main({ name, handleMovieLike, handleDeleteMovie, saveMovies, handleRegister, handleLogin, outOfAccount, handleButtonEditClick, isOpenEdit, setIsOpenEdit, handleUpdateUser, isErrorAll, isSuccessful }) {
  return (
    <main className="main">
      {name ==='mainHomePage' ?
        <><Promo /><AboutProject /><Techs /><AboutMe /><Portfolio /></>
      :
      name ==='mainSignUp' ?
        <Register 
          handleRegister={handleRegister}
          isErrorAll={isErrorAll}
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
        isSuccessful={isSuccessful}
      />
      :
      name ==='mainMovies' ?
      <Movies
        saveMovies={saveMovies}
        handleMovieLike={handleMovieLike}
      />
      :
      name ==='mainSavedMovies' ?
      <SavedMovies 
        saveMovies={saveMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
      :
       <PageNotFound />
      }
    </main>
  );
}

export default Main;

