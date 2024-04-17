package com.nocountry.server_ed_platform.utils;


import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = RoleValidator.class)
@Target({ElementType.FIELD,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidRole {
    String message() default "El rol no es valido, debe ser profesor, estudiante o padre.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};


}
