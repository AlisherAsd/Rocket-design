import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import WorksPage from './components/workspage/WorksPage';
import Reviews from './components/reviews/Reviews';
import OrderPage from './components/orderpage/OrderPage';
import SignInPage from './components/profile/SignIn';
import RegisterPage from './components/profile/RegisterPage';
import ProfilePage from './components/profile/Profile';


function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/works' element={<WorksPage />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
