import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import FichaInGame from "./Paginas/Fichas/FichaInGame";
import EscolhePersonagem from "./Paginas/EscolhaPersonagem/EscolhePersonagem"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EscolhePersonagem/>}></Route>
                <Route path="ficha" element={<FichaInGame/>}></Route>
                <Route path="ficha/:nome" element={<FichaInGame/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas