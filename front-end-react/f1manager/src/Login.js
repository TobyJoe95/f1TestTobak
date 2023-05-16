import { useRef, useState, useEffect } from "react"
import './LoginAndRegistration.css'


export function Login(props) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const submitRef = useRef()
    const [loginFormOk, setloginFormOk] = useState(false)
    const nameDiV = useRef()


    const login = async () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                password: password
            })
        };
        const response = await fetch('http://localhost:8080/api/user', requestOptions);
        const data = await response.json()
        console.log(data);
        if (data.login === "ok") {
            console.log(data);

            alert("User logged in")
            props.setUserLoggedIn(true)
        }
        else {
            console.log(data.login);
            alert("Can't log in")
            props.setUserLoggedIn(false)
        }
    }



    useEffect(() => {
        if (loginFormOk === false) {
            if (name !== "" && password !== "") {
                submitRef.current.disabled = false
                submitRef.current.style.cursor = 'pointer'

            }
            else {
                submitRef.current.disabled = true
                submitRef.current.style.cursor = 'not-allowed'


            }
        }
    })

    return (
        <>


            <form id="form">
                <p id="title">SIGN IN</p>
                <div className="inputHolder">
                    <p className="text">Login name:</p>
                    <div ref={nameDiV}>
                        <input placeholder="Username" className="inputField" value={name} type="text" onChange={(e) => { setName(e.target.value) }} />

                    </div>
                    <p className="text">Password:</p>
                    <input placeholder="Password" className="inputField" type="password" value={password} onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }} />

                </div>
                <input ref={submitRef}
                    value="Login" className="button" onClick={(e) => {
                        e.preventDefault()

                        if (!props.userLoggedIn) {
                            console.log(name)
                            console.log(password)
                            if (/^[a-zA-Z0-9]+$/.test(name) && /^[a-zA-Z0-9]+$/.test(password)) {
                                console.log("name and pw ok")
                                login()
                            }
                            else if (!/^[a-zA-Z0-9]+$/.test(name)) {
                                alert("Username can only contain letters and numbers")
                            }
                            else {
                                alert("Password can only contain letters and numbers")
                            }
                        }
                        else {
                            alert("You have to log out first, to log in ")
                        }


                    }} type="submit" />
                <p id="registrationText">Not a member yet?</p> <button className="button" onClick={(e) => {
                    e.preventDefault()
                    props.setLogin(false)
                    props.setRegistration(true)
                }}>Register</button>
            </form>



        </>

    )
}