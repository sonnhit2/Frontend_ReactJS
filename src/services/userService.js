import axios from "../axios";


const userService = {
    handleLoginApi: (email, password) => {
        return axios.post('/api/login',{email, password});
    },
    getAllUsers: (inputId) =>{
        return axios.get(`/api/get-all-users?id=${inputId}`);
    }
}


export default userService;
