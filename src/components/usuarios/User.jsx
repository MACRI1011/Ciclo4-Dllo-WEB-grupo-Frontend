import React from 'react'

const user = () => {
    const user = localStorage.getItem("user")
    // const user = JSON.parse(localStorage.getItem('user'));
   const data=  JSON.parse(user);
    return (
        <div>
           {data.id}
        </div>
    )
}

export default user

