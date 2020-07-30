import React from 'react';

const Cars = (props) => {
    console.log(props);
    const colorinfo = (props.color)? (`Couleur: ${ props.color }`) : ('Couleur: Néant');
    const anneeInfo = ( props.year )? (`Année: ${props.year}`) : null; 
    return (
        <tr>
            <td>Marque: { props.nom } </td>
            <td>{colorinfo}</td>
            <td>{anneeInfo}</td>
        </tr>
    )
}

export default Cars;