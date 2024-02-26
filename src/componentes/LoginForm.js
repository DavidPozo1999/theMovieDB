import React, { useState } from "react";
import logo from '../imagenes/LOGODAVIDEO.png'
import { useNavigate } from "react-router-dom";
function LoginForm(){
    const [values, setValues]=useState({
        username:"",
        password:""
    })
    const navigate= useNavigate();

    const handleChange=(event)=>{
        const {target}=event;
        const {name, value}= target;

        const newValues={
            ...values,
            [name]:value
        }

        setValues(newValues)
    }

    const handleSubmit=(event)=>{
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente
    
        // Limpiar mensajes de error
        document.getElementById("username-error").innerText = "";
        document.getElementById("password-error").innerText = "";
        document.getElementById("form-error").style.display = "none";
    
        // Validar el nombre de usuario y la contraseña
        if (values.username.length === 0 || values.password.length === 0) {
            document.getElementById("form-error").innerText = "Por favor, completa todos los campos.";
            document.getElementById("form-error").style.display = "block";
            return;
        }
    
        // Realizar una solicitud GET para verificar si el usuario existe
        fetch("http://localhost:3001/usuarios?usuario=" + values.username)
        .then(response => response.json())
        .then(users => {
            if (users.length === 0 || users[0].contraseña !== values.password) {
                document.getElementById("form-error").innerText = "Usuario o contraseña incorrectos.";
                document.getElementById("form-error").style.display = "block";
            } else {
                navigate("/",{ state: { username: values.username } })
            }
        })
        .catch(error => {
            console.error("Error al verificar el usuario:", error);
            document.getElementById("form-error").innerText = "Error al verificar el usuario. Por favor, inténtalo de nuevo más tarde.";
            document.getElementById("form-error").style.display = "block";
        });
    }
    return(
        <>
            <div class="login-body-container">
        <div class="login-container">
            <div class="logo-container">
                <img src={logo} alt="DAVIDEO Logo" />
            </div>
            <h1 className="title-form-login">Inicio de Sesión</h1>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-container">
                        <label for="username">Usuario:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Ingresa tu usuario" 
                            value={values.username}
                            onChange={handleChange}
                            required />
                        <div id="username-error" className="error-message"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-container">
                        <label for="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Ingresa tu contraseña"
                            value={values.password}
                            onChange={handleChange}
                            required />
                        <div id="password-error" className="error-message"></div>
                    </div>
                </div>
                <div id="form-error" className="error-message" style={{display: "none"}}></div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div class="footer-form-login">
                <p>¿No tienes una cuenta? <a href="registro.html">Regístrate aquí</a></p>
            </div>
        </div>
    </div>
        </>
    )
}

export default LoginForm;
