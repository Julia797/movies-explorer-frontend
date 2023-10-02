import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={
          <>
            <Header 
              nameHeader='home'  loggedIn={loggedIn} />
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

      <Route path='/movies' element={

        <>
          <Header 
            nameHeader = 'movies'
          />
          <Main
            name='mainMovies' />
          <Footer /></>
      } />  

       <Route path='/saved-movies' element={

        <>
          <Header 
            nameHeader = 'saved-movies'
          />
          <Main
            name='mainMovies' />
          <Footer /></>
      } />   

      <Route path='*' element={
          
            <Main name='pageNotFound' />
          
        } />
            
      </Routes>        
    </div>

  )

}

export default App;
