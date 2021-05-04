import React from "react";


class Card extends React.Component {

  render() {
    return (
      <section>
        <div>
          <p>id = {this.props.id}</p>
          <p>title = {this.props.title}</p>
          <p>director = {this.props.director}</p>
          <p>stars =  {this.props.stars} </p>
          <p>image = <img src={this.props.image} alt="flag" /></p>
          <p>description = {this.props.description}</p>
        </div>
      </section>
    );
  }
}

export default Card;
