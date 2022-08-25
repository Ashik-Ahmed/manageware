import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
