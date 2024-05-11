import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Rotas = () => {
    return(
        // Resposnavel para buscar rotas dentro do React
     <BrowserRouter>
     
     <Nav/>

     <Routes>
        <Route element={<ProdutosPage />} path={"/ProdutosPage"} />
     </Routes>
     </BrowserRouter>
    );
}