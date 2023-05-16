import { Team } from "./Team"
import './TeamContainer.css'
export function TeamContainer(props){

    const teamList=props.tl
  
    return(
        <>
  
      {teamList.map((team) => (
        <Team key={team.id} id={team.id} name={team.name} founded={team.founded} wins={team.numberOfWc
        } paid={team.paid} selectedId={props.selectedId} setModifySelected={props.setModifySelected} teamSelected={props.teamSelected} setTeamSelected={props.setTeamSelected}/>
      
      ))}

        </>
    )

}