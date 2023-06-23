import { redirect } from "react-router-dom"
import { db } from "../config/firebase"
import { useState, useEffect } from "react"
import { getFirestore, getDocs, collection } from 'firebase/firestore'




export default function Home(){
    const [fixtureList, setFixtureList] = useState([])
    const fixturesCollectionRef = collection(db, "fixtures")

    useEffect(() => {
        const getFixtureList = async () => {
            try {
                const data = await getDocs(fixturesCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))
                setFixtureList(filteredData)
            } catch (err){
                console.log(err)
            }
            

        }

        getFixtureList()

    }, [])

    
    return (

        <>
        <h1>Home</h1>
        
            {fixtureList.map((fixture) => 
            (
                <div className="fixtureBox" key={fixture.id}>
                <h1 >{fixture.model}</h1>
                <p>{fixture.manufacturer}</p>
                </div>

            )
                
            
             
            )}
       
        
        </>
    )
}