import React, { Component } from 'react'
import {
  DeleteOutlined,
 
} from '@ant-design/icons';



class YourOrder extends Component {
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
        <table>
        <tr>
            <th></th>
            <th></th>
            <th>Email</th>
            <th><input type ="text"/></th>
           
          
            </tr>
            <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th><input type ="text"/></th>
           
          
            </tr>
            <tr>
            <th></th>
            <th></th>
            <th>Address</th>
            <th><input type ="text"/></th>
           
          
            </tr>
        
           
            </table>
          
            <button>PLACE ORDER</button>
            </div>
      </div>
      
    )
  }
}

export default YourOrder