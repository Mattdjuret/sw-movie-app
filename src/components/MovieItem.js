import React, { Component} from 'react';
import logo from '../logo.svg';
export default class MovieItem extends Component{
    render(){
        return (
            //Check if movie is selected
            this.props.item.episode_id>0 ?
            <div>
                <h2 className="selected-item-title">{this.props.item.title}</h2>
                <p className="selected-item-opening">{this.props.item.opening_crawl}</p>
                <p className="selected-item-director">Directed by: {this.props.item.director}</p>
            </div>
                
        :
        <div className="noMovieSelected">
            <img src={logo} className="logo" alt="stormtrooper" />
            <h5>No movie selected</h5>
        </div>
        )
    }
}