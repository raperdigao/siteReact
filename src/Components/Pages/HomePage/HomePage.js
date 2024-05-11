import React from 'react';
import Cards from '../../Cards/Cards';
import './HomePage.css'


const HomePage = () => {
    return (

        
        <div className='cards-flex'>
      

            <Cards 
            tituloCard={"Card 01"}
            paragrafoCard={"Texto 01"}
            buttonCard={"Click 01"}

            />
            <Cards 
            tituloCard={"Card 02"}
            paragrafoCard={"Texto 02"}
            buttonCard={"Click 02"}

            />
            <Cards 
            tituloCard={"Card 03"}
            paragrafoCard={"Texto 03"}
            buttonCard={"Click 03"}

            />

           
            <Cards 
            tituloCard={"Card 04"}
            paragrafoCard={"Texto 04"}
            buttonCard={"Click 04"}

            />
            <Cards 
            tituloCard={"Card 05"}
            paragrafoCard={"Texto 05"}
            buttonCard={"Click 05"}

            />
            <Cards 
            tituloCard={"Card 06"}
            paragrafoCard={"Texto 07"}
            buttonCard={"Click 06"}

            />
                  <Cards 
            tituloCard={"Card 06"}
            paragrafoCard={"Texto 07"}
            buttonCard={"Click 07"}

            />
                  <Cards 
            tituloCard={"Card 08"}
            paragrafoCard={"Texto 08"}
            buttonCard={"Click 08"}

            />
        </div>
    );
};

export default HomePage;