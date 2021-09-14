import axios from 'axios'

const instance = axios.create({
    baseURL: ' https://recruitment.ultimate.systems',
})

export default instance
