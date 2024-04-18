package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.LoginDTO;
import com.nocountry.server_ed_platform.dtos.RegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AuthResponseDTO;
import com.nocountry.server_ed_platform.exceptions.EmailIncorrectException;

public interface AuthService {
    AuthResponseDTO login(LoginDTO request);
    AuthResponseDTO register(RegisterDTO request);
}