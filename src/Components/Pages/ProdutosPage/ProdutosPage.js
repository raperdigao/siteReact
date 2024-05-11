import React from 'react';
import { produtos } from '../../../Utils/Produtos';


const ProdutosPage = () => {
    return (
        <div>
            <h1>
                Essa é a página de produtos!!!
            </h1>
            {produtos.map((produtoss) => {
                return (
                    <>
                    <div>

                        <p>Id: {produtoss.idProduto}</p>
                        <p>Descrição: {produtoss.descricao}</p>
                        <p>Preço: {produtoss.preco}</p>
                        <p>Promoção: {produtoss.promo ? "Sim" : "Não"}</p>
                    </div>
                    </>
                )
            })}




        </div>
    );
};

export default ProdutosPage;