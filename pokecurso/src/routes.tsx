import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
  };
  

export default Rotas;
