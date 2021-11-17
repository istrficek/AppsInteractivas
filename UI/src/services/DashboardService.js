import { URLService } from "./URLService";

export const getDashboard = async function(userId) {

    await fetch(URLService.getDashboardURL + userId)
            .then((response) => response.json())
            .then((data) => {          
                return data;
            })   
            .catch((error) => { console.log(error) })     
}