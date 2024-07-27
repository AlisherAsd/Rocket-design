import { useState } from 'react'
import {works} from '../../db/db'
import classes from './WorksPage.module.css'
import Myinput from '../UI/Myinput/Myinput'
import { Link } from 'react-router-dom'
import Mybutton from '../UI/Mybutton/Mybutton'
import Mymodal from '../UI/Mymodal/Mymodal'

const WorksPage = () => {
    
    const [search, setSearch] = useState('')
    const [res, setRes] = useState(works)
    const [modal, setModal] = useState(false)


    const Search = (event) => {

        setSearch(event.target.value)
        let Res = []
        
        works.map(work => {
            if (work.title.includes(search) || work.description.includes(search)) {
                Res.push(work)
                setRes(Res)
            } 
            else {
                setRes([])
            }
        })
        console.log(res)
    }

    const [modalid, setModalid] = useState(null)
    const [modaltitle, setModaltitle] = useState(null)
    const [modaldescription, setModaldescription] = useState(null)
    const [modalimg, setModalimg] = useState(null)
    const setModalCard = (ID) => {
       
        return (
            works.map(work => {
                if (work.id === ID) {
                    {setModalid(ID)}
                    {setModalimg(work.img)}
                    {setModaltitle(work.title)}
                    {setModaldescription(work.description)}
                    {setModal(true)}
                    
                }
            })
        )
    }
    
    
    return (
        <> 

            <div className={classes.works}>
                    <Mymodal visible={modal} 
                    setVisible={setModal}>
                        <div className={classes.ModalCard}>
                            <img src={modalimg} 
                            />
                            <div className={classes.info}>
                                <p>{modalid}</p>
                                <p>{modaltitle}</p>
                                <p>{modaldescription}</p>
                            </div>
                        </div>
                    </Mymodal>
                

                <div className={classes.Myinput}>
                    <Myinput type='text' placeholder='Найти заказ' 
                    value={search}
                    onChange={event => Search(event)}/>
                </div>
                <div className={classes.cards}>
                    {res.map((post) => {
                        return (
                                <div 
                                className={classes.card}>
                                    <img src={post.img} />
                                    <p>{post.title}</p>
                                    <Mybutton onClick={() => setModalCard(post.id)}>Подробнее..</Mybutton>
                                </div>
                                )
                            }
                        )
                    }
                </div>
                <div className={classes.ssulka}><p> <Link to='/order'> Сделать заказ </Link> </p></div>
            </div>
        </>
    )
}

export default WorksPage