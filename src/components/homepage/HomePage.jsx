import { Link } from 'react-router-dom'
import '../../App.css'
import { price } from '../../db/db'
import classes from './HomePage.module.css'
import { useState } from 'react'
import Mymodal from '../UI/Mymodal/Mymodal'

const HomePage = () => {

   
    const resPrice = price.map((window) => {
        return (
            <div 
            className={classes.card}>
                
                <div className={classes.top_card}><img src={window.img} /></div>
                <div className={classes.bottom_card}><a>{window.title} {window.price}</a></div>
            </div>
        )
    })

    

    return (
       
        <div className={classes.content}>
            <div className='info'>
            <h1>Rocket Design</h1>
            <p className={classes.info}>worked w/ Форвард Авто, Gorilla Energy, SIDE MASTERS, StreetCarSpecial, OVERVEST, RaceWork, stradai, sтритуха, prox3m, Картинг в Уфе, VINILPRO, Feed the Streets, Castrol Russia</p>
            <img src='https://sun9-31.userapi.com/impf/NXbs75PEalk91R3QU4sLrYSb3SsvpcURsMEgGw/yIIHVaWpQ2w.jpg?size=1920x768&amp;quality=95&amp;crop=0,72,1211,483&amp;sign=0635d07ec55b6074c126decaa72ea3b3&amp;type=cover_group' 
            style={{width: '100%'}}/>
            </div>
            <div className='price'>
            <h2>Услуги</h2>
            <div className={classes.price}>
                
                <div className={classes.cards}>
                    {resPrice}
                </div>

                <p> <Link to='/works'> Также можете посмотреть другие работы </Link> </p>
            </div>
            </div>
      </div>
    )
}

export default HomePage