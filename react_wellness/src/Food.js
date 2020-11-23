import React, { Component } from 'react'
import { Card } from 'antd';
import {
    PlusCircleOutlined,
   
  } from '@ant-design/icons';

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  

export default class Food extends Component {
    constructor (props) {
        super(props)
        this.state = {
            update: true
        }

    }


    render() {
        return (
            <Card name="Card Name">
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              Content
            </Card.Grid>
            <Card.Grid style={gridStyle}>{ this.props.food.description }</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>,
            <table>
            <thead>
                
            <tr key={ this.props.index }
                onClick={ ()=> { this.props.addUpdatedFood(this.props.food); }}
            >
                <td onClick={() => this.props.handleDelete(this.props.index)} >{ this.props.food.name }</td>
                <card>{ this.props.food.description }</card>
                {/* <td>{ this.props.food.imgURL }</td> */}
                <card>{ this.props.food.price }</card>
                {this.state.update ? <td><PlusCircleOutlined /></td> : <td></td>}
            </tr>
            </thead>
           
           
            </table>
        )
    }
}
