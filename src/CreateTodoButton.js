import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){

    const onClickButton=(msg)=>{
        return()=>{

            alert(msg)
        }
    }
    return(
        <button className="CreateTodoButton"
        onClick={onClickButton('Aqupi debe abrir el alert')}
        >+</button>
    )
}

export {CreateTodoButton}