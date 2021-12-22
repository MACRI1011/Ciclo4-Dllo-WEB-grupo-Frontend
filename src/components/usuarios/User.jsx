import React from 'react'

const user = () => {
    const user = sessionStorage.getItem("user")
    // const user = JSON.parse(sessionStorage.getItem('user'));
   const data=  JSON.parse(user);
    return (
        <div>
           {data.id}
        </div>
    )
}

export default user

