import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token") || false

        if (token) {
            history.push("/admin")
        }
    }, [])

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8003/auth/login", { email, password, firstName, surname, dateOfBirth })

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token)
                history.push("/admin")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6 mx-auto">
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="surname" className="col-sm-2 col-form-label">Surname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="surname" onChange={(e) => setSurname(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="dateOfBirth" className="col-sm-2 col-form-label">Date Of Birth</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="dateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <button type="submit" className="btn btn-primary mb-3" onClick={login}>Log In</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
