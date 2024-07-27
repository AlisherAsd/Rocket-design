import RegisterPage from "./RegisterPage"
import classes from './Profile.module.css'

const ProfilePage = () => {
    return (
        <div>
            <div classes={classes.Form}><h1>Вы еще не вошли, пожалуйста, зарегестрируетесь или войдите в свою учетную запись.</h1></div>
            <RegisterPage />
        </div>
    )
}

export default ProfilePage