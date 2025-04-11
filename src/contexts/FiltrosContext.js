import { createContext, useState, useContext } from "react";

const Filtros = createContext();

function FiltrosProvider ({ children }) {

    const [filtroTitular, setFiltroTitular] = useState("");
    const [filtroCpf, setFiltroCpf] = useState("");

    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState("");

    const [filtroStatus, setFiltroStatus] = useState("");

    const [filtroFiliais, setFiltroFiliais] = useState([]);

    const [filtroDataInicio, setFiltroDataInicio] = useState(null);
    const [filtroDataFim, setFiltroDataFim] = useState(null);

    return (
        <Filtros.Provider value={{
            filtroTitular, setFiltroTitular,
            filtroCpf, setFiltroCpf,
            filtroNumero, setFiltroNumero,
            filtroValorMin, setFiltroValorMin,
            filtroValorMax, setFiltroValorMax,
            filtroStatus, setFiltroStatus,
            filtroFiliais, setFiltroFiliais,
            filtroDataInicio, setFiltroDataInicio,
            filtroDataFim, setFiltroDataFim
        }}>

            {children}
        
        </Filtros.Provider>

    );
}

const useFiltros = () => useContext(Filtros);

export { FiltrosProvider, useFiltros };