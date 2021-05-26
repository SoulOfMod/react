import React, { Component } from 'react'

export class List extends Component {
    
    constructor() {
        super()
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:9000/students")
            .then(response => response.json())
            .then(result => {
                // console.log("result" , result);
                // console.log("results" ,result.results);
                // console.log("results 1st item" ,result.results[0]);


                this.setState({
                    students: result.Students
                })

            })
            .catch(err => console.error("err dans le fetch du componentDidMount:", err))

    }

    render() {
        console.log("new value of the array student : ", this.state.students)
        return (
            <div>
                
            </div>
        )
    }
}

export default List
