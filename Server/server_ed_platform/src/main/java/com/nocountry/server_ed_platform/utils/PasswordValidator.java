package com.nocountry.server_ed_platform.utils;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;


public class PasswordValidator implements ConstraintValidator<com.nocountry.server_ed_platform.utils.ValidPassword, String> {
    private static final String PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&*()_+!]).{8,20}$";

    @Override
    public void initialize(ValidPassword constraintAnnotation) {
        // No se necesita inicialización específica
    }

    @Override
    public boolean isValid(String password, ConstraintValidatorContext context) {
        return password != null && password.matches(PASSWORD_PATTERN);
    }
}
