import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/routes.js'

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App