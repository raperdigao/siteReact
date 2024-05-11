import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import ProdutosPage from "../Components/Pages/ProdutosPage/ProdutosPage";
import HomePage from "../Components/Pages/HomePage/HomePage";




const Rotas = () => {
    return(
        // Resposnavel para buscar rotas dentro do React
     <BrowserRouter>
     
     <Nav />

     <Routes>
        <Route element={<ProdutosPage />} path={"/ProdutosPage"} />
        <Route element={<HomePage />} path={"/"} />
     </Routes>

     </BrowserRouter>
    );
};

export default Rotas;