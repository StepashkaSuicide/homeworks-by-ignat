import {UserType} from '../HW8';


type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type CheckType = {
    type: 'check'
    payload: number
}

type ActionType = SortType | CheckType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name.localeCompare(b.name))]
            } else {
                return [...state.sort((a, b) => b.name.localeCompare(a.name))]
            }
        }

        case 'check': {
            return state.filter(f => f.age > 18)
        }
        default:
            return state
    }
}
