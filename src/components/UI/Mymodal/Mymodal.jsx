import classes from './Mymodal.module.css'

const Mymodal = ({children, visible, setVisible}) => {
    
    const rootClasses = [classes.Mymodal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.MymodalContent}>
                {children}
            </div>
        </div>
    )
}

export default Mymodal