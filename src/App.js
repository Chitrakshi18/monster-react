import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { Search } from "./components/search-box/searchBox.components";
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = e =>{
   this.setState({searchField:e.target.value});
  };
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters</h1>
        {/* <input type = 'search' placeholder='search-monsters' onChange = {e => this.setState({searchField:e.target.value})}/>  */}
        <Search placeholder = 'search-monsters' handleChange = {this.handleChange}/> 
        {/* made above line as a search component in component folder and destructured placeholder and onclick because in dynamic case */}
        <CardList monsters={filteredMonsters}></CardList> 
         {/* passing monsters as prop from app component  */}
      </div>
    );
  }
}

export default App;
