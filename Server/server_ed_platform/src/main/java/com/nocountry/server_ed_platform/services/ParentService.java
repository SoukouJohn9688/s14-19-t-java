package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Request.ParentRegisterDTO;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.SubjectNotFoundException;


import java.util.List;
import java.util.Optional;

public interface ParentService {

    List<ParentDTO> findAll();
    ParentDTO findById(Long id) throws ParentNotFoundException;
    ParentDTO createParent(ParentRegisterDTO request);

    ParentDTO updateParent(Long id, ParentRegisterDTO request) throws ParentNotFoundException;

    Double getGradeOfSubject(Long idSubject, Long idStudent);
}
