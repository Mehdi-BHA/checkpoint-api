import React from 'react'
import './style.css'

const UserCard = ({name,username,email}) => {
    return (
        <div className="user-card">
            <div className="avatar-container">
                <p className="avatar">
                    {name.split(' ').map(str=>str[0]).join('')}
                </p>
            </div>
            <p><span>Name: </span>{name}</p>
            <p><span>Username: </span>{username}</p>
            <p><span>Email: </span>{email}</p>
            <button className="infos-btn">More infos</button>
        </div>
    )
}

export default UserCard
