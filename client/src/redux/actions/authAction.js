import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {                                        
    try {
        dispatch({ type: 'NOTIFY',  payload: {loading: true} })
        const res = await postDataAPI('login', data);
        console.log(res);
        localStorage.setItem("firstLogin",true)

        dispatch({ 
            type: 'AUTH', 
            payload: {
                success: res.data.access_token,
                user: res.data.user
            } 
        })

        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                success: res.data.msg
            } 
        })
    } catch (err) {
        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}