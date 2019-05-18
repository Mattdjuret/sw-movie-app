import React, { Component} from 'react';
import { ListGroup} from 'react-bootstrap';
export default class MovieList extends Component{
    render(){
        return (
            <ListGroup className="movie-list">
                {this.props.films.map(film =>
                <ListGroup.Item className="movie-list-item" key={film.episode_id}>
                    <span className="episode-no">Episode {film.episode_id}</span>
                    <span className="title">{film.title}</span>
                    <span className="release-date float-right">{film.release_date}</span></ListGroup.Item>
                )}        
            </ListGroup>
        )
    }
}