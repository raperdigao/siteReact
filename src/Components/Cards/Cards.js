import React from 'react';
import './cards.css'

const Cards = ({
    tituloCard,
    paragrafoCard,
    buttonCard
}

) => {
    return (
       
            <div className='allCards'>
                <div className='card'>
                    <h1 className='card_text'>
                        {tituloCard}
                    </h1>
                    <p className='card_info'>
                        {paragrafoCard}

                    </p>
                    <button className='card_button'>
                        {buttonCard}
                    </button>
                </div>
            </div>

        
    );
};

export default Cards;