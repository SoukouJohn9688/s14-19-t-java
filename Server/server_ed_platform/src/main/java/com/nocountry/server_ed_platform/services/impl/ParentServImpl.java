package com.nocountry.server_ed_platform.services.impl;


import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Request.ParentRegisterDTO;
import com.nocountry.server_ed_platform.entities.Parent;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.repositories.ParentRepo;
import com.nocountry.server_ed_platform.services.ParentService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ParentServImpl implements ParentService {


    private final ParentRepo parentRepo;
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
                .build();
        Parent parentDB = parentRepo.save(parent);
        return modelMapper.map(parentDB,ParentDTO.class);
    }

    @Override
    public ParentDTO updateParent(Long id, ParentRegisterDTO request) throws ParentNotFoundException {
        return null;
    }

    @Override
    public Double getGradeOfSubject(Long idSubject, Long idStudent) {
        return null;
    }

}
