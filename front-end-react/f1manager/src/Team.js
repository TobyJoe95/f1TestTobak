import { useRef} from 'react'
import './Team.css'

export function Team (props){
    const paidText=useRef()

          
    props.paid ? paidText.current="Paid":paidText.current="Not paid"
    return(
<>


<div id="team">
        <div className="teamDataContainer"><p>Team id:</p>{props.id}</div>
        <div className="teamDataContainer"><p>Team name:</p>{props.name}</div>
        <div className="teamDataContainer"><p>Founded:</p>{props.founded}</div>
        <div className="teamDataContainer"><p>number of WC title:</p>{props.wins}</div>
        <div className="teamDataContainer"><p>Is season paid:</p>{paidText.current}</div>

</div>
</>
    )
}