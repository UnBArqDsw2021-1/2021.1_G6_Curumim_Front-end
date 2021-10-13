import axios from 'axios'

const CurumimBackEnd = axios.create({
    baseURL: 'https://curumim-back-end-stage.herokuapp.com',
});

export default CurumimBackEnd; 