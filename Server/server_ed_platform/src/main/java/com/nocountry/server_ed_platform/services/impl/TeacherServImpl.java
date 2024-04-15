package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Classroom;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Teacher;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import com.nocountry.server_ed_platform.repositories.ClassroomRepo;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.TeacherRepo;
import com.nocountry.server_ed_platform.services.TeacherService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class TeacherServImpl implements TeacherService {

    @Autowired
    private final TeacherRepo teacherRepo;
    @Autowired
    private final ModelMapper modelMapper;
    @Autowired

    private final ClassroomRepo classroomRepo;
    @Autowired
    private final StudentRepo studentRepo;
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
    public TeacherDTO updateTeacher(Long id, TeacherRegisterDTO request) throws TeacherNotFoundException {
        Optional<Teacher> teacherFound=teacherRepo.findById(id);

        if (teacherFound.isPresent()){
            modelMapper.map(request, teacherFound.get());

            return modelMapper.map(teacherFound.get(), TeacherDTO.class);
        }
        else {

            throw new TeacherNotFoundException("Teacher with ID " + id + " not found.");
        }


    }

    @Override
    public List<StudentDTO> getListStudentByClassroom(Long idClassroom ) {

        Optional<Classroom> classroomDB= classroomRepo.findById(idClassroom);

        if(classroomDB.isPresent()){
//            Classroom thisClassroom=classroomDB.get();
            // Obtener lista de profesores en la clase

            return studentRepo.findAllByClassroomId(idClassroom);
        }
        return Collections.EMPTY_LIST;
    }
}
