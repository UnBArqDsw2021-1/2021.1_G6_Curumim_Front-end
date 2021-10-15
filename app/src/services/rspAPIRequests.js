import CurumimBackEnd from './config.js'

var API = {
    getActivity:(token, id) => {
        return CurumimBackEnd.get('/guardian/activity/' + id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
    },

    getActivities: [
	 			{"nome": "Atividade 1", "data": "30/05/2022", "descricao": "Descricao da atividade 1", "id": "1"},
        		{"nome": "Atividade 2", "data": "30/05/2022", "descricao": "Descricao da atividade 2", "id": "2"},
        		{"nome": "Atividade 3", "data": "30/05/2022", "descricao": "Descricao da atividade 3", "id": "3"}
    ],

    getEvents: [
	 			{"nome": "Evento 1", "data": "30/05/2022", "descricao": "Descricao da Evento 1", "id": "1"},
        		{"nome": "Evento 2", "data": "30/05/2022", "descricao": "Descricao da Evento 2", "id": "2"},
        		{"nome": "Evento 3", "data": "30/05/2022", "descricao": "Descricao da Evento 3", "id": "3"}
    ],

    getSchedules: [
	 			{"nome": "Agenda 1", "data": "30/05/2022", "descricao": "Descricao da agenda 1", "id": "1"},
        		{"nome": "Agenda 2", "data": "30/05/2022", "descricao": "Descricao da agenda 2", "id": "2"},
        		{"nome": "Agenda 3", "data": "30/05/2022", "descricao": "Descricao da agenda 3", "id": "3"}
    ],

    getScheduleById: {"nome": "Agenda 1", "data": "30/05/2022", "descricao": "Descricao da agenda 1", "id": "1"},
}

export default API;