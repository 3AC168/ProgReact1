import React, { Component } from 'react';
import TitreH1 from './components/Titres/TitreH1';
import Button from './components/Bouton/Bouton';
import Livres from './containers/Livres/Livres';

class App extends Component {
  state = {
    ajoutLivre: false
  }

  handleClicAjoutLivre = () => {
    this.setState((oldState, props) => {
      return { ajoutLivre: !oldState.ajoutLivre }
    })
  }

  render() {
    return (
      <div className="container">
        <TitreH1>Page listant les livres</TitreH1>  {/*option2 <TitreH1 texte="Page listant les livres" />*/}
        <Livres ajoutLivre={this.state.ajoutLivre} />
        <Button
          typeBtn="btn-success w-100"
          click={this.handleClicAjoutLivre}>
          {!this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}
        </Button> {/*Option Matthieu Gaston <Button typeBtn="btn-success" css="w-100" */}
      </div>
    );
  }
}

export default App;



