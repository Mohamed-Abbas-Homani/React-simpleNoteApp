import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route  exact path='/home' Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
