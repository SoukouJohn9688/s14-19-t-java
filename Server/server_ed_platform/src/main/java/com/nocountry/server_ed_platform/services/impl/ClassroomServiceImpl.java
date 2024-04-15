package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.dtos.ClassroomDTO;
import com.nocountry.server_ed_platform.dtos.Request.ClassroomRegisterDTO;
import com.nocountry.server_ed_platform.entities.Classroom;
import com.nocountry.server_ed_platform.exceptions.ClassroomNotFoundException;
import com.nocountry.server_ed_platform.repositories.ClassroomRepo;
import com.nocountry.server_ed_platform.services.ClassroomService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClassroomServiceImpl implements ClassroomService {

    private final ClassroomRepo classroomRepo;
    private final ModelMapper modelMapper;
    @Override
    public ClassroomDTO updateClassroom(Long classroom_id, ClassroomRegisterDTO request) throws ClassroomNotFoundException {
        Optional<Classroom> classroomFound=classroomRepo.findById(classroom_id);

        if (classroomFound.isPresent()){
            modelMapper.map(request, classroomFound.get());

            return modelMapper.map(classroomFound.get(), ClassroomDTO.class);
        }
        else {

            throw new ClassroomNotFoundException("Classroom with ID " + classroom_id + " not found.");
        }

    }

    @Override
    public ClassroomDTO saveClassroom(ClassroomRegisterDTO request) {
        Classroom classroom = Classroom.builder()
                .classroom_id(request.getClassroom_id())
                .build();
        Classroom classroomDB = classroomRepo.save(classroom);
        return modelMapper.map(classroomDB, ClassroomDTO.class);

    }

    @Override
    public ClassroomDTO findById(Long classroom_id) {
        Classroom classroom = classroomRepo.findById(classroom_id).orElse(null);
        if (classroom != null) {
           return modelMapper.map(classroom, ClassroomDTO.class);
  }
        return null;
}
}
