import * as api from '../api/index'


export const deleteUser = (id) => async(dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({ type: 'DELETE', payload: id})
       
    } catch (error) {
        console.log(error)
    }
}