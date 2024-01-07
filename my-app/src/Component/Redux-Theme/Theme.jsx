import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./ThemeActions";

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state);
    // console.log(theme);
    const style = {
        div: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        btn: {
            height: '40px',
            width: '150px',
            borderRadius: '10px',
            cursor: 'pointer',
            color: theme.color,
            backgroundColor: theme.backgroundColor,
        }
    }
    const handleThemeChange = () => {
        dispatch(toggleTheme()); 
    };

    return (
        <div style={style.div} >
            <h1>Theme</h1>
            <button onClick={handleThemeChange}>Change Theme</button>
        </div>
    )
}


export default Theme;

