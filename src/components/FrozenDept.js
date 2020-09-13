import React, {Component} from 'react';
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

class FrozenDept extends Component{
    increment = (operation, index) => {
        this.props.updateFrozen(operation,index);
    }
    render(){
        const frozenInventory = this.props.frozenData.map((item,i)=>{
            return(
                <div key={i}>
                    <li >{item.food}: {item.quantity}</li>
                    <input type="button" onClick={()=>{this.increment('+',i)}} value="+"/>
                    <input type="button" onClick={()=>{this.increment('-',i)}} value="-"/>
                </div>
            ) 
        })
        return(
            <div>
                {frozenInventory}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        frozenData: state.frozen
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
       updateFrozen: updateFrozen 
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept);