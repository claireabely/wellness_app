import React, { Component } from 'react'
import {
    PlusCircleOutlined,
   
  } from '@ant-design/icons';

export default class Food extends Component {
    constructor (props) {
        super(props)
        this.state = {
            purchase: true
        }

    }


    render() {
        return (
            <table>
            <thead>
                
            <tr key={ this.props.index }
                onClick={ ()=> { this.props.addPurchasedFood(this.props.food)(this.state.order); }}
            >
                <td onClick={() => this.props.handleDelete(this.props.index)} >{ this.props.food.name }</td>
                <td>{ this.props.food.description }</td>
                {/* <td>{ this.props.food.imgURL }</td> */}
                <td>{ this.props.food.price }</td>
                {this.state.purchase ? <td><PlusCircleOutlined /></td> : <td></td>}
            </tr>
            </thead>
           
           
            </table>
        )
    }
}
