import React, { Component } from 'react';
import Car from './Car';

class Form extends Component {
    render () {
        return (
            <div style={{width: '450px', margin: '5px auto'}}>
                <Car />
                <h1>Commentaire</h1>
                Formulaire
            </div>
        );
    }
}   

export default Form;