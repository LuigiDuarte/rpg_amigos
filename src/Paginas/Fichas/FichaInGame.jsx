import React, {useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import SelecaoDados from '../../SelecaoDados';
import ResultadoPrinc from '../../ResultadoPrinc';
import Historico from '../../Historico';
import NomeValor from '../../NomeValor';
import PaginaFicha from '../../PaginaFicha'

export default () => {

    const [qtd, setQtd] = useState(1)
    const [dado, setDado] = useState(0)
    const [resultado, setResultado] = useState(<ResultadoPrinc />)
    const ResultadoPrincRef = useRef()
    const [transformado, setTrans] = useState("normal")
    const [soma, setSoma] = useState(null)
    const [historico, setHist] = useState(<Historico />)
    const [unset, setUnset] = useState(true)
    const [pag,setPag] = useState(1)
    const param = useParams()
    const nomePersonagem = param["nome"] != undefined ? param["nome"] : "Mauro Nunes"

    let valores = []

    function mudaPag(val){
        var ficha = document.getElementById("container-ficha")
        if(pag != val && ficha != undefined){
            ficha.classList.remove("item-" + pag)
            ficha.classList.add("item-" + val)
            setPag(val)
        }
    }

    function qtdDadosOptions(){
        var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        return array.map(val =>{ return <option key={val} >{val}</option>})
    }

    function getRandom(max) {
        return Math.floor(Math.random() * max + 1)
    }

    function getArray(qtdade, max){
        var array = []
        for(var i = 0; i < qtdade; i++){
            array[i] = getRandom(max)
        }
        return array
    }

    function correspondeDado(val){
        if(val === 0)
            return 4
        if(val === 1)
            return 6
        if(val === 2)
            return 8
        if(val === 3)
            return 10
        if(val === 4)
            return 12
        if(val === 5)
            return 20
    }

    function teste(){
        var dadoVez = correspondeDado(dado)
        valores = getArray(qtd,dadoVez)
        setResultado(<ResultadoPrinc ref={ResultadoPrincRef} valores={valores} qtd={qtd} dado={dadoVez} onTrans={transform}/>)
        if(transformado === "transformado"){
            ResultadoPrincRef.current?.girarDado()
        }else{
            ResultadoPrincRef.current?.girarDado()
            setTimeout(() => {
                ResultadoPrincRef.current?.girarDado()
            }, 500);
        }
        var histArmaz =  JSON.parse(localStorage.getItem("hist"))
        if(histArmaz == null){
            var arrayHist = []
            var hist = {}
            hist[dadoVez.toString()] = valores
            arrayHist.push(hist)
            localStorage.setItem("hist",JSON.stringify(arrayHist))
            setHist(<Historico valores={arrayHist}/>)
        }else{
            var hist = {}
            hist[dadoVez.toString()] = valores
            histArmaz.push(hist)
            localStorage.setItem("hist",JSON.stringify(histArmaz))
            setHist(<Historico valores={histArmaz}/>)
        }
        var somadaVez = 0
        valores.forEach(value => {somadaVez += value})

        setSoma("Soma: " + somadaVez)
        
        if(unset){
            setUnset(false)
        }
    }

    function transform(param){
        setTrans(param)
    }

    function limpa(){
        localStorage.removeItem("hist")
        setHist(<Historico />)
    }


    return(
        <>
            <div className='container-ficha'>
                <div id="container-ficha" className="container-item-ficha item-1" style={{height:'90vh'}}>

                    <PaginaFicha nome={nomePersonagem} pag={pag}/>

                    <div className='ficha-bottons-content'>
                        <div id='pag1Btn' className='button-ficha' onClick={()=>{mudaPag(1)}}>Página 1</div>
                        <div id='pag2Btn' className='button-ficha' onClick={()=>{mudaPag(2)}}>Página 2</div>
                    </div>
                </div>

                <div className="container-item-ficha item-3" >
                    <h2>Interface de Dados</h2>
                    <div style={{padding:'10px'}}>
                        <div className='dados-disp'>
                            <SelecaoDados selecionado={dado} muda={setDado}/>
                        </div>
                        <div className='qtd-container'>
                            <div className='qtd-select'>
                                <h5>Quantidade de Dados: </h5>
                                <select name="qtd-dados" className='form-select' id="qtd-dados" defaultValue={1} onChange={ e => {setQtd(Number(e.target.value))}}>
                                    {qtdDadosOptions()}
                                </select>
                            </div>
                            <div style={{width:'35%',textAlign:"center"}}>
                                <button onClick={teste} className="btn btn-dark">Realizar Teste</button>
                            </div>
                        </div>
                        { unset === false ?
                            <>
                                <div className='titulos-result-hist' style={{display: 'flex',marginTop:'10px',justifyContent:'space-between'}}>
                                    <h5 className='titulo-branco' style={{width:'60%',textAlign:"center"}}>Resultado</h5>
                                    <h5 className='titulo-branco' style={{width:'33%',textAlign:"center",marginRight:'20px'}}>Histórico</h5>
                                </div>
                                <div className='container-result-hist'>
                                    <div id='containerResultado' className='resul-princ-container scroll-personalizado'>
                                        {resultado}
                                    </div>
                                    <div className='container-hist scroll-personalizado'>
                                        {historico}
                                    </div>
                                </div>
                                <div style={{display: 'flex',marginTop:'10px'}}>
                                    <div className='soma'>{soma}</div>
                                    <div style={{width:'35%',textAlign:"center"}}><button onClick={limpa} className="btn btn-dark">Limpa</button></div>
                                </div>  
                            </>  
                        :<></>}
                       
                        
                    </div>
                   
                </div>
            </div>
            
        </>
    )
}

{/* <div>
                            <div style={{width:'500px',height:'125px', backgroundColor: 'red'}}>
                                Nome,Origem, Classe, NEX, Patente
                            </div>
                            <div>
                                <img src="Atributos.jpg" alt="" style={{height:'50vh'}}/>
                            </div>
                        </div>
                        <div>Armas</div>
                    
                    */}
                    