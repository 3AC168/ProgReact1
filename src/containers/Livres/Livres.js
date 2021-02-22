import React, { Component } from "react";
import Livre from './Livre/Livre';
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';

class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "L'algorithmique selon H2PROG", auteur: "Mathieu GASTON", nbPages: 200 },
            { id: 2, titre: "La France du 19ème", auteur: "Albert PATRICK", nbPages: 500 },
            { id: 3, titre: "Le monde des animaux", auteur: "Marc MERLIN", nbPages: 250 },
            { id: 4, titre: "Le Virus d'asie", auteur: "Tya MILO", nbPages: 120 }
        ]
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(livres => { // on peut utiliser l à la place livres
            return livres.id === id
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab, 1);

        this.setState({ livres: newLivres });
    }

    handleAjoutLivre = (titre, auteur, nbPages) => {
        console.log(titre);
        console.log(auteur);
        console.log(nbPages);
    }

    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livre => {
                                return (
                                    <tr key={livre.id}>
                                        <Livre
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nbPages={livre.nbPages}
                                            suppression={() => this.handleSuppressionLivre(livre.id)}
                                        />
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation={this.handleAjoutLivre} />}
            </>
        );
    }
}

export default Livres;

// {this.props.ajoutLivre && <FormulaireAjout />} is treated dans the case true, is same as we write {this.props.ajoutLivre ? <FormulaireAjout /> : null}