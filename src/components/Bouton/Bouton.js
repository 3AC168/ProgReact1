import React from "react";

const button = (props) => {
    const btnCss = `btn ${props.typeBtn}`; //Option Matthieu GASTON const btnCss = `btn ${props.typeBtn} ${props.css}`
    return <button className={btnCss} onClick={props.click}>{props.children}</button>
};

export default button;