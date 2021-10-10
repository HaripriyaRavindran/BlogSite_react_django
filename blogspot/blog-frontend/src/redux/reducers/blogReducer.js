const initialState = {
    isLogin: false,
    isSavingsAccount: true,
};
export const blogReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "LOGIN":
            return {...state, isLogin: true}
        case "LOGOUT":
            return {...state, isLogin: false}
    
        default:
            return state;
    }
};