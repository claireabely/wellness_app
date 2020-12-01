import React, { Component } from 'react';
class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order_id: '',
      menuitems: '',
      description: '',
      price: '',
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
      <div className="Edit">
          <form onSubmit={event=>this.handleOrderSubmit(event)}>
        <h3>Your Order</h3>
<table class="my_table">
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Price</th>

  </tr>
  <tr>
   
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
    
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
 
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
   
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
   
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
   
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
  
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
 
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
   
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
    <tr>
 
    <td><input onChange={this.handleOrderChange} id='items' value={this.state.menuitems} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='description' value={this.state.description} type ="textbox"/></td>
    <td><input onChange={this.handleOrderChange} id='price' value={this.state.price} type ="textbox"/></td>
  </tr>
   
</table>
</form>
      </div>
    )
  }
}
export default Edit;