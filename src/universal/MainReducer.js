var initial_state = {isLoggedIn : false}

export default function (state = initial_state, action) {

    switch (action.type) {
        case "PREFETCH":
            console.log("-------prefetch : ", action.payload);
            var newObj = { ...state };
            newObj.data = action.payload.pagedata
            newObj.pageType =  action.payload.pageType
            return newObj
        case "LOGIN":
            console.log("-------Login : ", action.payload);
            var newObj = { ...state };
            newObj.isLoggedIn = true
            newObj.userData = action.payload
            return newObj
        case "LOGOUT":
            var newObj = {...state};
            newObj.isLoggedIn = false
            newObj.userData = {}
            return newObj
    }

    console.log("Initial State : ", initial_state)
    return state

}