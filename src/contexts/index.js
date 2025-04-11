import { FiltrosProvider } from "./FiltrosContext";


function AppProvider ({ children }) {
    return (
 
        <FiltrosProvider>
            {children}
        </FiltrosProvider>

    );
}

export default AppProvider;