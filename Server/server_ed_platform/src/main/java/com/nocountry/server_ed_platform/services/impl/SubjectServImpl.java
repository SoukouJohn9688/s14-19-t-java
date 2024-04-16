package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.services.SubjectService;

import java.util.List;

public class SubjectServImpl implements SubjectService {
//    @Override
//    public List<SubjectDTO> findAll() {
//        return null;
//    }
//
//    @Override
//    public SubjectDTO findById(Long id) throws SubjectNotFoundException {
//        return null;
//    }
//
//    @Override
//    public SubjectDTO createStudent(StudentRegisterDTO request) {
//        return null;
//    }
//
//    @Override
//    public SubjectDTO updateStudent(Long id, StudentRegisterDTO request) throws StudentNotFoundException {
//        return null;
//    }

    @Override
    public void AssignSubjectsByCurrentYear(Long studentId, int currentYear) {

    }
}
