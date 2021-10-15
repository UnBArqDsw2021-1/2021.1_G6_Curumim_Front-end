import CurumimBackEnd from './config.js'

function loadCEProfile() {
    return CurumimBackEnd.get('/adm_profile')
}

var API = {
    //loadCEProfile
    getCEData: {
        "name": "Centro Educacional Curumim", 
        "adress": "Asa Sul", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt facilisis ullamcorper. Sed elit massa, tempus eu efficitur sit amet, tristique id turpis. Duis non massa tempus, scelerisque justo at, egestas quam."
    }
}

export default API;