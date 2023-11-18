import axios from 'axios'

const typeUserApi = axios.create({
    baseUrl: 'http://127.0.0.1:8000/users/api/v1/typeUsers/'
})

export const getAllTypeUsers = () => typeUserApi.get('/');

export const createTypeUser = (typeUser) => typeUserApi.post('/', typeUser);