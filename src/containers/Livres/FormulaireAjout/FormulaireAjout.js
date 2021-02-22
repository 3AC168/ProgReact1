import React, { Component } from "react";
import Bouton from '../../../components/Bouton/Bouton';

class FomulaireAjout extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }
    handleValidationForm = (event) => {
        event.preventDefault();  // Ne marche pas pour moi
        //console.log(this.state.titreSaisi + " " + this.state.auteurSaisi + " " + this.state.nbPagesSaisi)
        this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Sigmar One' }}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre</label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.titreSaisi} // composant controlé
                            onChange={(event) => this.setState({ titreSaisi: event.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text"
                            className="form-control"
                            id="auteur"
                            value={this.state.auteurSaisi}
                            onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages</label>
                        <input type="number"
                            className="form-control"
                            id="nbPages"
                            value={this.state.nbPagesSaisi}
                            onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })}
                        />
                    </div>
                    <Bouton typeBtn="btn-primary" click={this.handleValidationForm}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FomulaireAjout;