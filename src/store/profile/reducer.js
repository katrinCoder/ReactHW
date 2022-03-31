import { CHANGE_SHOW_NAME } from "./actions"

const initialState = {
    showName: false,
    name: 'default'
}

export const profileReducer = ( state=initialState, action) => {
    switch(action.type) {

        case CHANGE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName
            }

        default:
            return state
    }
}