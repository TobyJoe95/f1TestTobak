package com.myprojects.f1managerapi.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

public HashMap<String, String> createUser(User user) {
    HashMap<String, String> map = new HashMap<>();
    Optional<User> userName = userRepository.findUserByName(user.getName());
    if (userName.isPresent()) {
        map.put("reg", "not ok");
        return map;
    } else {
        userRepository.save(user);
        map.put("reg", "ok");
        return map;
    }
}

    public Map<String, String> login(User user){
        HashMap<String, String> map = new HashMap<>();

        Optional<User> userName = userRepository.findUserByName(user.getName());
        if(userName.isPresent()){
            String userPassword = userName.get().getPassword();
            if(userPassword.equals(user.getPassword())){
                map.put("login", "ok");
                return map;
            }
        }
        map.put("login", "not ok");
        return map;
    }



}
