import React from "react";
import d4 from "./imgs/d4.png"
import d6 from "./imgs/d6.png"
import d8 from "./imgs/d8.png"
import d10 from "./imgs/d10.png"
import d12 from "./imgs/d12.png"
import d20 from "./imgs/d20.png"

export default (props) => {

    function dadoSelect(){
        let dadoVez
        if (props.dado == 4){
            dadoVez = d4
        }else if(props.dado == 6){
            dadoVez = d6
        }else if(props.dado == 8){
            dadoVez = d8
        }else if(props.dado == 10){
            dadoVez = d10
        }else if(props.dado == 12){
            dadoVez = d12
        }else if(props.dado == 20){
            dadoVez = d20
        }
        return dadoVez
    }

    return(
        <div className={props.classe} onClick={() => { props.click(props.valor) }}>
            <img src={dadoSelect()} alt="" style={props.selected ? {boxShadow:'0px 0px 5px 5px rgba(50, 50, 50, 0.77)'} : {}}  ></img>
            <h1 className={"numero-dado" + props.dado2}>{props.num}</h1>
        </div>
    )
}
    