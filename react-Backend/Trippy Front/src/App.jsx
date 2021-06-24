import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hotel from './views/Hotel'
import Restaurant from './views/Restaurant'
import User from './views/User'

function App() {

   

    return (
        <BrowserRouter>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/hotel">Hotel</Link></li>
                        <li><Link to="/restaurant">Restaurant</Link></li>
                        <li><Link to="/user">User</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/hotel" component={Hotel} />
                    <Route path="/restaurant" component={Restaurant} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
