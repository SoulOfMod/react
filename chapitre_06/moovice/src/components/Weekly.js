import moment from 'moment';
import React, { Component } from 'react'
import Card from './Card'


export class Weekly extends Component {


    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const today = moment().format('YYYY-MM-DD')
        const weekago = moment().subtract(1, "week").format('YYYY-MM-DD')

        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${weekago}&primary_release_date.lte=${today}&api_key=e441f8a3a151d588a4932d2c5d310769`
        )
            .then(response => response.json())
            .then(result => {
                // console.log("result" , result);
                // console.log("results" ,result.results);
                // console.log("results 1st item" ,result.results[0]);


                this.setState({
                    movies: result.results
                })

            })
            .catch(err => console.error("err dans le fetch du componentDidMount:", err))

    }

    render() {

        console.log("new value of the array movies : ", this.state.movies)
        return (
            <div>
                <h1>Weekly</h1>
                <ul>
                    {this.state.movies.map((elem) => {
                        const url = "https://image.tmdb.org/t/p/w300/"
                        return <li>
                            <Card
                                poster_path={url + elem.poster_path}
                                title={elem.title}
                                release_date={elem.release_date}
                                overview={elem.overview}
                            />
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Weekly
