import { useState } from "react"
import { Login } from "./Login"
import './PageBody.css'
import { Registration } from "./Registration"
import { ActionButtons } from "./ActionButtons"
export function PageBody(){
const [loginProcess,setLoginProcess]=useState(false)
const [registrationProcess,setRegistrationProcess]=useState(false)
const [userLoggedIn,setUserLoggedIn]= useState(false)


function setLogin(bool){
    setLoginProcess(bool)
}
    return(
        <>
        <div id="topDecoration"></div>
        <div id="Main" >
        <button className="NavButton" onClick={()=>{
            setLoginProcess(true)
            setRegistrationProcess(false)
            }}>Login</button>
        <button className="NavButton" onClick={()=>{
            setRegistrationProcess(true)
            setLoginProcess(false)
            }}>Resgister</button>
             <button className="NavButton" onClick={()=>{
            setRegistrationProcess(false)
            setLoginProcess(false)
            }}>F1 Teams</button>
            <button className="NavButton" onClick={()=>{
                if(userLoggedIn){
                    alert("Logged out")
                }
            setUserLoggedIn(false)
            
            }}>Log out</button>
           
        </div>
        <div id="background" 
        > 
        {!loginProcess && !registrationProcess ? <ActionButtons userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/> : ''}
        {loginProcess ? <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} login={loginProcess} setLogin={setLogin} registration={registrationProcess} setRegistration={setRegistrationProcess}/>:''}
        {registrationProcess ? <Registration userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} registration={registrationProcess} setRegistration={setRegistrationProcess} login={loginProcess} setLogin={setLogin}/>:''}
        </div>
        </>
    )   
}