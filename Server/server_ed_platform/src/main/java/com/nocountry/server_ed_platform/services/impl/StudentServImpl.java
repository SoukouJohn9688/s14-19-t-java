package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServImpl implements StudentService {
    @Autowired
    private final StudentRepo studentRepo;
    @Autowired
    private final ModelMapper modelMapper;

    @Override
    public List<StudentDTO> findAll() {
        List<Student> studentsDB = studentRepo.findAll();
        List<StudentDTO> studentDTOS = new ArrayList<>();
        for (Student student : studentsDB){
            studentDTOS.add(modelMapper.map(student, StudentDTO.class));
        }
        return studentDTOS;
    }

    @Override
    public StudentDTO findById(Long id) throws StudentNotFoundException {
        Student student = studentRepo.findById(id).orElse(null);
        if(student != null){
            return modelMapper.map(student, StudentDTO.class);
        } else {
            throw new StudentNotFoundException("Student with ID: " + id + " not found.");
        }
    }

    @Override
    public StudentDTO createStudent(StudentRegisterDTO request) {
        Student student = Student.builder()
                .name(request.getName())
                .surname(request.getSurname())
                .email(request.getEmail())
                .password(request.getPassword())
                .role(UserRole.valueOf(request.getRole()))
                .build();
        Student studentDB = studentRepo.save(student);
        return modelMapper.map(studentDB,StudentDTO.class);
    }

    @Override
    public StudentDTO updateStudent(Long id, StudentRegisterDTO request) throws StudentNotFoundException{
        Optional<Student> student = studentRepo.findById(id);

        if (student.isPresent()){
            modelMapper.map(request, student.get());

            return modelMapper.map(student.get(), StudentDTO.class);
        } else {
            throw new StudentNotFoundException("Student with ID: "+id+" not found.");
        }
    }
}
