import React from "react";
import Dado from './Dado';


export default props =>{

    function projetaDados(){
        var cont1 = 0
        var cont2 = 0
        var val = props.valores.slice(0).reverse()
        var ppk = val.map(val =>{
            cont1++
            var dado = parseInt(Object.keys(val)[0])
            return <div key={cont1} className="item-hist"> {
                    val[dado].map(num =>{
                        cont2++
                        return <Dado key={cont2} dado={dado} classe={"dado-pequeno"} num={num} dado2={dado}/>
                    })
                } </div>
        })
        return ppk
    }


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

} 
   