package com.nocountry.server_ed_platform.dtos;

import com.nocountry.server_ed_platform.utils.ValidPassword;
import com.nocountry.server_ed_platform.utils.ValidRole;
import jakarta.validation.constraints.*;
import jakarta.validation.executable.ValidateOnExecution;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDTO {

    @NotNull( message = "El correo es obligatorio")
    @NotBlank( message = "El correo no debe estar en blanco")
    @Email
    private String email;
    @NotNull ( message = "La contraseña no debe estar en blanco")
    @NotBlank( message = "La contraseña no debe estar en blanco")
    @Length(min = 8, max = 20,message = "La contrasena debe contener un minimo de 8 characteres")
    @ValidPassword
    private String password;
    @NotNull( message = "El nombre de usuario es obligatorio")
    @NotBlank( message = "El nombre de usuario no debe estar en blanco")
    private String username;

    @ValidRole
    @NotNull( message = "El rol es obligatorio")
    @NotBlank( message = "El rol no debe estar en blanco")
    private String rol;
}