import CurumimBackEnd from './config.js'

export default {
    login:(data) => {
        return CurumimBackEnd.post('/login', data)
    }
}