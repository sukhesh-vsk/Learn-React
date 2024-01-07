import { INCREMENT, DECREMENT } from "./Action";

const initialState = {
            count: 0
        };

const Reducer = (state = initialState, action) => {
    if(action.type === INCREMENT) 
        return { count: state.count+1 };
    
    else if(action.type === DECREMENT)
        return { count: state.count-1 };
    
    return state;
}


export default Reducer;