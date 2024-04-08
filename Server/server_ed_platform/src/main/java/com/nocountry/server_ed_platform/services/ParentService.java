package com.nocountry.server_ed_platform.services;

import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Request.ParentRegisterDTO;


import java.util.List;

public interface ParentService {

    List<ParentDTO> findAll();
    ParentDTO findById(Long id);
    ParentDTO createParent(ParentRegisterDTO request);
}
