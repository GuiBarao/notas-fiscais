import {BrowserRouter, Route, Routes} from "react-router-dom";
import Notas from "./pages/Notas";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path = "/" element = {<Notas />}>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;