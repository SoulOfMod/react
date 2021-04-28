import React from "react";
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";
import './styles/global.css';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    }
    this.getCountry = this.getCountry.bind(this)

  }


  getCountry(country) {
    // console.log("country get:" , country);

    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then(response => response.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
  }

  componentDidMount() {

    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
      .catch(err => console.error("err dans le fetch du componentDidMount:", err))

    console.log("Je suis dans componentDidMount");
  }

  render() {
    return (

      <div>
        <div className="divButton" >
          <Button onClick={() => this.getCountry("france")}> France</Button>
          <Button onClick={() => this.getCountry("brazil")}> Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}> Crotia</Button>
        </div>
        <div className="princ">
          <Card name={this.state.name} capital={this.state.capital} flag={this.state.flag} population={this.state.population} region={this.state.region} />
        </div>
      </div>

    );
  }
}

export default App;
