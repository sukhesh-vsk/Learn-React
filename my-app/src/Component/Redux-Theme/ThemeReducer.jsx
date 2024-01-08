import { CHANGE_THEME } from "./ThemeActions"

const initialTheme = {
    theme: 'light',
}

export const ThemeReducer = (state = initialTheme, action) => {
    if(action.type === CHANGE_THEME) {
        return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
        }
    }

    return state
}