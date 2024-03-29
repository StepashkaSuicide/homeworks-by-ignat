import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (name: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <input  value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.total}>{totalUsers}</span>
            <div className={s.style}>{error}</div>
        </div>
    )
}

export default Greeting
