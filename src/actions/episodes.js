import { types } from '../types/types'
import axios from 'axios'

export const getEpisodesAction = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`http://www.mocky.io/v2/594abb60100000350c1aa595`)
            dispatch({
                type: types.GET_EPISODES_SUCCESS,
                payload: res.data.response.seasons
            }) 

            //console.log(res.data.response.seasons)
        } catch (error) {
            console.log(error)
        }
      
    }
}