const api = 'http://192.168.0.06/api/materialfood/';
export const ApiService = {
    get(){
        return fetch(`${api}${endpoint}`)
            .then(reponse => Response.json())
    },
    post(endpoint, data){
        return fetch(`${api}${endpoint}` {
            method: 'POST',
            HEADERS: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(reponse => Response.json())
    }

}