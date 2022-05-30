import React from 'react'
import s from './Message.module.css'

 type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: MessageDataType) => {

    return (
        <div >
            <div className={s.all}>
                <div className={s.img}>
                    <img  src={props.avatar}  alt={'img'}/>
                </div>
                <div>
                    <div className={s.group}>
                        <div className={s.name}>
                            {props.name}
                        </div>
                        <div className={s.message}>
                            {props.message}
                        </div>
                        <div className={s.time}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message