package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Request.ParentRegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.ParentChildrenResponseDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;


import java.util.List;
import java.util.Optional;

public interface ParentService {

    ParentDTO findById(Long parentId) throws ParentNotFoundException;

    List<StudentDTO> findAllChildrenByParentId(Long parentId) throws ParentNotFoundException;

    //Metodos Admin.

    ParentDTO updateParentById(Long StudentId, Long ParentId);
}
