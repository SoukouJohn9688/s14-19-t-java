package com.nocountry.server_ed_platform.exceptions;

import com.nocountry.server_ed_platform.services.SubjectService;

public class SubjectNotFoundException extends Exception {

    public SubjectNotFoundException(String message) {
        super(message);
    }
}
