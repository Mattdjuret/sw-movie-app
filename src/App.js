import React, { Component} from 'react';
import './App.css';
import Topbar from './components/Topbar';
import MovieItem from './components/MovieItem';
import MovieList from './components/MovieList';
import { Container,Row,Col} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoading:false,
      films:[],
      sortBy:'episode',
      searchBy:'',
      selectedMovie2: null,
      selectedMovie: {id:2,title:'title',opening:'opening',director:'director'}
    }
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
}
componentDidMount() {
  this.setState({ isLoading: true });
  fetch('https://star-wars-api.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.setState({ films: data.map(x=>x.fields), isLoading: false }));
}
handleSort(sortType){
  console.log(`selected ${sortType}`);
}
handleSearch(event){
  console.log('search text', event.target.value);
  
  this.setState({
    searchBy: event.target.value
  }, () => {
    console.log("search text async callback:", this.state.searchBy);
  });
}
  render(){
    const { films } = this.state;
    return(
    <div className="App">
      <Topbar handleSort={this.handleSort} handleSearch={this.handleSearch} searchBy={this.state.searchBy} />
      <Container className="App-main" fluid={true}>
        <Row>
        <Col xs="6" lg="5">
        <MovieList films={films} />
        </Col>
        <Col xs="6" lg="7"><MovieItem item={{...this.state.selectedMovie}} /></Col>
        </Row>
      </Container>
    </div>
    )}
}

export default App;
