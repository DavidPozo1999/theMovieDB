import React, { useState } from "react";
import logo from '../imagenes/LOGODAVIDEO.png'
import { useNavigate, Link } from "react-router-dom";
import "../hojas_estilo/formRegister.css"

function RegisterForm(){
    const [values, setValues]=useState({
        username: "",
        email: "",
        password:""
    })
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const { target }=event;
        console.log(target)
        const { name, value}=target;
        console.log(value)
        const newValues={
            ...values,
            [name]:value
        }

        setValues(newValues)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
         // Validar el nombre de usuario
    if (values.username.length < 4) {
        document.getElementById("username-error").innerText = "El usuario debe tener al menos 4 caracteres.";
        return;
    }

    // Validar el correo electrónico
    if (values.email.indexOf("@") === -1) {
        document.getElementById("email-error").innerText = "El correo electrónico debe contener al menos un '@'.";
        return;
    }

    // Validar la contraseña
    if (values.password.length < 6) {
        document.getElementById("password-error").innerText = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Verificar si todos los campos están llenos
    if (!values.username || !values.email || !values.password) {
        document.getElementById("form-error").style.display = "block";
        return;
    }

    // Realizar una solicitud GET para obtener la lista de usuarios
    fetch("http://localhost:3001/usuarios")
        .then(response => response.json())
        .then(users => {
            // Verificar si el usuario ya existe en la lista de usuarios
            if (users.some(user => user.usuario === values.username)) {
                document.getElementById("username-error").innerText = "El usuario ya existe. Por favor, elige otro nombre de usuario.";
            } else if (users.some(user => user.correo === values.email)) {
                document.getElementById("email-error").innerText = "El correo electrónico ya está registrado con otro usuario.";
            } else {
                // Crear un objeto con los datos del nuevo usuario
                var newUser = {
                    usuario: values.username,
                    correo: values.email,
                    contraseña: values.password
                };

                // Realizar la solicitud POST para agregar el nuevo usuario
                fetch("http://localhost:3001/usuarios", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Nuevo usuario agregado:", data);
                        // Mostrar mensaje de éxito
                        document.getElementById("registration-success").style.display = "block";
                        // Redirigir al usuario a la página de inicio con un parámetro en la URL
                        navigate("/",{state:{username: values.username}});
                    })
                    .catch(error => {
                        console.error("Error al agregar nuevo usuario:", error);
                    });
            }
        })
        .catch(error => {
            console.error("Error al obtener la lista de usuarios:", error);
        });
    }
    return(
        <>
        <div className="register-body-container">
        <div className="register-container">
            <div class="logo-container">
                <img src={logo} alt="DAVIDEO Logo" />
            </div>
            <h1 className="title-form-register">Registro</h1>
            <form id="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-container">
                        <label for="username">Usuario:</label>
                        <input type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Ingresa tu usuario"
                            value={values.usuario}
                            onChange={handleChange}
                            required
                        />
                        <div id="username-error" className="error-message"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-container">
                        <label for="email">Correo Electrónico:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Ingresa tu correo electrónico"
                            value={values.correo}
                            onChange={handleChange}
                            required />
                        <div id="email-error" className="error-message"></div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label for="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Ingresa tu contraseña"
                            value={values.contraseña}
                            onChange={handleChange}
                            required />
                        <div id="password-error" className="error-message"></div>
                    </div>
                </div>
                <div id="form-error" className="error-message" style={{display: "none"}}>Por favor, completa todos los campos
                    correctamente.</div>
                <div id="registration-success" className="success-message" style={{display: "none"}}>¡Usuario registrado
                    correctamente!</div>
                <button type="submit" id="register-button">Registrarse</button>
            </form>
            <div class="footer-form-register">
                <p>¿Ya tienes una cuenta? <Link to={"/iniciosesion"}>Inicia sesión aquí</Link></p>
            </div>
        </div>
    </div>
        </>
    )
}

export default RegisterForm;
