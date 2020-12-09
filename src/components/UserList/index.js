import React, {useState,useEffect} from 'react';
import UserCard from '../UserCard';
import './style.css';

const UserList = () => {

    const [users,setUsers]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then((users) => {
            setUsers(users);
            console.log(users)
            setIsLoading(false)
          })
    }, []);

    if(isLoading){
        return (
            <div className="loader-container">
                    <div className="loader"></div>
            </div>
        )
    }

    return (
        <div className="users-list">
            {users.map(user=><UserCard key={user.id} name={user.name} username={user.username} email={user.email}/>)}
        </div>
    )
}

export default UserList
