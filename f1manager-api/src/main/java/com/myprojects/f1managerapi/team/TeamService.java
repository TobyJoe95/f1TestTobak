package com.myprojects.f1managerapi.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    private final TeamRepository teamRepository;
    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getTeams(){
        System.out.println(teamRepository.findAll());
        return teamRepository.findAll();

    }


    public void createTeam(Team team){
        System.out.println(team);
        Optional<Team> teamById = teamRepository.findTeamByName(team.getName());
        if(teamById.isPresent()){
            throw new IllegalStateException("Team "+ team.getName()+" is already created");
        }
        teamRepository.save(team);

    }

    public Team modifyTeam(Long id, Team newTeam){
      return teamRepository.findById(id)
              .map(team->{
                  team.setName(newTeam.getName());
                  team.setFounded(newTeam.getFounded());
                  team.setNumberOfWc(newTeam.getNumberOfWc());
                  team.setPaid(newTeam.paid);
                  return teamRepository.save(team);
              }).orElseThrow(()->new IllegalStateException());
    }
    public void deleteTeam(Long teamId){
        boolean exists=teamRepository.existsById(teamId);
        if(!exists){
            throw new IllegalStateException("Team with "+ teamId+" does not exist by this id");
        }
        teamRepository.deleteById(teamId);

    }


}
