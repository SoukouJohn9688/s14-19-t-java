package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.Request.StudentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.SubjectDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.SubjectRepo;
import com.nocountry.server_ed_platform.services.SubjectService;
import com.nocountry.server_ed_platform.utils.ListSubject;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final StudentRepo studentRepo;
    private final SubjectRepo subjectRepo;

    @Override
    public Subject findById(Long id) throws SubjectNotFoundException {

        Optional<Subject> subjectDB=subjectRepo.findById(id);

        return subjectDB.orElse(null);

    }

    @Override
    public SubjectDTO createStudent(StudentRegisterDTO request) {
        return null;
    }

    @Override
    public SubjectDTO updateStudent(Long id, StudentRegisterDTO request) {
        return null;
    }

    @Override
    public void AssignSubjectsByCurrentYear(Long studentId, int currentYear) {

        Optional<Student> studentDB = studentRepo.findById(studentId);

        if(studentDB.isEmpty()){
            throw new RuntimeException("Estudiante no encontrado");
        }

        ListSubject listSubject = new ListSubject();
        studentDB.get().setSubjects(listSubject.getSubjects());

        System.out.println("Materia del estudiante con id " + studentId);
        System.out.println(studentDB.get().toString());

    }
}
