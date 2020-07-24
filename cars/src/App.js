import React, {Component} from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {


  titre = 'Mon Catalogue de Voiture';
   
  render() {
    return (
      <div className="App">
          <MyCars title={this.titre} />
      </div>
    );
  }
}

export default App;
