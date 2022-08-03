import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, any>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    // const loading = false

    const setLoading = () => {

        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    }

return (
    <div>s
        <hr/>
        homeworks 10

        {/*should work (должно работать)*/}
        {loading
            ? (
                <div><img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="loader"/></div>
            ) : (
                <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>
            )
        }

        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<Alternative/>*/}
        <hr/>
    </div>
)
}

export default HW10
