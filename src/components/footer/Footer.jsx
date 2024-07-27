import '../../App.css'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer} style={{color: 'white'}}>
            <p>Rocket Design</p>
            <p>me: <a href='https://vk.com/pochemurocket'>pochemurocket</a></p>
            <p>frontender: <a href=''>Alisher</a></p>
            <p>phone: <a href='#'>8 900 800 00 00</a></p>
        </footer>
    )
}

export default Footer