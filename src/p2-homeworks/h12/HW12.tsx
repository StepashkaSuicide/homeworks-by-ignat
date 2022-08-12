import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';

const themes = ['dark', 'red', 'some', 'blue', 'orange'];

function HW12() {
    // useSelector

    // useDispatch, onChangeCallback
    const theme = useSelector<AppStoreType, string>(state => state.theme.value)
    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect name={'themes'}
                         options={themes}
                         value={theme}

                         onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
