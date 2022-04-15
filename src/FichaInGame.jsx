import React, {useState, useRef} from 'react';
import SelecaoDados from './SelecaoDados';
import ResultadoPrinc from './ResultadoPrinc';
import Historico from './Historico';

export default () => {

    const [qtd, setQtd] = useState(1)
    const [dado, setDado] = useState(0)
    const [resultado, setResultado] = useState(<ResultadoPrinc />)
    const ResultadoPrincRef = useRef()
    const [transformado, setTrans] = useState("normal")
    const [soma, setSoma] = useState(null)
    const [historico, setHist] = useState(<Historico />)
    const [unset, setUnset] = useState(true)
    let valores = []

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
                <div className="container-item-ficha item-1" style={{height:'90vh'}}>

                    <div class="ficha-main-content">
                        <div style={{marginRight: '10px'}}>
                            <div className="container-info-princ">
                                <div style={{marginBottom: '10px'}}>
                                    <h5 className="nome">Arnold Schwarzenegger</h5>
                                    <label style="margin-right: 10px;">Origem: <span style="width: 125px;border-bottom: 1px solid white;display: inline-block;">Atleta</span></label>
                                    <label>Origem: <span style="width: 125px;border-bottom: 1px solid white;display: inline-block;">Combatente</span></label>
                                    <label style="margin-right: 10px;">Origem: <span style="width: 125px;border-bottom: 1px solid white;display: inline-block;">Atleta</span></label>
                                    <label>Origem: <span style="width: 125px;border-bottom: 1px solid white;display: inline-block;">Atleta</span></label>
                                </div>
                                <div>
                                    <img src="Atributos.jpg" alt=""/>
                                </div>
                            </div>
                            <div style="width: 18.5vw;">
                                <div style="display: flex;justify-content: center;margin-bottom: 10px;">
                                    <img src="OrdoRealitasSimbolo.png" alt="" style="height: 25vh;" />
                                </div>
                                <div>
                                    <div style="display: flex;justify-content: space-between;margin-bottom: 10px;">
                                        <div style="height: 175px;width: 47.5%;background: #00800052;">
                                            <h5>Saúde</h5>
                                        </div>
                                        <div style="width: 47.5%;height: 175px;background: #00640052;">
                                            <h5>Defesas</h5>
                                        </div>
                                    </div>
                                    <div style="height: 200px;background: #80008052;">
                                        <div>
                                            <h5>Resistências a Dano</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="background: #ff000052;height: 125px;">
                            <h5>Armas</h5>
                        </div>
                        <div style="background: #0000ff52;width: 200px;/* display: none; */">
                            <h5>Perícias</h5>
                        </div>
                    </div>

                    <div className='ficha-bottons-content'>
                        <div id='pag1Btn' className='button-ficha'>Página 1</div>
                        <div id='pag2Btn' className='button-ficha'>Página 2</div>
                    </div>
                </div>

                <div className="container-item-ficha item-2" >
                    <h2>Interface de Dados</h2>
                    <div style={{padding:'10px'}}>
                        <div className='dados-disp'>
                            <SelecaoDados selecionado={dado} muda={setDado}/>
                        </div>
                        <div className='qtd-container'>
                            <div style={{width:'60%',textAlign:"center",display:'flex'}}>
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
                                <div className='titulos-result-hist' style={{display: 'flex',marginTop:'10px'}}>
                                    <h5 style={{width:'60%',textAlign:"center"}}>Resultado</h5>
                                    <h5 style={{width:'35%',textAlign:"center"}}>Histórico</h5>
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
                    