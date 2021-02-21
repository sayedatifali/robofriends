import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  // const[props, setProps] = useState({robots: [], searchfield: ''});
  const[robots, setRobots] = useState([]);
  const[searchField, setSearchField] = useState('');
  // const[searchChange, setSearchChange] = useState('');

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  // This replicates componentDidMount by providing an empty array [] in the dependency list
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  return !robots.length ?
  <h1>Loading</h1> :
  (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );

};

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: [],
//       searchfield: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response=> response.json())
//       .then(users => {this.setState({ robots: users})});
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
//   }

//   render() {
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter(robot =>{
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     })
//     return !robots.length ?
//       <h1>Loading</h1> :
//       (
//         <div className='tc'>
//           <h1 className='f1'>RoboFriends</h1>
//           <SearchBox searchChange={this.onSearchChange}/>
//           <Scroll>
//             <CardList robots={filteredRobots} />
//           </Scroll>
//         </div>
//       );
//   }
// }

export default App;