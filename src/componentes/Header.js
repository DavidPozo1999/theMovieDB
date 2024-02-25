import React from "react";
import logo from '../imagenes/LOGODAVIDEO.png'
import Searcher from './Searcher'
import '../hojas_estilo/header.css'
import { NavLink } from "react-router-dom";
function Header(){
    return(
        <div className="header-container">
            <div className="logo-container">
                <img src={logo}></img>
            </div>
            <div className="header-options">
                <ul>
                    <li><NavLink to={'/'}>Inicio</NavLink></li>
                    <li><NavLink to={'/series'}>Series</NavLink></li>
                    <li><NavLink to={'/popular'}>Popular</NavLink></li>
                </ul>
            </div>
            <div className="searcher-container">
                <Searcher/> 
            </div>
        </div>
    )
}

export default Header