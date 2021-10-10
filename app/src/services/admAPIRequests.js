import CurumimBackEnd from './config.js'

export default{
    listGuardians:(token) => {
        return CurumimBackEnd.get('/adm/list-guardians', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    }
}