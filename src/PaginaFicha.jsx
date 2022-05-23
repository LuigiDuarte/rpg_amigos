import React, {useState} from 'react';
import NomeValor from './NomeValor';
import FICHAS from './fichasdospersonagens.json'
import imgAtributos from "./imgs/Atributos.jpg"
import imgOrdoRealistas from "./imgs/OrdoRealitasSimbolo.png"

export default (props) => {

    function mudaTamanho() {
        if(document.getElementById("imgAtributos") != undefined){
            var img = document.getElementById("imgAtributos").height
            document.getElementById("containerAtribuitos").style.height = img + 'px'
            var z = img * 100 / 591
            var y = 135 * z/100
            mudaQuad("for",y)
            mudaQuad("agi",y)
            mudaQuad("int",y)
            mudaQuad("pre",y)
            mudaQuad("vig",y)
        }
    }

    function mudaQuad(id,tam){
        document.getElementById(id).style.height = tam + 'px'
        document.getElementById(id).style.width = tam + 'px'
    }

    React.useEffect(() => {
        setTimeout(() => {
            mudaTamanho()
        }, 100);
        window.addEventListener('resize', mudaTamanho)
    })


    function armas(array){
        return array.map(obj =>{
            return (
                <tr key={obj["nome"]}>
                    <td>{obj["nome"]}</td>
                    <td>{obj["tipo"]}</td>
                    <td>{obj["ataque"]}</td>
                    <td>{obj["alcance"]}</td>
                    <td>{obj["dano"]}</td>
                    <td>{obj["critico"]}</td>
                    <td>{obj["recarga"]}</td>
                    <td>{obj["especial"]}</td>
                </tr>
            )
        })
    }

    function pericias(array){
        return array.map(obj =>{
            return (
                <NomeValor key={obj["nome"]} nome={obj["nome"]} valor={obj["valor"]} grau={obj["grau"]}/>
            )
        })
    }


    return(

        props.pag == 1 ? // Página 1

            <div className="ficha-main-content">
                <div style={{marginRight: '10px'}}>
                    
                    <div className='container-status-princ'>
                        <div className="container-info-princ">
                            <div style={{marginBottom: '10px'}}>
                                <h5 className="nome">{FICHAS[props.nome]["nome"]}</h5>
                                <label className='info-geral'><div style={{width: '65px', display:'inline-block'}}>ORIGEM</div>: <span>{FICHAS[props.nome]["info-princ"]["origem"]}</span></label>
                                <label className='info-geral'><div style={{width: '65px', display:'inline-block'}}>CLASSE</div>: <span>{FICHAS[props.nome]["info-princ"]["classe"]}</span></label>
                                <label className='info-geral'><div style={{width: '65px', display:'inline-block'}}>NEX</div>: <span>{FICHAS[props.nome]["info-princ"]["nex"]}</span></label>
                                <label className='info-geral'><div style={{width: '65px', display:'inline-block'}}>PATENTE</div>: <span>{FICHAS[props.nome]["info-princ"]["patente"]}</span></label>
                            </div>
                            <div id='containerAtribuitos' className='container-atribuitos'>
                                <img id="imgAtributos" src={imgAtributos} alt=""/>
                                <div id="for" className='atributo'><h5 >{FICHAS[props.nome]["atributos"]["for"]}</h5></div>
                                <div id="agi" className='atributo'><h5 >{FICHAS[props.nome]["atributos"]["agi"]}</h5></div>
                                <div id="int" className='atributo'><h5 >{FICHAS[props.nome]["atributos"]["int"]}</h5></div>
                                <div id="pre" className='atributo'><h5 >{FICHAS[props.nome]["atributos"]["pre"]}</h5></div>
                                <div id="vig" className='atributo'><h5 >{FICHAS[props.nome]["atributos"]["vig"]}</h5></div>
                            </div>
                        </div>
                        <div style={{width: '18.5vw'}}>
                            <div className='container-img-ordo'>
                                <img src={imgOrdoRealistas} alt="" />
                            </div>
                            <div>
                                <div className='container-status-base'>
                                    <div className='saude'>
                                        <h5 className='titulo-branco'>Saúde</h5>
                                        <NomeValor nome="PV" valor={FICHAS[props.nome]["saude"]["pv"]} bold={true}/>
                                        <NomeValor nome="SAN" valor={FICHAS[props.nome]["saude"]["san"]} bold={true}/>
                                        <NomeValor nome="PE" valor={FICHAS[props.nome]["saude"]["pe"]} bold={true}/>
                                    </div>
                                    <div className='defesas'>
                                        <h5 className='titulo-branco'>Defesas</h5>
                                        <NomeValor nome="PASSIVA" valor={FICHAS[props.nome]["defesas"]["passiva"]}/>
                                        <NomeValor nome="BLOQUEIO" valor={FICHAS[props.nome]["defesas"]["bloqueio"]}/>
                                        <NomeValor nome="ESQUIVA" valor={FICHAS[props.nome]["defesas"]["esquiva"]}/>
                                    </div>
                                </div>
                                <div className='resistencias'>
                                    <div>
                                        <h5 className='titulo-branco'>Resistências a Dano</h5>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <div style={{width:"48%"}}>
                                                <NomeValor nome="Física" valor={FICHAS[props.nome]["resistencias"]["fisica"]}/>
                                                <NomeValor nome="Balística" valor={FICHAS[props.nome]["resistencias"]["balistica"]}/>
                                                <NomeValor nome="Sangue" valor={FICHAS[props.nome]["resistencias"]["sangue"]}/>
                                            </div>
                                            <div style={{width:"48%"}}>
                                                <NomeValor nome="Morte" valor={FICHAS[props.nome]["resistencias"]["morte"]}/>
                                                <NomeValor nome="Energia" valor={FICHAS[props.nome]["resistencias"]["energia"]}/>
                                                <NomeValor nome="Conhecimento" valor={FICHAS[props.nome]["resistencias"]["conhecimento"]}/>
                                            </div>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"center"}}>
                                            <NomeValor nome="Insanidade" valor={FICHAS[props.nome]["resistencias"]["insanidade"]}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-armas'>
                        <h5 className='titulo-branco'>Armas</h5>
                        <div className='scroll-personalizado' style={{overflowY: "auto", overflowX: "hidden", maxHeight:"13vh"}}>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Arma</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Ataque</th>
                                    <th scope="col">Alcance</th>
                                    <th scope="col">Dano</th>
                                    <th scope="col">Crítico</th>
                                    <th scope="col">Recarga</th>
                                    <th scope="col">Especial</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {armas(FICHAS[props.nome]["armas"])}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='container-pericias'>
                    <h5 className='titulo-branco'>Perícias</h5>
                    <div className='pericias scroll-personalizado' >
                        {pericias(FICHAS[props.nome]["pericias"])}
                    </div>
                </div>
            </div>
        
        : // Página 2
    
        <div className="ficha-main-content">
            <div>
                <div className='container-foto-prof-hab-inv'>

                    <div className='container-foto'>
                        <img src={require('./imgs/Miniaturas dos Agentes/' + FICHAS[props.nome]['arte'] + '.png')} />
                    </div>

                    <div className='container-prof-hab-inv'>
                        <div className='prof-hab'>

                            <div className='proficiencia'>
                                <h5 className='titulo-branco'>Proficiências</h5>
                                <span>Armas Simples,</span>
                                <span>Armas de Fogo (Curtas),</span>
                                <span>Proteção Leve</span>
                            </div>

                            <div className='habilidades'>
                                <h5 className='titulo-branco'>Habilidades</h5>
                                <div>
                                    <span style={{fontWeight: 'bold'}}>Nome<span>(Origem)</span>:</span>
                                    Texto referente a habilidade
                                </div>
                                <div>
                                    <span style={{fontWeight: 'bold'}}>Nome<span>(Origem)</span>:</span>
                                    Texto referente a habilidade
                                </div>
                            </div>
                        </div>

                        <div className='inventario'>
                            <h5 className='titulo-branco'>Inventário</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Detalhes</th>
                                    <th scope="col">Espaços</th>
                                    <th scope="col">Prestígio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Item 1</td>
                                        <td>Um item qualquer</td>
                                        <td>1</td>
                                        <td>I</td>
                                    </tr>
                                    <tr >
                                        <td>Item 2</td>
                                        <td></td>
                                        <td>2</td>
                                        <td>II</td>
                                    </tr>
                                    <tr>
                                        <td>Item 3</td>
                                        <td>Um importante</td>
                                        <td>1</td>
                                        <td>III</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='container-hist-rituais'>
                    <div className='container-historia'>
                        <h5>{FICHAS[props.nome]['historia']}</h5>
                    </div>

                    {
                        FICHAS[props.nome]['rituais'] != {} ?

                            <div className='container-rituais'>
                                <h5 className='titulo-branco'>Rituais Conhecidos</h5>
                            </div>
                        
                        :
                            <></>
                    }
                    
                </div>
            </div>
        </div>

    )
}