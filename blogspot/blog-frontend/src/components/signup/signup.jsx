import React from 'react';
import style from "./index.module.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Signup = (props) => {
    const [user, setUser] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userChangeHandler = (event) => {
        setUser(event.target.value);
    }

    const fnameChangeHandler = (event) => {
        setFname(event.target.value);
    }

    const lnameChangeHandler = (event) => {
        setLname(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        props.onSignup(user, fname, lname, email, password);
    }
    return (
        <section id="login">
            <Container className={style.logindiv}>
                <div className={style.logincard}>                                 
                    <form onSubmit={submitHandler}>
                        <fieldset>
                            <legend>SIGNUP</legend>
                            <div className={style.inputdiv}>
                                <label htmlFor="username">Username </label>
                                <input type="text" name="username" id="username" 
                                value={user}
                                onChange={userChangeHandler}
                                />
                            </div>
                            <div className={style.inputdiv}>
                                <label htmlFor="fname">First Name </label>
                                <input type="text" name="fname" id="fname" 
                                value={fname}
                                onChange={fnameChangeHandler}
                                />
                            </div>
                            <div className={style.inputdiv}>
                                <label htmlFor="lname">Last Name </label>
                                <input type="text" name="lname" id="lname" 
                                value={lname}
                                onChange={lnameChangeHandler}
                                />
                            </div>
                            <div className={style.inputdiv}>
                                <label htmlFor="email">Email </label>
                                <input type="text" name="email" id="email" 
                                value={email}
                                onChange={emailChangeHandler}
                                />
                            </div>
                            <div className={style.inputdiv}>
                                <label htmlFor="password">Password </label>
                                <input type="password" name="password" id="password"
                                value={password}
                                onChange={passwordChangeHandler}
                                />
                            </div>
                            <div className={style.buttondiv}>
                                <Button className={style.readmore} type="submit">
                                    SUBMIT
                                </Button>
                            </div>
                            <p><Link to="/login">Already have an account? Login Now!</Link></p>
                        </fieldset>
                    </form>                  
                </div>              
            </Container>
        </section>
    )
}

export default Signup
