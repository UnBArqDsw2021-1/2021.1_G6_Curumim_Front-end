import CurumimBackEnd from './config.js'

function listGuardians(token) {
    return CurumimBackEnd.get('/adm/list-guardians', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

const adm = {
    listGuardians
}

export default adm