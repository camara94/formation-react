import React, { Component } from 'react';
import Cars from './Cars';

class MyCars extends Component {

   noCopy = () => alert('Merci de ne pas copier ce text !!');

   makeChange = (e) => {
       if ( e.target.classList.contains('styled') ) {
           e.target.classList.remove('styled');
       } else {
           e.target.classList.add('styled');
       }
   }

    render() {
        return (
            <div>
                <h1 onMouseEnter={this.makeChange}> {this.props.title} </h1>
                <p onCopy={this.noCopy} style={{ width: '400px', margin: '5px auto' }}>Je n'ai pas reçu l'email d'activation
                Si après 12h de la création de votre compte, vous n'avez toujours pas reçu votre email, cela veut dire que vous vous êtes trompé de votre adresse email, 
                il faut refaire votre compte de nouveau en faisant attention à saisir votre adresse email.</p>
                <Cars color='red'> Ford </Cars>
                <Cars color='green'> Mercedes </Cars>
                <Cars > Peugeot </Cars>
            </div>
        );
    }
}

export default MyCars;