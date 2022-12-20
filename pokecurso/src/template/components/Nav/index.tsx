import React from "react";
import logo from "../../../assets/logo.png";
import { BsPersonCircle } from "react-icons/bs";

import {
    NavBar,
    Logo
} from "./styles";
const Nav = () =>{
    return (
        <NavBar>
            <Logo src={logo} alt="Logo da aplicação" />
            <BsPersonCircle color="#FFFFFF" size="2.5em" className="float-md-end m-3 mt-3 "/>
        </NavBar>
    );
   
}
export default Nav;