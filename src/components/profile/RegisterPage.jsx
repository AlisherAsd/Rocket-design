import { useState } from "react"
import Mybutton from "../UI/Mybutton/Mybutton"
import classes from './Profile.module.css'
import { Link } from "react-router-dom"
import Myinput from "../UI/Myinput/Myinput"

const RegisterPage = () => {

    const [password, setPassword] = useState('')
    const [repeatpassword, setRepeatpassword] = useState('')
    const [email, setEmail] = useState('')

    const EnterEmail = (event) => {
        setEmail(event.target.value)
    }

    const EnterPassword = (event) => {
        setPassword(event.target.value)
    }

    const EnterRepeatpassword = (event) => {
        setRepeatpassword(event.target.value)
    }

    const [auth, setAuth] = useState(false)
    const redirect = (email, password, repeatpassword) => {
        if (email !== '' && password !== '' && (password === repeatpassword)) {
            setAuth(true)
        }
    }

    const Render = (auth) => {
        if (auth === false) {
            return (
                <form>
                <div className={classes.Form}>
                    <h1>Личный кабинет</h1>
                    <p>Войдите в аккаунт, или создайте аккаунт.</p>

                    <div>
                    <label for="email"><b>Email</b></label>
                    <Myinput type="text" 
                    value={email}
                    onChange={event => EnterEmail(event)}
                    placeholder="Enter Email" name="email" required />
                    </div>

                    <div>
                    <label for="psw"><b>Password</b></label>
                    <Myinput type="password" 
                    value={password}
                    onChange={event => EnterPassword(event)}
                    placeholder="Enter Password" name="psw" required></Myinput>
                    </div>

                    <div>
                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <Myinput type="password" 
                    value={repeatpassword}
                    onChange={event => EnterRepeatpassword(event)}
                    placeholder="Repeat Password" name="psw-repeat" required />
                    </div>

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <Mybutton  class="registerbtn"
                    onClick={redirect(email, password, repeatpassword)}
                    >Register</Mybutton>
                      <p>Already have an account? <Link to="/signin">Sign in</Link>.</p>
                </div>

              
                  
               
            </form>
            )
        }
        if (auth === true) {
            return (<div classes={classes.Form}><h1> Ваш аккаунт создан! </h1></div>)
        }
    }

    return (
        <>
            {Render(auth)}
        </>
    )
}

export default RegisterPage