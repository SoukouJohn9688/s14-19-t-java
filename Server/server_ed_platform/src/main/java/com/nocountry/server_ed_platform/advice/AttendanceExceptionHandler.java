package com.nocountry.server_ed_platform.advice;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.exceptions.AttendanceNotFoundException;
import com.nocountry.server_ed_platform.exceptions.DuplicateDateException;
import com.nocountry.server_ed_platform.exceptions.FutureDateException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AttendanceExceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(AttendanceNotFoundException.class)
    public ResponseGenericDTO<String> handleAttendanceNotFoundException(AttendanceNotFoundException exception){
        return new ResponseGenericDTO<>(false, exception.getMessage(), null);
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DuplicateDateException.class)
    public ResponseGenericDTO<String> handleDuplicateDateException(DuplicateDateException exception){
        return new ResponseGenericDTO<>(false, exception.getMessage(), null);
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(FutureDateException.class)
    public ResponseGenericDTO<String> handleFutureDateException(FutureDateException exception){
        return new ResponseGenericDTO<>(false, exception.getMessage(), null);
    }

}
