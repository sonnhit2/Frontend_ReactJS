import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import userService from '../../services/userService';
import ModalUser from './ModalUser';
import { async } from 'q';

class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false
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

    createNewUser = async (data) => {
        try {
           let response = await userService.createNewUserService(data);    
           if(response && response.errCode!==0){
               alert(response.errMessage);
           }
           else{
               await this.getAllUsersFromReact();
               this.setState({
                   isOpenModalUser:false
               });
           }
        //    console.log('response create user: ',response);
        } catch (e) {
            console.log("Error: ", e);
        }
        
        console.log("check data: ",data)
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
                                    <tr key={item.id}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>
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
