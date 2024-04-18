package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.services.ParentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ParentServImplTest {

    @Autowired
    private ParentService parentService;

    @Test
    public void test() throws ParentNotFoundException {

        parentService.findAllChildrenByParentId(1L);

    }

}