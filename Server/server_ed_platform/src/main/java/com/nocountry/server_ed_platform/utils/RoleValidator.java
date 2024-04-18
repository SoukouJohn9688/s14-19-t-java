package com.nocountry.server_ed_platform.utils;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class RoleValidator implements ConstraintValidator<ValidRole, String> {
    @Override
    public void initialize(ValidRole constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String role, ConstraintValidatorContext constraintValidatorContext) {
        return role.equalsIgnoreCase("STUDENT") ||
                role.equalsIgnoreCase("PARENT") ||
                role.equalsIgnoreCase("TEACHER");
    }
}