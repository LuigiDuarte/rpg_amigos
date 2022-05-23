import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default () =>{

    const [nome,setNome] = useState("Mauro Nunes") 
    const navigate = useNavigate();

    function envia(event){
        event.preventDefault();
        navigate("/ficha/" + nome)
    }

    function muda(event){
        setNome(event.target.value)
    }

    return(

        <div className="container-escolha">
            <h5 className="mb-3">Escolha o Personagem</h5>
            <form onSubmit={envia}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Mauro Nunes" checked={nome === "Mauro Nunes"} onChange={muda} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Mauro Nunes
                        </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Maya Shizuri" checked={nome === "Maya Shizuri"} onChange={muda}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Maya Shizuri
                    </label>
                </div>
                <div className="col-12 d-flex justify-content-center mt-3">
                    <button className="btn btn-dark" type="submit">Jogar</button>
                </div>
            </form>
            
        </div>

    )
}
    