import React, { Component } from 'react';
import {
  DeleteOutlined,
 
} from '@ant-design/icons';
import UpdateOrderButton from "./UpdateOrderButton";
import Food from "./storeMenu/Food"
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []

    }
  }
  componentDidMount(){
    fetch('http://wellnessapps-api.herokuapp.com/orders')
    .then((data) => {
      return data.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      this.setState({
        orders: parsedData,
      });
    });
  }

  render() {
   let orderlist=  this.state.orders.map((order, index) => {  

    return( 
    
    <div  className="card" key={`order-${index}`}>       <div class="card-body">
    <h5 class="card-title">Order ID#: {order._id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">User ID#:  {order.user_id}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Menu Items:  {order.menuitemsName}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Item ID#:  {order.item_id}</h6>
    <div class="card-image"><img src="https://static1.squarespace.com/static/5d37375de47a2a0001071628/t/5f88c03b33250d24070ed3a4/1606228858229/?format=1500w"/>
    <img src={order.imgURL}/></div>
    <h6 class="card-subtitle mb-2 text-muted">Quantity:  {order.quantity}</h6>
    


<button>VIEW ORDER</button>
<UpdateOrderButton
          user_id={this.props.user_id}
          user_name={this.props.user_name}
          cart={this.props.cart}
          itemsInCart_id={this.props.itemsInCart_id}
          emptyCart={this.props.emptyCart}
          delivery={this.props.delivery}
          restaurant_name={this.props.restaurant_name}
          lastOrder={this.props.itemsInOrder}
        />
  </div> </div>
    )
   })
    return (
      <div className="Cart">
       {orderlist}
      </div>
    )
  }
}
  
export default Cart;