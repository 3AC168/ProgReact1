import React from "react";
import Bouton from '../../../components/Bouton/Bouton';

const Livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Bouton typeBtn="btn-warning" click={() => console.log('Modification')}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" click={(props.suppression)}>Supprimer</Bouton></td>
    </>
)

export default Livre;

/*En JSX, si on va simplement retourner une seule information, on utilise, donc un balise <> vide. A JSX expression must have exactly one outermost element */