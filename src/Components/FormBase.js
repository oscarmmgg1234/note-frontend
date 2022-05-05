import React, {useState} from "react";
import "./FormBase.css"


function FormBase(props){
    
    return (
        <>
        <div className={"FormContainer"}>
        <h1>{props.title} </h1>
        {props.children}
        </div>
        </>
    )
}

function FormInput(props){
    //input ==> setInput
    return (
        <>
        <div className={"InputContainer"}>
        <h3>{props.title}</h3>
        <input value={props.input} onChange={(eve)=>props.setInput(eve.target.value)} />
        </div>
        </>
    )
}


export {FormBase, FormInput};