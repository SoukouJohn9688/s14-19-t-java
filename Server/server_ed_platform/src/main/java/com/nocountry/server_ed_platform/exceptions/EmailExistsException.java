package com.nocountry.server_ed_platform.exceptions;

public class EmailExistsException extends Exception{
    public EmailExistsException(String message){
        super(message);
    }
}
