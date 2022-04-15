import React from "react";

export default (props) => {

    return(
        <div className={props.classe} onClick={() => { props.click(props.valor) }}>
            <img src={'d' + props.dado + '.png'} alt="" style={props.selected ? {boxShadow:'0px 0px 5px 5px rgba(50, 50, 50, 0.77)'} : {}}  ></img>
            <h1 className={"numero-dado" + props.dado2}>{props.num}</h1>
        </div>
    )
}
    