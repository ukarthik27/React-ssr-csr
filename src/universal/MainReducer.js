var initial_state = {}

export default function (state = initial_state, action) {

    switch (action.type) {
        case "PREFETCH":
            console.log("-------prefetch : ", action.payload);
            var newObj = { ...state };
            newObj.username = action.payload.username
            newObj.data = action.payload.pagedata
            newObj.pageType =  action.payload.pageType
            return newObj
    }

    console.log("Initial State : ", initial_state)
    return state

}