package com.nocountry.server_ed_platform.services;


import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.repositories.TeacherRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherServImpl implements TeacherService {

    private final TeacherRepo teacherRepo;



    @Override
    public List<TeacherDTO> findAll() {
        return teacherRepo.findAll();
    }

    @Override
    public TeacherDTO createTeacher(TeacherRequest request) {
        return null;
    }

    @Override
    public TeacherDTO findById(Long id) {
        return null;
    }
}
