import { Link } from "react-router-dom";
import {useState} from 'react';
function Header() {
        const [number,setNumber]=useState("sanjay");
        let str="react";
        return (

                <>
                        <h1 id="headTxt">Welcome to {str}</h1>
                        <ul className="Ul">
                                <li>
                                        <Link to="/Home">Home</Link>

                                </li>
                                <li>
                                        <Link to="/Courses">Courses</Link>

                                </li>
                                <li>
                                        <Link to="/Contact">Contact us</Link>

                                </li>
                        </ul>
                        <h1>{number}</h1>
                        <button onClick={()=>{setNumber("v")}}>Add+</button>
                </>
        );
}
export default Header;