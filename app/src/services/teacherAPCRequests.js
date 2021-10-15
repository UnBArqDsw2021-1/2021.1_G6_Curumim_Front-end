import CurumimBackEnd from './config.js'

function listClass(token) {
    return CurumimBackEnd.get('/teacher/list-my-classes', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

const teacher = {
    listClass
}

export default teacher