import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Restaurant = () => {

    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [restaurantCreated, setRestaurantCreated] = useState(false);

    

    const restaurant = async () => {
        try {
            const response = await axios.post("http://localhost:8000/restaurants", { name, address, city, country, cuisine })

            console.log(response);
            if (response.status === 200) {
                setRestaurantCreated(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (restaurantCreated) {
        return ("Restaurant created!")
    } else {
        return (
            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputAdress" className="col-sm-2 col-form-label">Adress</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputAdress" onChange={(e) => setAdress(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="city" onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="country" onChange={(e) => setCountry(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="cuisine" className="col-sm-2 col-form-label">Cuisine</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="cuisine" onChange={(e) => setCuisine(e.target.value)} />
                        </div>
                    </div><div className="mb-3 row">
                        <button type="submit" className="btn btn-primary mb-3" onClick={restaurant}>Add Restaurant</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurant;
