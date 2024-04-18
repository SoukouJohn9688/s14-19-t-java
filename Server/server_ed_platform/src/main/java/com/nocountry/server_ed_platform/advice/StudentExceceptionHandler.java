package com.nocountry.server_ed_platform.advice;

import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class StudentExceceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(TeacherNotFoundException.class)
    public ResponseGenericDTO<String> handleStudentNotFoundException(StudentNotFoundException exception){
        return new ResponseGenericDTO<>(false, exception.getMessage(), null);
    }

//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    @ExceptionHandler(StudentRepeatedException.class)
//    public ResponseGenericDTO<String> handleStudentRepeatedException(StudentRepeatedException exception) {
//        return new ResponseGenericDTO<>(false,exception.getMessage(), null);
//    }


}
