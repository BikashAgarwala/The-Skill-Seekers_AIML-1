import './App.css'
import { Route, Routes } from "react-router-dom"; 

import Home from './components/Home/Home';

// import { ToastContainer } from 'react-toastify';
// import { AuthProvider } from './contextApi/ContextApi';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Chatbot/MainPage'


function App() {
  return (
    <>
      <div className=''>
        <Navbar />
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path = '/chatbot' element={<MainPage />} />
        </Routes>
        </div>
    </>
  )
}

export default App