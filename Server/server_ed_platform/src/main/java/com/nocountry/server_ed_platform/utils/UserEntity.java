package com.nocountry.server_ed_platform.utils;


import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user")
public class UserEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long user_id;

    @NotBlank(message = "The name cannot be blank.")
    private String name;
    @NotBlank(message = "The surname cannot be blank.")
    private String surname;
    @NotBlank(message = "The email cannot be blank.")
    private String email;
//    @NotBlank(message = "The password cannot be blank.")
//    private String password;
    @NotNull(message = "The birthdate cannot be blank.")
    private LocalDate birthdate;
    @Enumerated(EnumType.STRING)
    private UserRole role;

}
