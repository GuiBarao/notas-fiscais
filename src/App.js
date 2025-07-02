import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from './components/toast/index.js'
import AppRouter from './routes/routes.js'

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
            <ToastProvider/>
        </BrowserRouter>
    )
}

export default App