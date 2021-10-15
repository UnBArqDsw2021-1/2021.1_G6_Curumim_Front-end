import CurumimBackEnd from './config.js'

function login(data) {
    return CurumimBackEnd.post('/login', data)
}

function register(data) {
    return CurumimBackEnd.post('/register-guardian', data)
}

const auth = {
    login,
    register
}

export default auth
