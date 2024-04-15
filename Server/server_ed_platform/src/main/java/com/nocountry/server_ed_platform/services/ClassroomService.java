package com.nocountry.server_ed_platform.services;


import com.nocountry.server_ed_platform.dtos.ClassroomDTO;
import com.nocountry.server_ed_platform.dtos.Request.ClassroomRegisterDTO;
import com.nocountry.server_ed_platform.exceptions.ClassroomNotFoundException;
import org.springframework.stereotype.Service;

@Service
public interface ClassroomService {

    ClassroomDTO updateClassroom(Long classroom_id, ClassroomRegisterDTO request) throws ClassroomNotFoundException;

    ClassroomDTO saveClassroom(ClassroomRegisterDTO request);

    ClassroomDTO findById(Long classroom_id);

    ClassroomDTO findBySubjectId(Long subjectId);

}
