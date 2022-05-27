import React, {Component} from 'react';
import {usersList} from './getUser';

class Users extends Component {
    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        usersList().then(data =>{
            if(data.error){
                console.log(data.error)
            }else {
                this.setState({users: data})
            }


        })
    }
    render(){
        const {users} = this.state
        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Users</h2>
                <div className='card'>
                    {users.map((user, i) => (
                        <div key = {i}>
                            <p>{user.name}</p>
                        </div>
                    ))}
                    {/* {JSON.stringify(users)} */}
                </div>
            </div>
        )
    }
}
export default Users;