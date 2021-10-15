import CurumimBackEnd from './config.js'

function board(token, idChild) {
    return CurumimBackEnd.get(`/guardian/board/${idChild}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

const guardian = {
    board
}

export default guardian