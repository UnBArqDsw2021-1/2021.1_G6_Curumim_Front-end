import CurumimBackEnd from './config.js'

var API = {
	loadADMProfile:() => {
        return CurumimBackEnd.get('/adm_profile')
    },
    
    getActivityDetail: {
        "nome": "Anotação 3", "turma": "A", "professor": "Juliana", "descricao": "atividade maluca", "data": "15/10/2021"
    },

    getEventDetail: {
        "nome": "Evento 1", "turma": "A", "professor": "Juliana", "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt facilisis ullamcorper. Sed elit massa, tempus eu efficitur sit amet, tristique id turpis. Duis non massa tempus, scelerisque justo at, egestas quam.", "data": "05/08"
    }
}

export default API;