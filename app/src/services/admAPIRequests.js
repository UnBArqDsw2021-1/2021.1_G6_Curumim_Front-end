import CurumimBackEnd from './config.js'

function listGuardians(token) {
    return CurumimBackEnd.get('/adm/list-guardians', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

function registerTeacher(token) {
    return CurumimBackEnd.post('/adm/register-teacher', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

const adm = {
    listGuardians,
    registerTeacher
}

export default adm
