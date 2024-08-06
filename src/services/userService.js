import axios from "../axios";


const userService = {
    handleLoginApi: (email, password) => {
        return axios.post('/api/login',{email, password});
    },
}



export default userService;
