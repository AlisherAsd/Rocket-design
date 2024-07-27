import classes from './Myinput.module.css'

const Myinput = (props) => {
    return (
        <input className={classes.Input} {...props}/>
    )
}

export default Myinput