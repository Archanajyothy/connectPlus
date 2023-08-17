import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jinka-u5kf.onrender.com/api', // Set the base URL for all requests,
    withCredentials: true
  });
  
export const getDataAPI = async (url, token) => {
    const res = await instance.get(`${url}`,{
        headers: { Authorization: token}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await instance.post(`${url}`, post,{
        headers: { Authorization: token}
    })
    return res
}

export const putDataAPI = async (url,post, token) => {
    const res = await instance.put(`${url}`,post,{
        headers: { Authorization: token}
    })
    return res
}

export const patchDataAPI = async (url,post, token) => {
    const res = await instance.patch(`${url}`,post,{
        headers: { Authorization: token}
    })
    return res
}

export const deleteDataAPI = async (url, token) => {
    const res = await instance.delete(`${url}`,{
        headers: { Authorization: token}
    })
    return res
}
