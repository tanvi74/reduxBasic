import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateProduce from '../actions/produceInvUpdate';

class ProduceDept extends Component{

    increment = (operation, index) => {
        this.props.updateProduce(operation,index);
    }

    render(){
        const produceInventory = this.props.ProduceData.map((item,i)=>{
            return(
                <div key={i}>
                    <li >{item.food}: {item.quantity}</li>
                    <input type="button" onClick={()=>{this.increment('+',i)}} value="+"/>
                    <input type="button" onClick={()=>{this.increment('-',i)}} value="-"/>
                </div>
            ) 
        }) 
        return(
            <div>{produceInventory}</div>
        )
    }
}

function mapStateToProps(state){
    return{
        ProduceData: state.produce
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateProduce: updateProduce
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProduceDept);