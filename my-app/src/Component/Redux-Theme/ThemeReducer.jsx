import { CHANGE_THEME } from "./ThemeActions"

const initialTheme = {
    color: 'black',
    backgroundColor: 'white',
}

export const ThemeReducer = (state = initialTheme, action) => {
    if(action.type === CHANGE_THEME) {
        return {
            ...state,
            color: (state.color==='black') ? 'white' : 'black',
            backgroundColor: (state.backgroundColor==='black') ? 'white' : 'black',
        }
    }

    return state
}