import React, {Component} from "react";
import Dado from './Dado';

export default class SelecaoDados extends Component{

    arrayA = (valor) =>{
        var array = []
        for(var i = 0; i <= 5; i++){
            valor === i ? array[i] = true : array[i] = false
        }
        return array
    }

    state = {
        dados: this.arrayA(this.props.selecionado) 
    }

    modificaSelecao = (valor) => {
        this.setState({dados: this.arrayA(valor)})
        this.props.muda(valor)
    }


    render(){

        return(
            <>
                <Dado dado={4} selected={this.state.dados[0]} click={this.modificaSelecao} valor={0} classe="dado-normal"/>
                <Dado dado={6} selected={this.state.dados[1]} click={this.modificaSelecao} valor={1} classe="dado-normal"/>
                <Dado dado={8} selected={this.state.dados[2]} click={this.modificaSelecao} valor={2} classe="dado-normal"/>
                <Dado dado={10} selected={this.state.dados[3]} click={this.modificaSelecao} valor={3} classe="dado-normal"/>
                <Dado dado={12} selected={this.state.dados[4]} click={this.modificaSelecao} valor={4} classe="dado-normal"/>
                <Dado dado={20} selected={this.state.dados[5]} click={this.modificaSelecao} valor={5} classe="dado-normal"/>

                {/* <Dado dado={4} selected={this.state.dados[0]} click={this.modificaSelecao} valor={0} classe="dado-normal" num={"d4"} dado2={4}/>
                <Dado dado={6} selected={this.state.dados[1]} click={this.modificaSelecao} valor={1} classe="dado-normal" num={"d6"} dado2={6}/>
                <Dado dado={8} selected={this.state.dados[2]} click={this.modificaSelecao} valor={2} classe="dado-normal" num={"d8"} dado2={8}/>
                <Dado dado={10} selected={this.state.dados[3]} click={this.modificaSelecao} valor={3} classe="dado-normal" num={"d10"} dado2={10}/>
                <Dado dado={12} selected={this.state.dados[4]} click={this.modificaSelecao} valor={4} classe="dado-normal" num={"d12"} dado2={12}/>
                <Dado dado={20} selected={this.state.dados[5]} click={this.modificaSelecao} valor={5} classe="dado-normal" num={"d20"} dado2={20}/> */}
            </>
        )
    }
    
}
    