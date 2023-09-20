import './App.css';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Header
                
              />
       <Register
          
        />
      :
        <Login
          
        />       

      <PageNotFound />        
    </div>
  );
}

export default App;
