import React, { Component, Fragment } from 'react';
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

   plusdixans = () => {
      const updateValues = this.state.voitures.map((v) => {
          return v.year -= 10;
       })

       this.setState({ updateValues });
   } 
   
    render() {

        let year = new Date().getFullYear();

        let lesCards = this.state.voitures.map( (voiture, index) => {
            return (
                <Fragment key={index}>
                   <Cars color={voiture.color}
                   year={ 
                    ((year - voiture.year) > 1)? (year - voiture.year) + ' ans' : (year - voiture.year) + ' an'}
                    nom={voiture.nom}
                    />
                </Fragment>
            );
        });
        return (
            <>
                <h1> {this.props.title} </h1>
                <button onClick={this.plusdixans}> + 10 ans </button>
                <table className="carsTable">
                    <tr>
                        <th>Nom</th>
                        <th>Couleur</th>
                        <th>Année</th>
                    </tr>
                    {lesCards}
                </table>
            </>
        );
    }
}

export default MyCars;