import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import {BrowserRouter, Link, Switch, Route, Routes} from 'react-router-dom';
import Cartpage from './pages/Cartpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <BrowserRouter> {/*npm i react-router-dom@5.2.0*/}

        
          <Route path="/" exact component={Homepage}/>
          <Route path="/cart" exact component={Cartpage}/>
        

      </BrowserRouter>

    </div>
  );
}

export default App;
