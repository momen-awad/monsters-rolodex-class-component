import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-lis/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters , setMonsters] = useState([]);
  const [filteredMonsters , setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchFeild] = useState('');

  useEffect(()=> {
    console.log('effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
    },[])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((ele) => {
      return ele.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);

  },[monsters,searchField])

  const onSearchChange = (event) => {
    let searchValue = event.target.value.toLowerCase()
    setSearchFeild(searchValue);
  }

  return (
    <div className="App">
      <h1 className='app-title'>monsters rolodex</h1>
      <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters' 
      className='search-box' 
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  
};

export default App;
