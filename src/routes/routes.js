import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/index.js'
import CadastroPage from '../pages/cadastro/index.js'
import NotasPage from '../pages/notas/index.js'


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/notas" element={<NotasPage />}/>
            <Route path="/cadastro" element={<CadastroPage />}/>
        </Routes>
    )
}

export default AppRoutes