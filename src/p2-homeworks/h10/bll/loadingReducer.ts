
type ActionType = ReturnType<typeof loadingAC>



type initStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'loading_type':
            return {
                ...state,
                isLoading: action.payload.isLoading
            }

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): any => {
    return {
        type: 'loading_type',
        payload: {isLoading}
    } as const
} // fix any