import CurumimBackEnd from './config.js'

export default {
    login:(data) => {
        return CurumimBackEnd.post('/login', data)
    },

    register:(data) => {
        return CurumimBackEnd.post('/register-guardian', data)
    }
}