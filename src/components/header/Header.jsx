import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className='header' style={{textDecoration: 'false'}}>

            <img className='img' src='https://sun9-5.userapi.com/impg/2e08NzO8O8EgopN-vQ6cCrNYsif8nrePPi8EEA/ZkM6sP4R_uY.jpg?size=1000x1000&quality=95&sign=2b9d192af5488ae68f78ba339d81a9b6&type=album' 
            style={{width: '100px'}}/>
            <div className={classes.menu}>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/works'>Мои работы</Link></li>
                <li><Link to='/reviews'>Отзывы</Link></li>
                <li><Link to='/order'>Заказ</Link></li>
                <li><Link to='/profile'>Профиль</Link></li>
            </ul>
            </div>
        </header>
    )
}

export default Header