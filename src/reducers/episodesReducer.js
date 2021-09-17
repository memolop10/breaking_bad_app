import { types } from "../types/types";

const initialState = {
    listEpisodes:[]
}

export const episodesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.GET_EPISODES_SUCCESS:
            return { ...state, listEpisodes: action.payload }
        default:
            return state;
    }
}