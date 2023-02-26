
import './App.css';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (   <div className="App">
    <Router>
 
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Movie/>}></Route>
    <Route exact path='/About' element={<About/>}></Route>
    </Routes>

    </Router>    </div>
  );
}

export default App;
