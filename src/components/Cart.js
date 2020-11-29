import React, { Component } from 'react';
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
    <div className="card" key={`order-${index}`}>       <div class="card-body">
    <h5 class="card-title">Order ID#: {order._id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">User ID#:  {order.user_id}</h6>
   
    
   
<button>VIEW ORDER</button>
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