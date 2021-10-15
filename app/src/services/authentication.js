import CurumimBackEnd from './config.js'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login: (data) => {
        return CurumimBackEnd.post('/login', data)
    },

    register: (data) => {
        return CurumimBackEnd.post('/register-guardian', data)
    }
}