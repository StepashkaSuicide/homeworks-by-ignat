import React from 'react'
import s from './Message.module.css'

type messageDataPropType = {
    avatar: string
    name: string
    message: string
    time: string

}


function Message(props: messageDataPropType) {

    return (
        <div className={s.all}>
            <div className={s.img}>
                <img src={'https://png.pngtree.com/element_our/png_detail/20190103/woman-hand-points-a-finger-at-something-finger-touch-screen-png_308332.jpg'}/>
            </div>
            <div className={s.oval}>
                <div className={s.name}>
                    {props.name}
                </div>

                <div className={s.message}>
                    {props.message}
                </div>

                <div className={s.time}>
                    {props.time}
                </div>
                <div className={s.empty1}>

                </div>
                <div className={s.empty}>

                </div>
                <div className={s.empty2}>

                </div>


            </div>

        </div>
    )
}

export default Message
