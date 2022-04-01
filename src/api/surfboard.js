import apiUrl from '../apiConfig'
import axios from 'axios'

// index function 
export const getAllSurfboards = () => {
    return axios(`${apiUrl}/surfboards`)
}