package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.utils.ValidPassword;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {

    @NotBlank(message = "El correo no debe estar en blanco")
    @Email
    private String email;

    @NotBlank( message = "La contraseña no debe estar en blanco")
    @Length(min = 8, max = 20,message = "La contrasena debe contener un minimo de 8 caracteres")
    @ValidPassword
    private String password;
}
