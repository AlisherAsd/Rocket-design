import { useState } from "react"
import { Messages } from "../../db/db"
import classes from './Reviews.module.css'
import Myinput from "../UI/Myinput/Myinput"
import Mybutton from "../UI/Mybutton/Mybutton"
import Mymodal from "../UI/Mymodal/Mymodal"


const Reviews = () => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [messenges, setMessenges] = useState(Messages)

    const InpMes = (event) => {
        setText(event.target.value)
        console.log(text)
    }

    const InpName = (event) => {
        setName(event.target.value)
    }

    const SendMess = () => {
        const newPost = {title: name, body: text}
        setMessenges([...messenges, newPost])
        setModal(false)
        setText('')
        console.log(messenges)
    }

    const [modal, setModal] = useState(false)

    return (
        <>
            <div className={classes.container}>
                <Mybutton onClick={() => setModal(true)}>Написать отзыв</Mybutton>
                <Mymodal visible={modal} setVisible={setModal}>
                    <p><Myinput type="text" placeholder="Введите ваше имя"
                    value={name} 
                    style={{marginBottom: 10}}
                    onChange={event => InpName(event)}/></p>
                    <Myinput type="text" placeholder="Введите сообщение"
                    value={text} 
                    style={{marginBottom: 10}}
                    onChange={event => InpMes(event)}/>
                    <Mybutton onClick={SendMess}>Отправить</Mybutton>
                </Mymodal>
                <div className={classes.messages}>
                    { messenges.map(mess => {
                            return (
                                <div className={classes.mess}>
                                    <div>{mess.title}</div>
                                    {mess.body}
                                </div>               
                            )
                    })}
                </div>

            </div>

        </>
    )
}

export default Reviews