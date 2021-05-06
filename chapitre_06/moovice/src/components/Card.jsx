import React, { Component } from 'react'

export class Card extends Component {
    render() {

        return (
            <div>
                <img src={this.props.image} alt="" />
                <p>Title: {this.props.title}</p>
                <p>Release date : {this.props.release}</p>
                <p>Description : {this.props.overview}</p>
            </div>
        )
    }
}

export default Card
