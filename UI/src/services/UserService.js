import { URLService } from "./URLService"

export const uploadImage = async function(file, name, id){
    try{
        let url = URLService.uploadImageURL;
        const formData = new FormData;
        formData.append('files', file, name);
        formData.append('id', id);

        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('token'),
                'Origin':'http://localhost:3000',
            },
            body:formData
        });

        let files = await response.json()
        console.log('uploadResponse', files);
        return files;

    } catch {
        alert('Error uploading the files')
        console.log('Error uploading the files')
    }
}