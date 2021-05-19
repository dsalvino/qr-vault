import axios from 'axios';
const API = "https://api.qr-code-generator.com/v1/create?access-token=" + process.env.REACT_APP_API_KEY

export default {
    generateCode: async function (userInput) {
        return axios.post(API, userInput);
    }
}
