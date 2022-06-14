import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any /input type title
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setName(e.currentTarget.value)
        // need to fix any сделать проверку:
        // 1) если имя нормальное - то добавить имя
        // 2) если не нормальное - добавить ошибку
        // 3) если имя нормальное очищаем ошибку
        // 4) если имя плохое очищаем имя
        // need to fix
    }


    const addUser = () => {

        if (name.trim() === '') {
            setName('')
            return setError('wrong name')
        }
        alert(`Hello ${name}`)
        addUserCallback(name)

        setName('')


        // need to fix
    }

    const totalUsers = users.length

    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
