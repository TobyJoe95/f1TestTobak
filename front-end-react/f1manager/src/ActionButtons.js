import { useEffect, useRef, useState } from "react";
import { TeamContainer } from "./TeamContainer";
import { TeamForm } from "./TeamForm";
import './ActionButtons.css'
import { ModifyTeam } from "./ModifyTeam";
import './LoginAndRegistration.css'

export function ActionButtons(props) {

    const [name, setName] = useState("")
    const [founded, setFounded] = useState("")
    const [numberOfWc, setNumberOfWc] = useState("")
    const [paid, setPaid] = useState(false)
    const selectedId = useRef()
    const userMessage = useRef()
    const [idToDelete, setIdToDelete] = useState(0)
    const [modifyFormOpen, setModifyFormOpen] = useState(false)
    const [modifyId, setModifyId] = useState(0);
    const [teamFormOpen, setTeamFormOpen] = useState(false)
    const [teamList, setTeamList] = useState([])
    useEffect(() => {
        console.log(teamList)
    }, [teamList])
    useEffect(() => {
        if (!props.userLoggedIn) {
            setTeamFormOpen(false)
            setModifyFormOpen(false)
        }
    }, [props.userLoggedIn])


    function isValidDate(dateString) {
        var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        console.log(dateString)
        if (!regex_date.test(dateString)) {
            return false;
        }

        var parts = dateString.split("-");
        var day = parseInt(parts[2], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[0], 10);

        if (year < 1000 || year > 3000 || month == 0 || month > 12) {
            return false;
        }

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            monthLength[1] = 29;
        }

        return day > 0 && day <= monthLength[month - 1];
    }



    const listData = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/team', {
                method: 'GET',
            })
            const data = await response.json()
            console.log(data)
            setTeamList(data)

        }
        catch {
            console.log("Error")

        }
    }


    const createTeam = async (event) => {
        if (!props.userLoggedIn) {
            return alert("Please log in to create a team")
        }
        if (event) {
            event.preventDefault();
        }
        if (name === "" || !isValidDate(founded) || numberOfWc < 0) {
            console.log(isValidDate(founded))
            return alert("please fill out every input correctly \n dates should be between 1000-3000 \n number of championship wins cant be negative")
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                founded: founded,
                numberOfWc: numberOfWc,
                paid: paid
            })
        };
        const response = await fetch('http://localhost:8080/api/team', requestOptions);
        const data = await response.status
        console.log(data);
        if (data === 200) {
            console.log(data);
            alert("Team created")
            listData(event)
        }
        else {
            alert("Something went wrong with team creation")
        }
    }

    const modifyTeam = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (!props.userLoggedIn) {
            return alert("Please log in to modify a team")
        }
        console.log(modifyId)
        if (!/^[0-9]+$/.test(modifyId)) {
            return alert("you can only modify a valid teamID, wich is a positive number")

        }
        if (name === "" || !isValidDate(founded) || numberOfWc < 0) {
            console.log(isValidDate(founded))
            return alert("please fill out every input correctly \n dates should be between 1000-3000 \n number of championship wins cant be negative")
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                founded: founded,
                numberOfWc: numberOfWc,
                paid: paid
            })
        };
        const response = await fetch('http://localhost:8080/api/team/update/' + modifyId, requestOptions);
        const data = await response.status
        console.log(data);
        if (data) {
            console.log(data);
            alert("Team modified successfully")
            listData(event)
        }
        else {
            alert("Something went wrong with modification")
        }
    }

    const deleteTeam = async (event) => {

        console.log(idToDelete)
        if (!/^[0-9]+$/.test(idToDelete)) {
            return alert("you can only delete a valid teamID, wich is a number")

        }
        const requestOptions = {
            method: 'DELETE',
        };
        const response = await fetch('http://localhost:8080/api/team/delete/' + idToDelete, requestOptions);
        const data = await response.status
        console.log(data);
        if (data === 200) {
            console.log(data);
            alert("Team deleted")
            listData(event)
        }
        else {
            alert("There is no team with this id")
        }
    }




    return (

        <>
            <div id="buttonContainer" >

                {teamFormOpen ? <TeamForm listData={listData} teamFormOpen={teamFormOpen} setTeamFormOpen={setTeamFormOpen} createTeam={createTeam} name={name} founded={founded} numberOfWc={numberOfWc} paid={paid} setName={setName} setFounded={setFounded} setNumberOfWc={setNumberOfWc} setPaid={setPaid} /> : ""}
                {modifyFormOpen ? <ModifyTeam modifyI={modifyId} setModifyId={setModifyId} modifyFormOpen={modifyFormOpen} setModifyFormOpen={setModifyFormOpen} modifyTeam={modifyTeam} name={name} founded={founded} numberOfWc={numberOfWc} paid={paid} setName={setName} setFounded={setFounded} setNumberOfWc={setNumberOfWc} setPaid={setPaid}></ModifyTeam> : ""}


                <button className="listButton" onClick={listData}>List teams</button>
                <button className="listButton" disabled={!props.userLoggedIn ? true : false} style={{
                    cursor: !props.userLoggedIn ? "not-allowed" : ""
                }}
                    onClick={() => {

                        setTeamFormOpen(true)

                    }}>Create new team</button>
                <button disabled={!props.userLoggedIn ? true : false} style={{
                    cursor: !props.userLoggedIn ? "not-allowed" : ""
                }} className="listButton" onClick={() => {
                    setModifyFormOpen(true)
                }
                }>Modify team</button>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <button disabled={!props.userLoggedIn ? true : false} style={{
                        cursor: !props.userLoggedIn ? "not-allowed" : ""
                    }} className="listButton" onClick={deleteTeam} >Delete Team</button>
                    <p style={{ color: "white" }}>of ID:</p>
                    <input className="inputField" type="number" value={idToDelete} onChange={e => setIdToDelete(e.target.value)} />
                </div>
                <p style={{
                    color: 'red'
                }} ref={userMessage}></p>
            </div>
            <div className="teamList">
                <TeamContainer selectedId={selectedId} tl={teamList}></TeamContainer>
            </div>


        </>
    )
}