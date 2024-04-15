package com.nocountry.server_ed_platform.services.impl;


import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Request.ParentRegisterDTO;
import com.nocountry.server_ed_platform.entities.Parent;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.repositories.ParentRepo;
import com.nocountry.server_ed_platform.services.ParentService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ParentServImpl implements ParentService {

    @Autowired
    private final ParentRepo parentRepo;
    @Autowired
    private final ModelMapper modelMapper;

    @Override
    public List<ParentDTO> findAll() {
        List<Parent> parentsDB = parentRepo.findAll();
        List<ParentDTO> parentDTOS = new ArrayList<>();
        for (Parent parent : parentsDB){
            parentDTOS.add(modelMapper.map(parent, ParentDTO.class));
        }
        return parentDTOS;
    }

    @Override
    public ParentDTO findById(Long id) {
        return null;
    }

    @Override
    public ParentDTO createParent(ParentRegisterDTO request) {
        Parent parent = Parent.builder()
                .name(request.getName())
                .surname(request.getSurname())
                .email(request.getEmail())
                .password(request.getPassword())
                .role(UserRole.valueOf(request.getRole()))
                .build();
        Parent parentDB = parentRepo.save(parent);
        return modelMapper.map(parentDB,ParentDTO.class);
    }

    //getGradeOfSubject(idStudent,idSubject)
//    @Override
//    public Optional<Double> getGradeOfSubject(Long idStudent,Long idSubject){
//
//       Optional<Double> foundGrade=parentRepo.findGradeBySubject_id(idSubject);
//
//       return foundGrade;
//
//    }




}
