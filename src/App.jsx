import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/jobs" exact element={<Jobs />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
