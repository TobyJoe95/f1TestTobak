package com.myprojects.f1managerapi.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path="api/team")

public class TeamController {

    private final TeamService teamService;
    @Autowired
    public TeamController(TeamService teamService){
        this.teamService=teamService;
    }

    @GetMapping

    public List<Team> getTeams(){
        System.out.println("listed teams");
        return teamService.getTeams();
    }

    @PostMapping
    public void createTeam(@RequestBody Team team){
        teamService.createTeam(team);
    }
    @DeleteMapping("/delete/{Id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteTeam(@PathVariable Long Id){teamService.deleteTeam(Id);}

    @PutMapping("/update/{Id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void modifyTeam(@RequestBody Team team, @PathVariable Long Id){teamService.modifyTeam(Id,team);}


}
