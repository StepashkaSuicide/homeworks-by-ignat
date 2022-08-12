
type ActionType = ReturnType<typeof changeThemeC>
type InitialStateType = typeof initState

const initState = {
    value: 'dark'
};

export const themeReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'change_theme': {
            return {
                ...state,
                value: action.payload.value
            };
        }
        default: return state;
    }
};




export const changeThemeC = (value: string) => {
return {
    type: 'change_theme',
    payload: {value}
}as const
}; // fix any