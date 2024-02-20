
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      {/* <Switch> */}
      <Routes>
        <Route path="/"  element={<Home/>} />
      {/* </Switch> */}
      </Routes>
       <Footer/> 
    </Router>
    </div>
  );
}

export default App;
