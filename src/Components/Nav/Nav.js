import React from 'react';
// Para importar a bilioteca de Links do react router dom
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
       <link to={"/"}>Home</link>
       <link to={"ProdutosPage"}>Página de Produtos</link>
      </nav>
    );
};

export default Nav;