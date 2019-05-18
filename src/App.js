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
      data:[],
      films:[],
      sortBy:'episode_id',
      searchBy:'',
      selectedMovie: null
    }
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectMovie = this.handleSelectMovie.bind(this);
}
componentDidMount() {
  this.setState({ isLoading: true });
  fetch('https://star-wars-api.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.setState({ films: data.map(x=>x.fields), isLoading: false }));
}
handleSort(sortBy){
  this.setState({sortBy})
}
handleSearch(event){
  
  this.setState({
    searchBy: event.target.value
  });
}
handleSelectMovie(event, episodeId){ 
  const filtered = this.state.films.filter(key => key.episode_id===episodeId);
  if(filtered.length===1)
    this.setState({selectedMovie:filtered[0]})
}
  render(){
    const { films,selectedMovie,searchBy,sortBy,isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="App">
      <p>Loading ...</p>
      </div>);
    }
    return(
    <div className="App">
      <Topbar handleSort={this.handleSort} handleSearch={this.handleSearch} searchBy={searchBy} />
      <Container className="App-main" fluid={true}>
        <Row>
        <Col xs="6" lg="5">
        <MovieList films={films} searchBy={searchBy} sortBy={sortBy} selectedMovie={selectedMovie} handleSelectMovie={this.handleSelectMovie} />
        </Col>
        <Col xs="6" lg="7"><MovieItem item={{...selectedMovie}} /></Col>
        </Row>
      </Container>
    </div>
    )}
}

export default App;
