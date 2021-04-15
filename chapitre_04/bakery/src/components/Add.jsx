import React from "react";





class Add extends React.Component {

  render() {
    return (
      <section>
        <h1>Add</h1>
        <form placeholder="test">Add</form>
        <select value={this.state.value} onChange={this.handleChange}>

      </section>
    );
  }

}

export default Add;
