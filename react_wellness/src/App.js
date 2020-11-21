import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MenuItems from './components/MenuItems'
import AppMenu from './components/AppMenu'

import YourOrder from './components/YourOrder'

import './App.css';








class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      name: '',
      description: '',
      price: 0,
      imgURL: '',
      lovedFoods: [],
      totalPrice: 0,
   
          collapsed: true
        
    }
    

   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleDelete = this.handleDelete.bind(this)
   this.addLovedFood = this.addLovedFood.bind(this)
   this.toggleCollapsed = this.toggleCollapsed.bind(this)


  }
  componentDidMount(){
    fetch('http://zuber-eats-api.herokuapp.com/menuitems')
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

  addLovedFood(food) {
   let currentPrice= this.state.totalPrice
   let newPrice= currentPrice+food.price
   let lovedFoods= [...this.state.lovedFoods]
   let newLovedFoods= lovedFoods.push(food)
   console.log(newLovedFoods)
   console.log(this.state.lovedFoods)
   console.log(food)
    this.setState({lovedFoods: [food,...this.state.lovedFoods], totalPrice:newPrice})
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleDelete(index) {
    const newLovedFood = this.state.lovedFoods
    newLovedFood.splice(index, 1)
    this.setState({
      lovedFood: newLovedFood
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


 
  render() {
    console.log(this.state.menuItems)
    return (
      <div>
     
        <Header />
  
        <main>
         <MenuItems menuItems={this.state.menuItems} addLovedFood={this.addLovedFood} handleDelete={this.handleDelete} />
          <YourOrder foods={this.state.lovedFoods} handleDelete={this.handleDelete} total= {this.state.totalPrice}/>
        </main>
        <Footer />
          {/* <div><AppMenu toggleCollapsed={this.toggleCollapsed} collapsed={this.state.collapsed}/></div>  */}
      </div>
    )
  }
}

export default App;
