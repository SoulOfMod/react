import React, { Component } from 'react'



export class Popular extends Component {


    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                console.log(result.results);
                console.log(result.results[0]);


                this.setState({
                    movies: result.results
                })
                // this.setState({
                //     // movies : movies.push(result.results[0])
                //     // movies:result.map(elem=>{
                //     //     movies = result.results.push()
                    // movies: result.results
                // })

            })
            .catch(err => console.error("err dans le fetch du componentDidMount:", err))

    }


    render() {
        return (
            <div>
                <h1>Popular</h1>
            <ul>
                {this.state.movies.map((elem)=>
                <li>{elem}</li>)}
            </ul>
            </div>
        )
    }
}

export default Popular
