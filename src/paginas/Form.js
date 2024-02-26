import React from "react";
import RegisterForm from "../componentes/RegisterForm";
import LoginForm from "../componentes/LoginForm";

function Form({kindForm}){
    return(
        <>
            {kindForm==="registro" ?<RegisterForm /> : <LoginForm /> }
        </>
    )
}

export default Form