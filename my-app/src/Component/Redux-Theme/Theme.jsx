import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./ThemeActions";

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    console.log(theme);
    const colorScheme = {
        color: theme==='light' ? 'black' : 'white',
        backgroundColor: theme === 'light' ? 'white' : 'black' ,
    }
    const style = {
        div: {
            ...colorScheme,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        btn: {
            ...colorScheme,
            height: '40px',
            width: '150px',
            borderRadius: '10px',
            cursor: 'pointer',
        }
    }
    const handleThemeChange = () => {
        dispatch(toggleTheme()); 
    };

    return (
        <div style={style.div} >
            <h1>Theme</h1>
            <button onClick={handleThemeChange} style={style.btn}>Change Theme</button>
        </div>
    )
}


export default Theme;

