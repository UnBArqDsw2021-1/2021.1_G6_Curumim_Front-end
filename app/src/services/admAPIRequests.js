import CurumimBackEnd from './config.js'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    listGuardians: (token) => {
        return CurumimBackEnd.get('/adm/list-guardians', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    },
    registerTeacher: (token) => {
        return CurumimBackEnd.post('/adm/register-teacher', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    }
}