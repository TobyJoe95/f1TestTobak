package com.myprojects.f1managerapi.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path="api/user")
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService){
        this.userService=userService;
    }

    @PostMapping
    public Map<String, String> login(@RequestBody User user){

        return userService.login(user);
    }

    @PostMapping(value = "/reg")
    public HashMap<String, String> createUser(@RequestBody User user) {
        return userService.createUser(user);
    }




}
