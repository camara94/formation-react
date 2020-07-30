import React, { Component } from 'react';
import Cars from './Cars';

class MyCars extends Component {

   state = {
       voitures: [
           { nom:'Ford', color: 'lightgray', year: 2017 },
           { nom:'Mercedes', color: 'lightgreen', year: 2011 },
           { nom:'Peugeot', color: 'lightblue', year: 2009 },
           { nom:'Renault 19', color: 'lightpink', year: 2014 }
       ]
   }

   getAnnee = (year) => {
       return (year > 1)? ' ans' : ' an';
   }
   
    render() {

        let year = new Date().getFullYear();

        let lesCards = this.state.voitures.map( (voiture, index) => {
            return (
                <div key={index}>
                   <Cars color={voiture.color}
                   year={ 
                    ((year - voiture.year) > 1)? (year - voiture.year) + ' ans' : (year - voiture.year) + ' an'}
                    nom={voiture.nom}
                    />
                </div>
            );
        });
        return (
            <div>
                <h1> {this.props.title} </h1>
                {lesCards}
            </div>
        );
    }
}

export default MyCars;