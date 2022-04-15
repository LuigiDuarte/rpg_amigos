import React, {useState, forwardRef, useImperativeHandle} from "react";
import Dado from './Dado';


const ResultadoPrinc = forwardRef((props,ref) =>{

    const [transformado, setTrans] = useState("transformado")
    
    function projetaDados(){
        var cont = 0
        var la = props.valores.map(val =>{
            cont++
            return <Dado key={cont} dado={props.dado} classe={"dado-normal " + transformado} num={val} dado2={props.dado}/>
        })
        return la
    }

    useImperativeHandle(ref, () => ({
        girarDado: () => girar(),
    }));

    const girar = () => {
        if(transformado === "transformado"){
            setTrans("normal")
            props.onTrans("normal")
        }else{
            setTrans("transformado")
            props.onTrans("transformado")
        }
    };

    return(
        <>
            { props.valores !== undefined ?
                <>
                    {projetaDados()}
                    {}
                </>
            :
                <></>
            }
            
        </>
    )

})

export default ResultadoPrinc
   