import React, { Component } from 'react'
import Food from './Food'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default class MenuItems extends Component {
    render() {
        return (
                <div>
                    <h3>Menu Items</h3>

                    
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  


          {this.props.menuItems.map((food, index) => (
            <div class="card" style={{ width: 50, }}>
              <div class="card-body">
                <h5 class="card-title">{food.name}</h5>
                <h5 className="image"> <img alt="example" src={food.imgURL}/></h5>
                <h6 class="card-subtitle mb-2 text-muted">{food.price}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{food.description}</h6>
                
                {/* <button onClick={ ()=> { this.props.handleClick(store.store_id); }} >GO</button> */}
                <button  onClick={ ()=> { this.props.addUpdatedFood(food); }}>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>

  
  
                    {/* <table>
                    <thead>
                       
                        <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Price</th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.menuItems.map((food, index) => {
                            return <Food food={food} index={index} handleDelete={this.props.handleDelete} addLovedFood={ this.props.addLovedFood }/>
                        })}
                    </tbody>
                    </table> */}
                    </div>
             
                
        )
    }
}
