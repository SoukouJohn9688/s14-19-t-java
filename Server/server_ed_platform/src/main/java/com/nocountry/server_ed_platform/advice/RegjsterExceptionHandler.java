package com.nocountry.server_ed_platform.advice;


import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class RegjsterExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String,String> handleInvalidArguments(MethodArgumentNotValidException ex){
            Map<String,String> errors=new HashMap<>();

            ex.getBindingResult().getFieldErrors().forEach(error->{
                errors.put(error.getField(),error.getDefaultMessage());
            });

            return errors;
    }


}
