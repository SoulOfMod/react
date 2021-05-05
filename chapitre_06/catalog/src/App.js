import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Acceuil from "./pages/Acceuil";
import Movie from "./pages/Movie";


class App extends React.Component {

 

  render() {
    return (
      <BrowserRouter>

        <div>

          <h1>Movies</h1>

          <Acceuil />

        </div>
        <Switch>

          <Route path = '/:id' exact component = {Movie}></Route>

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
