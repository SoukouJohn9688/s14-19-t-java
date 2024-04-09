package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Teacher;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.repositories.TeacherRepo;
import com.nocountry.server_ed_platform.services.TeacherService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeacherServImpl implements TeacherService {

    private final TeacherRepo teacherRepo;
    private final ModelMapper modelMapper;

    @Override
    public List<TeacherDTO> findAll() {
        List<Teacher> teachersDB = teacherRepo.findAll();
        List<TeacherDTO> teacherDTOS = new ArrayList<>();
        for(Teacher teacher : teachersDB){
            teacherDTOS.add(modelMapper.map(teacher, TeacherDTO.class));
        }
        return teacherDTOS;
    }

    @Override
    public TeacherDTO createTeacher(TeacherRegisterDTO request) {
        Teacher teacher = Teacher.builder()
                .name(request.getName())
                .surname(request.getSurname())
                .email(request.getEmail())
                .password("123456")
                .role(UserRole.valueOf(request.getRole()))
                .build();
        Teacher teacherDB = teacherRepo.save(teacher);
        return modelMapper.map(teacherDB, TeacherDTO.class);
    }

    @Override
    public TeacherDTO findById(Long id) {
        return null;
    }

    @Transactional
    @Override
    public TeacherDTO updateTeacher(Long id, TeacherRegisterDTO request) {
        Optional<Teacher> teacherFound=teacherRepo.findById(id);

        if (teacherFound.isPresent()){
            modelMapper.map(request, teacherFound.get());

            return modelMapper.map(teacherFound.get(), TeacherDTO.class);
        }
        else {

            throw new TeacherNotFoundException("Teacher with ID " + id + " not found.");
        }


    }
}
