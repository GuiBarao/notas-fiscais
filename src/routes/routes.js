import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/index.js'
import NotasPage from '../pages/notas/index.js'


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/notas" element={<NotasPage />}/>
        </Routes>
    )
}

export default AppRoutes