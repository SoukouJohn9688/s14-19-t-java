package com.nocountry.server_ed_platform.utils;


import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = PasswordValidator.class)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPassword {

    String message() default "La contraseña no cumple con los estandares.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
