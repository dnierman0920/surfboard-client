import apiUrl from '../apiConfig'
import axios from 'axios'

// index function 
export const getAllSurfboards = () => {
    return axios(`${apiUrl}/surfboards`)
}

// show function
export const getSurfboard  = (surfboardId) => {
    return axios(`${apiUrl}/surfboards/${surfboardId}`)
}

// create function
export const createSurfboard = (user, newSurfboard) => {
    return axios({
        url:`${apiUrl}/surfboards`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {surfboard: newSurfboard}
    })
}