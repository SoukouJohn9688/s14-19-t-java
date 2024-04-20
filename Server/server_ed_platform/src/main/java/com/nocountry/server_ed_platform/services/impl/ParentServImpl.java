package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.entities.Parent;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.repositories.ParentRepo;
import com.nocountry.server_ed_platform.services.ParentService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ParentServImpl implements ParentService {

    private final ParentRepo parentRepo;

    @Override
    public ParentDTO findById(Long parentId) throws ParentNotFoundException {

        Optional<Parent> parentDB = parentRepo.findById(parentId);

        if (parentDB.isEmpty()) {
            throw new ParentNotFoundException(String.format("Padre con id %s no encontrado", parentId));
        }

        return ParentDTO.builder()
                .id(parentId)
                .name(parentDB.get().getName())
                .surname(parentDB.get().getSurname())
                .dni(parentDB.get().getDni())
                .birthdate(parentDB.get().getBirthdate())
                .sex(parentDB.get().getSex().name())
                .address(parentDB.get().getAddress())
                .cellphone(parentDB.get().getCellphone())
                .build();
    }

    @Override
    @Transactional
    public List<StudentDTO> findAllChildrenByParentId(Long parentId) throws ParentNotFoundException {

        Optional<Parent> parentDB = parentRepo.findById(parentId);

        if (parentDB.isEmpty()) {
            throw new ParentNotFoundException(String.format("Padre con id %s no encontrado", parentId));
        }

        List<Student> students = parentDB.get().getStudents();

        return students.stream().map(student -> StudentDTO.builder()
                .id(student.getId())
                .name(student.getName())
                .surname(student.getSurname())
                .dni(student.getDni())
                .birthdate(student.getBirthdate())
                .address(student.getAddress())
                .sex(student.getSex())
                .cellphone(student.getCellphone())
                .build()).collect(Collectors.toList());

    }


}
