import React, { Component, Fragment } from 'react';
import Car from './Car';

class Form extends Component {
    state = {
        pseudo: null,
        couleurs: ['', 'red', 'green', 'yellow', 'black'],
        couleur: null,
        comment: null
    };

    inputEvent = (e) => {
        this.setState(
            {
                pseudo: e.target.value
            }
        )
        console.log(e.target.value)
    };

    handlerColor = e => {
        this.setState(
            {
                couleur: e.target.value
            }
        )
        console.log(e.target.value)
    };

    handlerComment = e => {
       this.setState({ comment: e.target.value })
    }

    sumitHandler = e => {
        e.preventDefault();
        console.log(`Pseudo: ${this.state.pseudo} Couleur: ${this.state.couleur} Commentaire: ${this.state.comment}`)
    }


    render () {
        let options = this.state.couleurs.map( (opt, i) => {
            return (
                <Fragment key={i} >
                    <option value={opt} > {opt} </option>
                </Fragment>
            )
        } );
        return (
            <div style={{width: '450px', margin: '5px auto'}}>
                <Car />
                <h1>Commentaire</h1>
                <form onSubmit={this.sumitHandler}>
                    <label for="pseudo">Pseudo: </label>
                    <input id="pseudo" type="text" value={this.state.pseudo} onChange={this.inputEvent} /> <br />
                    <label for="couleur">Couleurs: </label>
                    <select id="couleur" value={this.state.couleur} onChange={this.handlerColor}>
                        {options}
                    </select><br/>
                    <label for="comment">Commentaire: </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handlerComment} ></textarea><br /> 
                    <button type="submit">Valider</button>
                </form>
            </div>
        );
    }
}   

export default Form;