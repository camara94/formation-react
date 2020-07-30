import React from 'react';

const Toto = ( props ) => {
    const btnToto = props.data.messageMaman !== null ? (<button onClick={props.reponse} >Réponse</button>): (<button disabled>Réponse</button>);
    const rep = props.data.messageToto !== null ? (<p> <img src='./enfant.jpg' alt="toto"/> <br /> {props.data.messageToto} </p>): (<p></p>)
    return (
        <div>
            <h1>Toto</h1>
            {btnToto}
            {rep}
        </div>
    );
}

export default Toto;