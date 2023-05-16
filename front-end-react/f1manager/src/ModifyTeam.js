import './TeamForm.css'

export function ModifyTeam(props) {


    return (


        <form id="teamFormContainer">
            <p>Modify</p>
            <p style={{ color: "red" }}>team with selected ID will be modified!</p>
            <p>Team Id:</p><input type="number" value={props.modifyId} onChange={e => props.setModifyId(e.target.value)} />
            <p>Team name:</p><input type="text" value={props.name} onChange={e => props.setName(e.target.value)} />
            <p>Team founded in:</p><input type="date" value={props.founded} onChange={e => props.setFounded(e.target.value)} />
            <p>Championships won:</p><input type="number" value={props.numberOfWc} onChange={e => props.setNumberOfWc(e.target.value)} />
            <p>Is season paid?:</p><input type="checkbox" value={props.paid} defaultChecked={props.paid} onChange={e => props.setPaid(!props.paid)} />
            <input type="submit" onClick={props.modifyTeam} />
            <button onClick={(e) => {

                e.preventDefault()
                props.setModifyFormOpen(false)

            }}>Back</button>
        </form>

    )
}