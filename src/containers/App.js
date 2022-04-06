import { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.scss';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchText: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        // Add robot image to robots state
        users.map((user) => {
          const imgUrl = `https://robohash.org/${user.id}?size=200x200`;
          user.imgUrl = imgUrl;

          return user;
        });
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchText: event.target.value.toLowerCase() });
  };

  render() {
    const robotSearch = this.state.robots.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return (
        <section className='container'>
          <div className='loading-container'>
            <h1 className='loading'>Loading...</h1>
            <div className='loader'></div>
          </div>
        </section>
      );
    } else {
      return (
        <section className='container'>
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={robotSearch} />
          </Scroll>
        </section>
      );
    }
  }
}

export default App;
