import './LoginAndRegistration.css'
import { useRef, useState, useEffect } from "react"

export function Registration(props) {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const passwordInput = useRef()
    const submitRef = useRef()
    const [registrationFormOk, setRegistrationFormOk] = useState(false)
    const nameDiV = useRef()
    const check = useRef()
    let passwordVisibility = false;

    const reg = async () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { name: name, password: password }
            )
        };
        const response = await fetch('http://localhost:8080/api/user/reg', requestOptions);
        const data = await response.json()
        console.log(data);
        if (data.reg === "ok") {
            console.log(data);

            alert("User created")
        } else {
            alert("Username taken")

        }
    }


    useEffect(() => {
        if (registrationFormOk === false) {
            if (name !== "" && password !== "") {
                submitRef.current.disabled = false
                submitRef.current.style.cursor = 'pointer'

            } else {
                submitRef.current.disabled = true
                submitRef.current.style.cursor = 'not-allowed'


            }
        }
    })


    return (
        <form id="form">
            <p id="title">CREATE NEW ACCOUNT</p>
            <div className="inputHolder">
                <p className="text">Login name:</p>
                <div ref={nameDiV}>
                    <input placeholder="Username" className="inputField"
                        value={name}
                        type="text"
                        onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        } />

                </div>
                <p className="text">Password:</p>
                <input ref={passwordInput}
                    placeholder="Password"
                    className="inputField"
                    type="password"
                    value={password}
                    onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }
                    } />
                <p className="text">Show password</p>
                <input ref={check}
                    className="checkBox"
                    type="checkbox"
                    onChange={
                        (e) => {
                            if (e.target.checked) {
                                passwordVisibility = true;

                                console.log("visibility change")
                            } else {
                                passwordVisibility = false
                            } passwordVisibility ? passwordInput.current.type = 'text' : passwordInput.current.type = 'password'
                        }
                    } />


            </div>
            <input ref={submitRef}
                value="Create account"
                className="button"
                onClick={
                    (e) => {
                        e.preventDefault()
                        if (/^[a-zA-Z0-9]+$/.test(name) && /^[a-zA-Z0-9]+$/.test(password)) {
                            console.log("name and pw ok")
                            reg()
                            setRegistrationFormOk(true)
                        } else if (!/^[a-zA-Z0-9]+$/.test(name)) {
                            alert("Username can only contain letters and numbers")
                        } else {
                            alert("Password can only contain letters and numbers")
                        }

                    }
                }
                type="submit" />

        </form>
    )
}
