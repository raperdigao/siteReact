import React from 'react';
// Para importar a bilioteca de Links do react router dom
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
       <Link to={"/"}>Home</Link>
       <Link to={"ProdutosPage"}>Página de Produtos</Link>
      </nav>
    );
};

export default Nav;