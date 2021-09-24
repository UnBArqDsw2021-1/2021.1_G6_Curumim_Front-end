import axios from 'axios'

const CurumimBackEnd = axios.create({
    baseURL: process.env.BACK_URL,
});

export default CurumimBackEnd; 