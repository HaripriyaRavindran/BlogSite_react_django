import style from "./index.module.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const LoginForm = (props) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        props.onLogin(email, password);
    }

    return (
        <section id="login">
            <Container className={style.logindiv}>
                <div className={style.logincard}>
                    <form onSubmit={submitHandler}>
                        <fieldset>
                            <legend>LOGIN</legend>
                            <div className={style.inputdiv}>
                                <label htmlFor="username">Username </label>
                                <input type="text" name="username" id="username" 
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
                                <Button className={style.readmore} variant="secondary" type="submit">
                                    SUBMIT
                                </Button>
                            </div>
                            <p><Link to="/signup">Want to create an account? Signup Now!</Link></p>
                        </fieldset>
                    </form>
                </div>
                
            </Container>
        </section>
    )
}
export default LoginForm;