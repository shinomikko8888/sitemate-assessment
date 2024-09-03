import axios from "axios";

import { DOMAIN } from "../constants";

export const fetchData = async (action, dataArray = []) => {
    try{
        const data = dataArray.map(item => `${item[0]}=${item[1]}`).join('&');
        let response;
        response = await axios.get(`${DOMAIN}/index.php?a=${action}&${data}`);
        return response.data;
        
    }
    catch (error){
        throw new Error (`Error fetching data: ${error}`)
    }
}

export const handleSubmit = async (event, formData) => {
    event.preventDefault();
    try {
        let data;
        data = {
            ...formData
        };
        const response = await axios.post(`${DOMAIN}/index.php`, data);
        return response.data;
    } catch (error) {
        throw new Error(`Error handling submit: ${error}`);
    }
}

export const handleChange = (event, callback) => {
    try {
        const { name, value, type } = event.target;
        let val = type === 'file' ? event.target.files[0] : value;

        callback(prevState => ({
            ...prevState,
            [name]: val
        }));
    } catch (error) {
        throw new Error(`Error handling change: ${error}`);
    }
};

export const isFormDataValid = (data) => {
    for (const key in data){
    if(data.hasOwnProperty(key) && (data[key] === '' || data[key] === null)){
            return false;
        }
    }
    return true;
}