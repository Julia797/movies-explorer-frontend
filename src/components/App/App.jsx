import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={
          <>
            <Header 
              name='home' />
            <Main 
              name='mainHomePage' />
            <Footer />
          </>
        } />
      
      <Route path='/sign-up' element={
          
          <Main
            name='mainSignUp'
            /> 
        
      } />     

      <Route path='sign-in' element={
        
          <Main
            name='mainSignIn'
          />   
        
      } />  
      
      <Route path='/sign-up' element={
          
          <Main
            name='mainSignUp'
            /> 
        
      } />

      <Route path='/profile' element={
          
          <Main
            name='mainProfile'
            /> 
        
      } />   

      <Route path='*' element={
          
            <Main name='pageNotFound' />
          
        } />
        
      </Routes>        
    </div>
  );
}

export default App;
/*<Profile
> 
<Register
          
/>

<Login
  
/>   




<Route path='/sign-up' element={
          
            <Main
              name='MainSignUp'
              /> 
          
        } />     

        <Route path='sign-in' element={
          
            <Main
              name='MainSignIn'
            />   
          
        } />  

*/