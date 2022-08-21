import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from './RequestAPI';



export type RequestPropsType = {}

export const Request: React.FC<RequestPropsType> = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('сделайте запрос')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setChecked(e.currentTarget.checked)
    }

    const getTest = () => {

        RequestAPI.requestWithCheckbox(checked)
            .then((res) => {
                console.log({...res})
                console.log(res.data.info)
                setStatus(res.data.errorText)
            })
            .catch(rej=> {
                console.log({...rej})
                console.log(rej.response.data.info)
                setStatus(rej.response.data.errorText)
            })
    }
    return (
        <div>
            <button onClick={getTest}>CHECK</button>
            <input checked={checked} type="checkbox" onChange={onChangeHandler}/>
            <div>
                {status}
            </div>
        </div>
    );
};
