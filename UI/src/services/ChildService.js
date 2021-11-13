
export const getChilds = (url, userId) => {

    fetch(url + '/api/child/get/' + userId)
        .then((response) => response.json())
        .then((data) => {          
            return data;
        })   
        .catch((error) => { console.log(error) })     
}