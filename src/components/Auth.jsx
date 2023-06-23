import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useState } from 'react'


export default function Auth(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    console.log(auth?.currentUser?.email)

    const signIn = async (e) => {
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch(err) {
            console.error(err)
        }
        
    }

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        } catch(err) {
            console.error(err)
        }
        
    }

    const logout = async () => {
        try{
            await signOut(auth)
        } catch(err) {
            console.error(err)
        }
        
    }


  
  

    return (
        <>
            <div className="emailPassLogin">
                <input 
                type="text" 
                placeholder='Email..'
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                type="password" 
                placeholder='Password..'
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button onClick={signIn} >Login</button>
            </div>

            <button onClick={signInWithGoogle} >Login with Google</button>
            <button onClick={logout} >Logout</button>
        </>
    )
}

