import React, { Component} from 'react';
export default class MovieItem extends Component{
    render(){
        return (
            this.props.item.id>0 ?
            <div>
                <h2 className="selected-item-title">{this.props.item.title}</h2>
                <p className="selected-item-opening">{this.props.item.opening}</p>
                <p className="selected-item-director">Directed by: {this.props.item.director}</p>
            </div>
                
        :
        <h5 className="noMovieSelected">No movie selected</h5>
        )
    }
}