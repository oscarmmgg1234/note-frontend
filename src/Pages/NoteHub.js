import React, {useState, use, useContext} from "react";
import {core_context} from "../App";


function NoteHub(props){

    const {UserInfo} = useContext(core_context);
    
    return(<h1>{"Welcome " + UserInfo.FName + " to Note+"}</h1>);
}

export default NoteHub;