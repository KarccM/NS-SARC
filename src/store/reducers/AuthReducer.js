const authReducer = (state = {}, action) => {
    switch (action.type) {
        case action.type === "SET_LOGIN":
            return { ...state, loggedin: true , user: action.user};
                    
        case action.type === "SET_LOGOUT":
            return { ...state, loggedin: false, user: {} };
        
        default:
            return state;
    }
};

export default authReducer;