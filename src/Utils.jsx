import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./config/firebase"
import { redirect } from "react-router-dom"

export default function Utils(){
    const [userAuth, setUserAuth] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setUserAuth(user)
            } else {
                redirect("/login")
                setUserAuth(null)
               
            }
        })
        return () => {
            listen()
        }
    },[])
    return (
        <div>{userAuth ? <><p>Signed In as {userAuth.email}</p></> : <>Signed Out</>}</div>
    )
}
