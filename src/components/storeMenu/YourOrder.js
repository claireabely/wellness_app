import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  DeleteOutlined,
 
} from '@ant-design/icons';




class YourOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      email: '',
      delivery: true,
      order: this.props.foods
         
    }
    this.handleOrderChange = this.handleOrderChange.bind(this)
    this.handleOrderSubmit = this.handleOrderSubmit.bind(this)
  }
  handleOrderChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleOrderSubmit(event) {
    event.preventDefault()
    console.log( 'ORDER SUBMITTED',this.state)
    fetch(`http://wellnessapps-api.herokuapp.com/${this.state.user_id}/new`, {
      method:'POST',
      body: JSON.stringify({
         user_id: this.state.user_id,
         email: this.state.email,
        delivery: this.state.delivery,
        order: JSON.stringify(this.state.order)
      }),
      headers: {'Content-Type': 'application/json'}
      
    })
    .then((data) => {
      return data.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      this.setState({
        hasOrdered: true
      });
    });
  }
  render() {
    return (
      <div>
        <h3>Your Order</h3>
        <h4>From Restaurant</h4>
        <div>
        <table>
          <thead>
            <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
           
          
            </tr>
       
       
          </thead>
         
          <tbody>
             
            { this.props.foods.map((food, index) => {
              return (
                <table>
                <thead>
                <tr key={index}>
          
                  <td>{food.name}</td>
                  <td>{food.description}</td>
                  <td>{food.price}</td>
                  <td> </td>
                  <td onClick={ () => this.props.handleDelete(index) }><DeleteOutlined />   </td>
                </tr>
                </thead>
                </table>
               
              )
            })}
                    <tr>
            <th></th>
            <th></th>
            <th>Total</th>
           
          
            </tr>
            <tr>
              <td></td>
              <td></td>
          <td>{this.props.total}</td>
            </tr>
          </tbody>
  
        </table>
     
        <button>PROCEED</button>
        </div>
        <div>
        <form onSubmit={event=>this.handleOrderSubmit(event)}>
        <table>
          
        <tr>
            <th></th>
            <th></th>
            <th>Email</th>
            <th><input onChange={this.handleOrderChange} id='email' value={this.state.email} type ="text"/></th>
           
          
            </tr>
            <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th><input  onChange={this.handleOrderChange} id='user_id' value={this.state.user_id}  type ="text"/></th>
           
          
            </tr>
            <tr>
            <th></th>
            <th></th>
            <th>Address</th>
            <th><input type ="text"/></th>
           
          
            </tr>
        
            
            </table>
        
            <button type="submit">PLACE ORDER</button>
            </form>
            {!this.state.hasOrdered? "":<p>Your Order Has Been Placed <Link to="/cart">View Cart</Link></p>}
            </div>
            
      </div>
      
    )
  }
}

export default YourOrder