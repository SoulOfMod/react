import React from "react";
import movies from "../movies.json";

class Movie extends React.Component {



    render() {

        const currentMovie = movies.find(elem => {
            return (parseInt(this.props.match.params.id) === elem.id)
        })
        console.log(currentMovie);
        return (


            <div>
                <p>Id : {this.props.match.params.id}</p>
                <p>Title : {currentMovie.title}</p>
                <p>Director : {currentMovie.director}</p>
                <p>Stars : {currentMovie.stars}</p>
                <p><img src = {currentMovie.image}/></p>
                <p>Description : {currentMovie.description}</p>
            </div >

        );
    }
}

export default Movie;
