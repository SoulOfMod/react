import React from "react";
import movies from "../movies.json"
import { Link } from 'react-router-dom'
class Acceuil extends React.Component {

    

    render() {


        return (
            <ul>
                {movies.map(elem => {
                    console.log(elem);
                    return <li><Link to = {'/' + elem.id}> {elem.title} </Link></li>
                }
                )}
            </ul>

        );
    }
}

export default Acceuil;
