import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import userService from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import {emitter} from '../../utils/emitter';

class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }

    }

    async componentDidMount() {
        await this.getAllUsersFromReact();        
    }

    getAllUsersFromReact = async() => {
        let response = await userService.getAllUsers('ALL');
        if(response && response.errCode===0) {
            this.setState({
                arrUsers: response.users
            });
        }

    }

    handleAddNewUser = () =>{
        this.setState({
            isOpenModalUser: true
        });
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        });
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        });
    }
 
    createNewUser = async (data) => {
        try {
           let response = await userService.createNewUserService(data);    
           if(response && response.errCode!==0){
               alert(response.errMessage);
           }
           else{
               //re-load user list 
               await this.getAllUsersFromReact();
               //close popup modal create user
               this.setState({
                   isOpenModalUser:false
               });

               //empty all input value in modal popup create user
               emitter.emit('EVENT_CLEAR_MODAL_DATA'); // khong truyen data
               //emitter.emit('EVENT_CLEAR_MODAL_DATA', {'id': 'your id'}); // co truyen data
           }
        //    console.log('response create user: ',response);
        } catch (e) {
            console.log("Error: ", e);
        }
        
        console.log("check data: ",data)
    }

    handleDeleteUser = async(user) =>{
        try {
            let response = await userService.deleteUserService(user.id);
            if(response && response.errCode!==0){
                alert(response.errMessage);
            } else {
                await this.getAllUsersFromReact();
            }
            console.log("response delete user: ", response);
        } catch (e) {
            console.log(e);
        }
        console.log("user: ", user);
    }

    handleEditUser = (user) => {
        console.log(user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        });
    }

    doEditUser = async(user) =>{
        try {
            let response = await userService.editUserService(user);
            if(response && response.errCode!==0){
                alert(response.errMessage);
            }
            else {
                //reload user list
                await this.getAllUsersFromReact();
                //close modal popup edit user
                this.setState({
                    isOpenModalEditUser: false
                });
                //no need empty fields input
            }
            console.log('Click save user', response);            
        } catch (e) {
            console.log(e);
        }

    }
    /** Lifecycle
     *  Run component
     * 1. Run constructor -> init state
     * 2. DidMount (set state)
     * 3. Render
     */
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser 
                    isOpen = {this.state.isOpenModalUser}
                    toggleFromParent = {this.toggleUserModal}
                    createNewUser = {this.createNewUser}
                />
                {this.state.isOpenModalEditUser &&
                    <ModalEditUser 
                        isOpen = {this.state.isOpenModalEditUser}
                        toggleFromParent = {this.toggleUserEditModal}
                        currentUser = {this.state.userEdit}
                        editUser = {this.doEditUser}
                    />
                }
                <div className="title text-center">Manage Users </div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3'
                    onClick={this.handleAddNewUser}
                    ><i className="fas fa-plus"></i> Add new</button>
                </div>
                <div className='users-table mt-4 mx-1'>
                    <table id="customers">
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {arrUsers && arrUsers.map((item,index)=>{
                            return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button 
                                                className='btn-edit'
                                                onClick={()=>{this.handleEditUser(item)}}
                                            ><i className="fas fa-pencil-alt"></i></button>
                                            <button 
                                                className='btn-delete'
                                                onClick={()=>{this.handleDeleteUser(item)}}
                                            ><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                            )
                        })}
                        </tbody>
                    </table>                    
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
