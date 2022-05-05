import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {FormBase, FormInput} from "../Components/FormBase"
import { AuthServer } from "../HTTP_CLIENT/axios_config";

function Register(props){
    const [email, setEmail] = useState("");
    const [FN, setFN] = useState("");
    const [LN, setLN] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const http_config = {
        url: '/Api/Auth/Register/User',
        method: 'post',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify({
            "Email": email,
            "Password": password,
            "First_Name": FN,
            "Last_Name": LN,
            "gender": gender == "male" ? true : false
          })
    }
    
    async function submit(){
        await AuthServer(http_config)
        .then((res)=>navigate("/NoteHub"))
    }

    return(
        <div style={{ display: "flex",flexDirection: "column",alignItems: "center", justifyContent: "center",height: "100vh"}}>
            <FormBase title={"Register"}>
                <FormInput title={"Email: "} input={email} setInput={setEmail}/>
                <FormInput title={"First Name: "} input={FN} setInput={setFN}/>
                <FormInput title={"Last Name "} input={LN} setInput={setLN}/>
                <FormInput title={"Password: "} input={password} setInput={setPassword}/>
                <FormInput title={"Gender: "} input={gender} setInput={setGender}/>
                <button onClick={()=>submit()}>Submit</button>
            </FormBase>
        </div>
    );
}

export default Register;