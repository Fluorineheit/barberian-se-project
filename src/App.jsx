import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import OrderPage from './pages/OrderPage';
import Choice from './pages/ChoicePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Route path='/choice' element={<Choice />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
