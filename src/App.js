
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      {/* <Switch> */}
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/menu"  element={<Menu/>} />
      {/* </Switch> */}
      </Routes>
       <Footer/> 
    </Router>
    </div>
  );
}

export default App;
