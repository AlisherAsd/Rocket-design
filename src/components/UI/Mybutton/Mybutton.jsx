import classes from './Mybutton.module.css'

const Mybutton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.Button}>
            {children}
        </button>
    )
}

export default Mybutton