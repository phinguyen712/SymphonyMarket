var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import ItemList from 'ItemList';


//component for button that sorts name,date,price by ascending/descending
export var OrderButton = React.createClass({
  //changes icon on button based on current state(ascending/descending)
  orderIcon(){
    var {order} =this.props;

    if(order === 'descending'){
      return 'fa fa-sort-amount-desc'
    }else{
      return 'fa fa-sort-amount-asc'
    }
  },
  //changes changeOrder reducer when button is clicked
  sortOrder(){
    var {order, dispatch} = this.props;

    if(order === "descending"){
      dispatch(actions.changeOrder('ascending'));
    }else{
      dispatch(actions.changeOrder('descending'));
    }
  },
  render(){
    return (
      <button onClick={this.sortOrder} className={this.orderIcon()}></button>
      );
    }
})




export default connect(
  (state)=>{
    return{
      order:state.order
    }
  }
)(OrderButton)