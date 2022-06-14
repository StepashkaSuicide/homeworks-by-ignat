import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://png.pngtree.com/element_our/png_detail/20190103/woman-hand-points-a-finger-at-something-finger-touch-screen-png_308332.jpg',
    name: 'Eugen',
    message: `TAM EST' ETOT YGOLOK`,
    time: ' 22:01',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
