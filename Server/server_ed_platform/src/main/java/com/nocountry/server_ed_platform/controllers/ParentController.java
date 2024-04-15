package com.nocountry.server_ed_platform.controllers;


import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.Response.ResponseGenericDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.services.ParentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/parent")
@RequiredArgsConstructor
public class ParentController {

    private static final Logger logger = LoggerFactory.getLogger(ParentController.class);
    private final ParentService parentService;
    @GetMapping()
    public ResponseEntity<ResponseGenericDTO<List<ParentDTO>>> findAll(){
        return ResponseEntity.ok().body(
                new ResponseGenericDTO<>(
                        true,
                        "peticion correcta",
                        parentService.findAll()
                )
        );
    }

    @PostMapping("/updateParent/{id}")
    public ResponseEntity<ParentDTO> updateParent(@PathVariable Long id){

        try {
            ParentDTO foundParent=parentService.findById(id);
            logger.info("Updated parent with ID: " + foundParent.getId());
            return new ResponseEntity<>(foundParent, HttpStatus.OK);
        }catch(Exception ex){
            logger.error("Error creating Parent: " + ex.getMessage() + " cause: " + ex.getCause());
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }
    }


}
