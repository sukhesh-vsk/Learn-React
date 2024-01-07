import { INCREMENT, DECREMENT } from "./Action";

const initialState = 0;

const Reducer = (state = initialState, action) => {
    if(action.type === INCREMENT) 
        return ++state;
    else if(action.type === DECREMENT)
        return --state;
    return state;
}


export default Reducer;