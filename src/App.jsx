import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import OrderPage from './pages/OrderPage';
import Choice from './pages/ChoicePage';
import Profile from './pages/Profile';
import Reviews from './pages/Reviews';
import Maps from './pages/Maps';
import Products from './pages/Products';
import Booking from './pages/Booking';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicePage from './pages/ServicePage';
import Schedule from './pages/Schedule';
import ManageAccount from './pages/ManageAccount';
import UserFavorites from './pages/UserFavorites'
import UserReviews from './pages/UserReviews'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/order' element={<OrderPage />}></Route>
        <Route path='/services' element={<ServicePage />}></Route>
        <Route path='/choice' element={<Choice />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/maps' element={<Maps/>}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/schedule' element={<Schedule/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/manage-account' element={<ManageAccount/>}></Route>
        <Route path='/favorite' element={<UserFavorites/>}></Route>
        <Route path='/your-reviews' element={<UserReviews/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
