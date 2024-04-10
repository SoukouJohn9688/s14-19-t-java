package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.utils.ValidPassword;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDTO {

    @Email
    private String email;
    @ValidPassword
    private String password;
    @NotNull
    @NotBlank
    private String username;
    @NotNull
    @NotBlank
    private String rol;
}