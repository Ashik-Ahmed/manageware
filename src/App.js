import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/Products/ProductDetail';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddItems from './components/Inventory/AddItems';
import MyItems from './components/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='product/:id' element={
          <RequireAuth>
            <ProductDetail/>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>

        <Route path='/add-item' element={
          <RequireAuth>
            <AddItems/>
          </RequireAuth>
        }></Route>

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
