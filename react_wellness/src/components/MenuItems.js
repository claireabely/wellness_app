import React, { Component } from 'react'
import Food from './Food'

export default class MenuItems extends Component {
    render() {
        return (
                <div>
                    <h3>Menu Items</h3>

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
                        {this.props.menuItems.map((food, index) => {
                            return <Food food={food} index={index} handleDelete={this.props.handleDelete} addLovedFood={ this.props.addLovedFood }/>
                        })}
                    </tbody>
                    </table>
                    </div>
                </div>
        )
    }
}
