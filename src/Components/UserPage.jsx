import React, { useEffect, useState } from 'react'

const UserPage = () => {
    let x = 20;
    let y = 30;
    const z = x + y;
    console.log(z)

    const [ user, setUser] = useState([]);
    const [ show, setShow] = useState("VIEW")
    // const [ loading, setLoading] = useState(true);

    const toShow = () =>{
        setShow((prevShow) => (prevShow === "VIEW"? "HIDE":"VIEW"))
    }
    

    useEffect(() =>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then((res) => res.json())
         .then((data) =>{
            setUser(data);
            // setLoading(false)
         })
    })
  return (
    <div>
        <h2>
            Welcome {z}
        </h2>
        {/* <ul>
            { user.map((user) =>(
             <li key={user.id}>{user.id} {user.name} ({user.email})</li>
            ))}
        </ul> */}
        <button onClick={toShow}>{show === "VIEW"?"HIDE":"VIEW"}</button>
        <ul>
            {user.map((user) =>(
                <li key={user.id}>{user.id} {user.name} {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserPage