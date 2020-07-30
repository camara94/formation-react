import React from 'react';

const Cars = (props) => {
    console.log(props);
    const colorinfo = (props.color)? (<p>Couleur: { props.color } </p>) : (<p>Couleur: Néant </p>);
    const anneeInfo = ( props.year )? (<p>Année: {props.year}</p>) : null; 
    return (
        <div  style = { { backgroundColor: props.color, padding:'10px', margin: '5px auto', width: '250px' } }>
            <p>Marque: { props.nom } </p>
            {anneeInfo}
            {colorinfo}
        </div>
    )
}

export default Cars;