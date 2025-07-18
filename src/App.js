import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/routes.js'
import { SnackbarProvider } from 'notistack';
function App() {
    return (
        <BrowserRouter>
            <SnackbarProvider maxSnack={3}>
                <AppRouter />
            </SnackbarProvider>
        </BrowserRouter>
    )
}

export default App