import React from "react";

export default (props) => {

    return(
        <div className="nome-valor"> {/* style={{display: "inline-block"}} */}
            <div className="nomeNV" style={props.bold == true ? {fontWeight: 'bold'}: {}}>{props.nome}</div>
            <div className="valEgrauNV">
                <div className="valNV">{props.valor}</div>
                {props.grau != undefined ? <div className="grauNV">{props.grau}</div> : <></>} 
            </div>
        </div>
    )
}
    