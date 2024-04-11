package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.LoginDTO;
import com.nocountry.server_ed_platform.dtos.RegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AuthResponseDTO;
import com.nocountry.server_ed_platform.entities.Parent;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Teacher;
import com.nocountry.server_ed_platform.entities.UserEntity;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.repositories.ParentRepo;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.TeacherRepo;
import com.nocountry.server_ed_platform.repositories.UserRepository;
import com.nocountry.server_ed_platform.services.AuthService;
import com.nocountry.server_ed_platform.config.jwt.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TeacherRepo teacherRepo;
    private final StudentRepo studentRepo;
    private final ParentRepo parentRepo;

    public AuthResponseDTO login(LoginDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        System.out.println(user.toString());
        String token = jwtService.getToken(user);
        return AuthResponseDTO.builder()
                .accessToken(token)
                .tokenType("Bearer")
                .build();
    }

    public AuthResponseDTO register(RegisterDTO request) {
        Optional<UserEntity> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            throw new RuntimeException("Ya existe un usuario con ese email");
        }

        UserEntity user = UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .username(request.getUsername())
                .role(UserRole.valueOf(request.getRol().toUpperCase()))
                .build();
        userRepository.save(user);

        if (request.getRol().equalsIgnoreCase("TEACHER")) teacherRepo.save(new Teacher());
        if (request.getRol().equalsIgnoreCase("PARENT")) parentRepo.save(new Parent());
        if (request.getRol().equalsIgnoreCase("STUDENT")) studentRepo.save(new Student());

        return AuthResponseDTO.builder()
                .accessToken(jwtService.getToken(user))
                .tokenType("Bearer")
                .build();
    }
}