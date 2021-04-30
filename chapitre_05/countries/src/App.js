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
    fetch("http://localhost:8000/countries/" + country)

      .then(response => response.json())
      .then(result => {

        // console.log("resultat :" , typeof(result));
        // console.log("resultat :" , result.countryFind);
        // console.log("resultat :" , result.countryFind[0].name);

        this.setState({
          name: result.countryFind[0].name,
          capital: result.countryFind[0].capital,
          flag: result.countryFind[0].flag,
          population: result.countryFind[0].population,
          region: result.countryFind[0].region
        })
      })
  }


  componentDidMount() {
    fetch("http://localhost:8000/countries/France")
      .then(response => response.json())
      .then(result => {

        this.setState({
          name: result.countryFind[0].name,
          capital: result.countryFind[0].capital,
          flag: result.countryFind[0].flag,
          population: result.countryFind[0].population,
          region: result.countryFind[0].region
        })
      })
      .catch(err => console.error("err dans le fetch du componentDidMount:", err))

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
