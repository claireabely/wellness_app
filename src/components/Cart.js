import React, { Component } from 'react';
import {
  DeleteOutlined,
 
} from '@ant-design/icons';
import EditDeleteButton from "./EditDeleteButton";
import Food from "./storeMenu/Food"
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []

    }
  }
  componentDidMount(){
this.getData()
  }
getData = () =>{
  fetch('http://wellnessapps-api.herokuapp.com/orders')
  .then((data) => {
    return data.json();
  })
  .then((parsedData) => {
    console.log(parsedData)
    this.setState({
      orders: parsedData,
    });
    console.log("i popped this",this.state.orders.pop())
  });
}

  deletelastOrder = () => {
    let arr=this.state.orders
    arr.pop()
  this.setState({orders:arr})
    console.log("last order deleted")
  }
  render() {
   let orderlist=  this.state.orders.map((order, index) => {  

    return( 
    
    <div  className="card" key={`order-${index}`}>       <div class="card-body">
    <h5 class="card-title">Order ID#: {order._id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">User ID#:  {order.user_id}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Menu Items:  {order.menuitemsName}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Item ID#:  {order.item_id}</h6>
    <div class="card-image"><img src="https://pbs.twimg.com/profile_images/1166429774266454017/YesH37GD_400x400.jpg"/>
    <img src={order.imgURL}/></div>
    <h6 class="card-subtitle mb-2 text-muted">Quantity:  {order.quantity}</h6>
  


<button>VIEW ORDER</button>
<EditDeleteButton
        handleDelete= {this.deletelastOrder}
          cart={this.props.cart}
          itemsInCart_id={this.props.itemsInCart_id}
        
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