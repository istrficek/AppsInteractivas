import { URLService } from "./URLService";

export const getChilds = (userId) => {

    fetch(URLService.getChildsURL + userId)
        .then((response) => response.json())
        .then((data) => {          
            return data;
        })   
        .catch((error) => { console.log(error) })     
}