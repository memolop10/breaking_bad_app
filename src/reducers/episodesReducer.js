import { types } from "../types/types";

const initialState = {
    episodes:[]
}

export const episodesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.GET_EPISODES_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}