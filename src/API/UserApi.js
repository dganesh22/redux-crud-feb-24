import axios from 'axios'

// instance
const axiosIns = axios.create({
    baseURL: "http://localhost:5600"
})

// read all
export const readAllUser =  () => {
    return axiosIns.request({
        url: `/users`,
        method: "GET"
    })
}

// read single
export const readSingleUser  =  (id) => {
    return axiosIns.request({
        url: `/users/${id}`,
        method: "GET"
    })
}

// create
export const userCreate  =  (user) => {
    return axiosIns.request({
        url: `/users`,
        method: "POST",
        data: user
    })
}


// update
export const userUpdate  =  ({user, id}) => {
    return axiosIns.request({
        url: `/users/${id}`,
        method: "PATCH",
        data: user
    })
}

// delete
export const userDelete  =  (id) => {
    return axiosIns.request({
        url: `/users/${id}`,
        method: "DELETE"
    })
}