
export type ActionType = ReturnType<typeof loadingAC>

type loadingACType = {
    type: 'loading_type',
    isLoading: boolean
}

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
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: 'loading_type',
        isLoading
    } as const
} // fix any