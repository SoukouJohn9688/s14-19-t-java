package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.GradeDTO;
import com.nocountry.server_ed_platform.dtos.Request.TeacherRegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AssignGradeStudentResponseDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Grade;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.entities.Teacher;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.TeacherNotFoundException;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.repositories.TeacherRepo;
import com.nocountry.server_ed_platform.services.GradeService;
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
    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;
    private final GradeService gradeService;

    @Override
    public List<TeacherDTO> findAll() {
        List<Teacher> teachersDB = teacherRepo.findAll();
        List<TeacherDTO> teacherDTOS = new ArrayList<>();
        for (Teacher teacher : teachersDB) {
            teacherDTOS.add(modelMapper.map(teacher, TeacherDTO.class));
        }
        return teacherDTOS;
    }

    @Override
    public TeacherDTO createTeacher(TeacherRegisterDTO request) {
        Teacher teacher = Teacher.builder().name(request.getName()).surname(request.getSurname()).build();
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
        Optional<Teacher> teacherFound = teacherRepo.findById(id);

        if (teacherFound.isPresent()) {
            modelMapper.map(request, teacherFound.get());

            return modelMapper.map(teacherFound.get(), TeacherDTO.class);
        } else {

            throw new TeacherNotFoundException("Teacher with ID " + id + " not found.");
        }


    }

    @Override
    @Transactional
    public AssignGradeStudentResponseDTO assignGradeByStudentIdSubjectId(Long studentId, Long subjectId, GradeDTO request) {
        Optional<Student> studentDB = studentRepo.findById(studentId);

        if (studentDB.isEmpty()) {
            throw new RuntimeException("estudiante no encontrado");
        }

        Optional<Subject> subjectDB = subjectRepo.findById(subjectId);

        if (subjectDB.isEmpty()) {
            throw new RuntimeException("materia no encontrada");
        }

        GradeDTO response = gradeService.AssignByStudentIdAndSubjectId(studentId, subjectId, request);

        return AssignGradeStudentResponseDTO.builder().studentId(studentId).gradeDTO(response).build();
    }

    @Override
    public void assignSubject(Long subjectId, Long teacherId, String currentYear, TeacherDTO request) {

        Optional<Subject> subjectDB = subjectRepo.findById(subjectId);

        if (subjectDB.isEmpty()) {
            throw new RuntimeException("materia no encontrada");
        }

        Optional<Teacher> teacherDB = teacherRepo.findById(teacherId);

        if (teacherDB.isEmpty()) {
            throw new RuntimeException("profesor no encontrado");
        }

        List<Teacher> teachers = subjectDB.get().getTeachers();
        teachers.add(teacherDB.get());
        subjectDB.get().setTeachers(teachers);
        subjectRepo.save(subjectDB.get());

        List<Subject> subjects = teacherDB.get().getSubjects();
        subjects.add(subjectDB.get());
        teacherDB.get().setSubjects(subjects);
        teacherRepo.save(teacherDB.get());

    }

}
