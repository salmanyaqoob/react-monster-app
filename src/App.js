import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Salman Yaqoob',
      searchField: '',
      monsters: []
    };

    // this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = (e) => {
    this.setState({searchField: e.target.value}, ()=> console.log(this.state))
  }

  render(){

    const {monsters, searchField} = this.state;
    const filtersMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>React Monsters</h1>
        <SearchBox 
        placeholder="Search Monsters"
        handleChange={ this.handleChanges }
        />
        <CardList monsters={filtersMonsters}>
        Moster List
        </CardList>
      </div>
    );
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

}

export default App;
