import CurumimBackEnd from './config.js'

export default{
    loadADMProfile:() => {
        return CurumimBackEnd.get('/adm_profile')
    }
}