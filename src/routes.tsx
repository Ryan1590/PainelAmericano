
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Produto from './pages/Produto';
import PaginaDeExemplo from './PaginaDeExemplo';


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/produto/:id' element={<Produto />} />
                <Route path='/PaginaDeExemplo' element={<PaginaDeExemplo />} />
            </Routes>
        </BrowserRouter>
    );
}
