import React, { Component} from 'react';
import { ListGroup} from 'react-bootstrap';
export default class MovieList extends Component{
    render(){
        const { films, selectedMovie, searchBy,sortBy } = this.props;
        const lowercasedFilter = searchBy.toLowerCase();
        const searchKeys = ['episode_id','title', 'release_date'];

        //create a new object array with visible/searchable keys only
        let filteredData = films.map(film => Object.keys(film)
        .filter(key => searchKeys.includes(key))
        .reduce((obj, key) => {
          obj[key] = film[key];
          return obj;
        }, {}));

        if(lowercasedFilter !== "" && filteredData.length>0)
        //filter list according to searchBy prop
        filteredData = filteredData.filter(item => {
            return Object.keys(item).some(key =>
              item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
          });

        //Sort list according to sortBy prop
        filteredData = filteredData.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)

        if(filteredData.length===0 && lowercasedFilter !== "")
          return <p>No results found for "{searchBy}"</p>
        return (
            <ListGroup className="movie-list">
                {filteredData.map(film =>
                <ListGroup.Item 
                    className={ selectedMovie && film.episode_id === selectedMovie.episode_id ? "movie-list-item active": "movie-list-item" } 
                    key={film.episode_id} 
                    onClick={s => this.props.handleSelectMovie(s,film.episode_id)}>
                        <span className="episode-no">Episode {film.episode_id}</span>
                        <span className="title">{film.title}</span>
                        <span className="release-date float-right">{film.release_date}</span></ListGroup.Item>
                )}        
            </ListGroup>
        )
    }
}