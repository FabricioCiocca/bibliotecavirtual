import axios from 'axios'

const typeUserApi = axios.create({
    baseUrl: 'http://127.0.0.1:8000/credentialsUsers/api/v1/credentialsUsers/'
})

export const authenticateUser = (credentials) => {
    try {
        const response = typeUserApi.post("/", credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
}