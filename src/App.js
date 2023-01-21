import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-lis/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState(() => {
        return {monsters:users};
      })
    })
  }

  onSearchChange = (event) => {
    let searchValue = event.target.value.toLowerCase()
    this.setState(() => {
      return {searchField : searchValue };
    })
  }

  render(){
    
    let filteredMonsters = this.state.monsters.filter((ele) => {
      return ele.name.toLowerCase().includes(this.state.searchField)
    });
    
    return (
      <div className="App">
        <h1 className='app-title'>monsters rolodex</h1>
        <SearchBox 
        onChangeHandler={this.onSearchChange} 
        placeholder='search monsters' 
        className='search-box' 
        />
        {/* {filteredMonsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
