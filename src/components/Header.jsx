import { Link, NavLink } from "react-router-dom"
import Utils from "../Utils"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold"
    }

    return (

        <>
        <Utils />
        <Link to="/">xcross</Link>
        <nav>
            <NavLink
                to="/login"
                style={({isActive}) => isActive ? activeStyles : null }
            >
                login
            </NavLink>
        </nav>
        
        </>
    )
}