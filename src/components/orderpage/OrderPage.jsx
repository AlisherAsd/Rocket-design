import { Link } from "react-router-dom"
import { price_tree } from "../../db/db"
import classes from './OrderPage.module.css'

const OrderPage = () => {


    return (
        <div className={classes.order}>
            <div className={classes.img_price_tree}>
                <img src='https://sun9-17.userapi.com/s/v1/ig2/2r1V5Swgfqsvm93wQPd0UjM7wDMeZXejm0bp4DhhXoBvk7lpC3bzxnxSlgRCV_xCQMoPZHco6QAsC_6_Y8x6dFdV.jpg?quality=96&as=32x35,48x52,72x78,108x117,160x174,240x261,360x391,480x522,540x587,640x695,720x782,1080x1174,1178x1280&from=bu&u=FV80ojyF-ey0FaEePpDizE3aQ_DZtHTue0yinZ4XcEA&cs=510x554' 
                />
                <img src='https://sun9-29.userapi.com/s/v1/ig2/3VafQ0hA7KLUZCVbXylL-nJNxtWFiICqRIRk_sFdqFl3IxRaaTM4wFa1fFpgPUKKG-uxxtxslECw15fRbQRFTL_u.jpg?quality=96&as=32x35,48x52,72x78,108x117,160x174,240x261,360x391,480x522,540x587,640x695,720x782,1080x1174,1178x1280&from=bu&u=33brUxZ3Gi_2-4EDK1h16gyWzGqBqjT-z9S_DmdsSfg&cs=510x554' 
                />
                <img src='https://sun9-48.userapi.com/s/v1/ig2/VxqZ0VE35puwOm8O96e8lBbMYW4N8VwlzgKpS6lBYiRefZIn8PGJxc7vL7fnqUtL_d6yjCjd8NjX6PcaN5OKql9Y.jpg?quality=96&as=32x35,48x52,72x78,108x117,160x174,240x261,360x391,480x522,540x587,640x695,720x782,1080x1174,1178x1280&from=bu&u=_N2k82tuC5-zoqxDfLUIdMTiJLODqja74rcA7QXjDwc&cs=510x554'
                />
            </div>
            <div className={classes.text_price_tree}>
                <h2> Мы можем разработать любой логотип, учитывая все ваши пожелания </h2>
                <div className={classes.two_content}>
                    <h3> Процесс разработки логотипа заключается в нескольких этапах: </h3>
                        <div className={classes.tree_content}>
                            {price_tree.map(step => {
                                return (
                                    <>
                                        <p>{step}</p>
                                    </>
                                )
                                })}
                        </div>
                </div>
                <div className={classes.ssulka}><p><Link to='https://vk.com/pochemurocket'>Сделать заказ</Link></p></div>
            </div>
        </div>
    )
}

export default OrderPage