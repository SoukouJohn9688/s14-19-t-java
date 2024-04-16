package com.nocountry.server_ed_platform.advice;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.exceptions.EmailIncorrectException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AuthExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(EmailIncorrectException.class)
    public ResponseGenericDTO<String> handleEmailIncorrectException(EmailIncorrectException exception){
        return new ResponseGenericDTO<>(false, exception.getMessage(), null);
    }


}

