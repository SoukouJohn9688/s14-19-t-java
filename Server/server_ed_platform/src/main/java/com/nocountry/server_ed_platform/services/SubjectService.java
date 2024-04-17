package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;

public interface SubjectService {

    Subject findById(Long id) throws SubjectNotFoundException;
    SubjectDTO createStudent(StudentRegisterDTO request);

    SubjectDTO updateStudent(Long id, StudentRegisterDTO request);


    void AssignSubjectsByCurrentYear(Long studentId, int currentYear);
}
