const initialState = {
    loading: false,
    response: {}
}

export default function apiReducer(state = initialState, action) {
    switch (action.type) {
        case "api/loading":
            return Object.assign({}, state, { loading: action.data })
        case "api/error":
            return Object.assign({}, state, { response: action.data })
        default:
            return state
    }
}