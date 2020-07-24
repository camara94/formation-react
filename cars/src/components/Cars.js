import React from 'react';

const Cars = (props) => {
    const colorinfo = (props.color)? (<p>Couleur: { props.color } </p>): (<p>Couleur: Néant </p>);
    return (
        <div style={ { backgroundColor: 'pink', padding:'10px', margin: '5px auto', width: '250px' } }>
            <p>Marque: { props.children } </p>
            {colorinfo}
        </div>
    )
}

export default Cars;