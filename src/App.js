
import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MenuItems from './components/storeMenu/MenuItems'
import Stores from './components/storeMenu/Stores'
import Food from './components/storeMenu/Food'
import YourOrder from './components/storeMenu/YourOrder'
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom'
import AppMenu from './components/AppMenu'
import './App.css';
import PastOrders from './components/PastOrders';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      name: '',
      description: '',
      store_id: "",
      _name: "",
      price: 0,
      imgURL: '',
      updatedFoods: [],
      totalPrice: 0,
      populateStores: [],
      stores: [],
      store_id: "",
      store_name: "",
      store_img: "",
      collapsed: true
        
    }
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleDelete = this.handleDelete.bind(this)
   this.addUpdatedFood = this.addUpdatedFood.bind(this)
   this.toggleCollapsed = this.toggleCollapsed.bind(this)
  //  this.handleClick = this.handleClick.bind(this)
  // this.populatestores = this.populatestores.bind(this)

  }
  componentDidMount(){
    fetch('http://wellnessapps-api.herokuapp.com/stores')
    .then((data) => {
      return data.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      this.setState({
        stores: parsedData,
      });
    });

    fetch('http://wellnessapps-api.herokuapp.com/menuitems')
    .then((data) => {
      return data.json();
    })
    .then((parsedData) => {
      console.log(parsedData)
      this.setState({
        menuItems: parsedData,
      });
    });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  addUpdatedFood(food) {
    let currentPrice= this.state.totalPrice
    let newPrice= currentPrice+food.price
    let updatedFoods= [...this.state.updatedFoods]
    let newUpdatedFoods= updatedFoods.push(food)
    console.log(newUpdatedFoods)
    console.log(this.state.updatedFoods)
    console.log(food)
    this.setState({updatedFoods: [food,...this.state.updatedFoods], totalPrice:newPrice})
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  // populateStore(event) {
  //   this.setState({ [event.target.id]: event.target.value })
  // }

  handleDelete(index) {
    const newUpdatedFood = this.state.updatedFoods
    newUpdatedFood.splice(index, 1)
    this.setState({
      updatedFood: newUpdatedFood
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const newFood = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    }

    const updatedFoods = [ ...this.state.menuItems, newFood ]

    this.setState({
      menuItems: updatedFoods,
      name: '',
      description: '',
      price: 0
    })
  }

  populatestores(event) {
    let store_id= this.state.store_id
    let store_name = this.state.store_name
    this.setState({stores: [event,...this.state.stores]})
  }
  // handleClick(event) {
  //   event.preventDefault()
  //   store_id: this.state.store_id
    
    
  // }

//   populatestores(index){
//   //   const newStores = {
//   //     store_name: this.state.store_name,
 
//   //   } 
//   //   const populateStores = [ ...this.state.stores, newStores ]
//   //   this.setState({  
//   //      stores: populateStores, 
//   //      store_name: '', 
//   //      store_img: ''
//   // });
// }
  render() {
    console.log(this.state.menuItems)
    return (
      <Router>
            <nav>
          <ul>
            <li>
              <NavLink 
                exact to="/stores" 
                activeClassName="selected">
                Stores
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/menuitems" 
                activeClassName="selected">
                Menu Items
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pastorders" 
                activeClassName="selected">
                Past Orders
              </NavLink>
            </li>
          
          </ul>
        </nav>
        {/* <Header toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed} /> */}
        <main>
        <Switch>
  <Route
  path='/stores'
  render={(props) => (
    <Stores {...props} stores={this.state.stores} />
  )}
/>
         {/* <Route
  path='/menuitems'
  render={(props) => (
    <MenuItems {...props} menuItems={this.state.menuItems} />
 )}
/>  */}
    <Route path="/menuitems" component={(MenuItems, YourOrder, Food)}>
      <MenuItems
                menuItems={this.state.menuItems}
                name={this.state.name}
                store_id={this.state.store_id}
                price={this.state.price}
                imgURL={this.state.imgUrl}
                addUpdatedFood={this.addUpdatedFood} 
                handleDelete={this.handleDelete} 
      />
      <YourOrder foods={this.state.updatedFoods} handleDelete={this.handleDelete} total= {this.state.totalPrice}/>     
    </Route>
    <Route path="/PastOrders">
            <PastOrders />
          </Route>
        </Switch>
        {/* <AppMenu toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed}/> */}
         {/* <MenuItems menuItems={this.state.menuItems} addUpdatedFood={this.addUpdatedFood} handleDelete={this.handleDelete} /> */}
         {/* <YourOrder foods={this.state.updatedFoods} handleDelete={this.handleDelete} total= {this.state.totalPrice}/> */}
       </main>
        <Footer />
      </Router>
    )
  }
}
export default App;