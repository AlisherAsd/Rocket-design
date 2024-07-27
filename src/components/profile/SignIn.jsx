import { useState } from "react"
import { Users } from "../../db/db"
import Mybutton from "../UI/Mybutton/Mybutton"
import classes from './Profile.module.css'
import Myinput from "../UI/Myinput/Myinput"

const SignInPage = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [auth, setAuth] = useState(false)

    const EnterEmail = (event) => {
        setEmail(event.target.value)
    }

    const EnterPassword = (event) => {
        setPassword(event.target.value)
    }

    const isAuth = (event) => {
        setAuth(false)
        event.preventDefault()
        
        Users.map(user => {
            if (user.email === email) {
                if (user.password === password) {
                    setAuth(true)

                }
            }
        })
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

                    
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <Mybutton type="submit" class="registerbtn" onClick={isAuth}>Sign in</Mybutton>
                    
                </div>

            </form> 
            )
        }
        if (auth == true) {
            return <h1>Вы авторизованы!</h1>
        }
    }
    console.log(auth)
    return (
       <>
            {Render(auth)}
       </>
    )
}

export default SignInPage