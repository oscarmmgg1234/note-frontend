
import React, {useState, useContext, useEffect} from "react";
import { core_context } from "../App";
import {AuthServer} from "../HTTP_CLIENT/axios_config"
import {useNavigate} from "react-router-dom"
import {FormBase, FormInput} from "../Components/FormBase"


function Login(props){


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {setUserInfo, UserInfo} = useContext(core_context);
    let navigate = useNavigate();

    var axiosConfig = {
        url: '/Api/Auth/Login/User',
        method: 'post',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify({
            "Email": email,
            "Password": password
          })
        
}
var axiosConfigLS = {
    url: '/Api/Auth/Login/LS',
    method: 'post',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: {
        ID: localStorage.getItem("arg1"),
        Password: localStorage.getItem("arg2")
        
    }
}

    //encrypt data
    function setLocalStorage(arg1, arg2){
        //id
       localStorage.setItem("arg1", arg1);
       localStorage.setItem("arg2", arg2);
       //password
    
    }

    async function Submit(ls){
        if(ls === true){
            await AuthServer(axiosConfigLS)  
            .then((response)=>{if(response.data != null){
                setUserInfo({...UserInfo, ID: response.data.id, FName: response.data.first_Name, LName: response.data.last_Name});
                navigate("/NoteHub");     
        }})
        }
        else{
             await AuthServer(axiosConfig)
            .then((response)=>{
                if(response.data != null){
                setUserInfo({...UserInfo, ID: response.data.id, FName: response.data.first_Name, LName: response.data.last_Name});  
                setLocalStorage(response.data.hash_ID, response.data.hash_Password)
                navigate("/NoteHub");     
                
        }})
        }
        
    }

    useEffect(()=>{
        if(localStorage.length > 1)
        {
        
            Submit(true)
        }
       
    }, []);



    return(
    <div  style={{display: "flex",flexDirection: "column",alignItems: "center", justifyContent: "center",height: "100vh"}}>
        
    <h1>Notes+
    </h1>
    <FormBase title={"Login: "}>
    <FormInput title={"Email: "} input={email} setInput={setEmail}/>
    <FormInput title={"Password: "} input={password} setInput={setPassword}/>     
    <button onClick={()=>Submit(false)}>Submit</button>
    <button onClick={()=>navigate("/Register")}>Register</button>
    
    </FormBase>
    
   
    </div>
    )
}

export default Login;