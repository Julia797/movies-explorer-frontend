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

function Main({ name, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteClick, cards, onCardLike, isLoading, handleRegister,  handleLogin, isSending }) {
 
  return (
    <main className="main">
      {name ==='mainHomePage' ?
        <><Promo /><AboutProject /><Techs /><AboutMe /><Portfolio /></>
       
      :
      name ==='mainSignUp' ?
        <Register />
      :
      name ==='mainSignIn' ?
        <Login />
      :
      name ==='mainProfile' ?
        <Profile />
      :
      name ==='pageNotFound' ?
        <PageNotFound />

      :
        <Register />
      }
    </main>
  );
}

export default Main;
