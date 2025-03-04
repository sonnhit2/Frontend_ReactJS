import axios from "../axios";


const userService = {
    handleLoginApi: (email, password) => {
        return axios.post('/api/login',{email, password});
    },
    getAllUsers: (inputId) =>{
        return axios.get(`/api/get-all-users?id=${inputId}`);
    },
    createNewUserService: (data) => {
        return axios.post('/api/create-new-user',data);
    },
    deleteUserService: (userId) =>{
        return axios.delete('/api/delete-user',{data: {id: userId}});
    },
    editUserService: (inputData) => {
        return axios.put('/api/edit-user',inputData);
    }
}


export default userService;
