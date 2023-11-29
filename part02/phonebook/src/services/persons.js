import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const del = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (contactObject) => {
    console.log(contactObject)
    return axios.put(`${baseUrl}/${contactObject.id}`, contactObject)
}

export default { getAll, create, del, update }