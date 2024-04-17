package com.nocountry.server_ed_platform.advice;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class SubjectExceptionHandler {

        @ResponseStatus(HttpStatus.NOT_FOUND)
        @ExceptionHandler(SubjectNotFoundException.class)
        public ResponseGenericDTO<String> handleSubjectNotFoundException(SubjectNotFoundException exception){
            return new ResponseGenericDTO<>(false, exception.getMessage(), null);
        }



    }



