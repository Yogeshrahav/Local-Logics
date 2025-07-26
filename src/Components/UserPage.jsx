import React from 'react'

const UserPage = () => {
    let x = 20;
    let y = 30;
    const z = x + y;
    console.log(z)
  return (
    <div>
        <h2>
            Welcome {z}
        </h2>
    </div>
  )
}

export default UserPage