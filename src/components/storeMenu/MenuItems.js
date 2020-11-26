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
                    {this.props.menuItems.map((food, index) => {  
         return(<Card style={{ width: 200, }} cover={ <img alt="example" src={food.imgURL}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://images.squarespace-cdn.com/content/v1/5d37375de47a2a0001071628/1564517210947-0VCIOKVD0JEAXMLL499V/ke17ZwdGBToddI8pDm48kFhRgSyC8vLPbOF9ZvHOct0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgfDLIrqrwIwUXdScNkgdP-ANedd1qU5RhF6Jmhf5Z4ZCjLISwBs8eEdxAxTptZAUg/JP+Certification+Banner.png?format=2500w" />}
      name={food.storeName}
      description={food.description}
    /><button  onClick={ ()=> { this.props.addUpdatedFood(food); }}>ADD TO CART</button>
  </Card>)})}
                         <Card name="Card Name">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>,
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
                </div>
                
        )
    }
}
