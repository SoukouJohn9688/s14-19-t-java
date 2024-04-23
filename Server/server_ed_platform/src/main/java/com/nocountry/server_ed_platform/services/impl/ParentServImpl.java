package com.nocountry.server_ed_platform.services.impl;

import com.nocountry.server_ed_platform.config.jwt.service.JwtService;
import com.nocountry.server_ed_platform.dtos.ParentDTO;
import com.nocountry.server_ed_platform.dtos.RegisterDTO;
import com.nocountry.server_ed_platform.dtos.Response.AuthResponseDTO;
import com.nocountry.server_ed_platform.dtos.StudentDTO;
import com.nocountry.server_ed_platform.dtos.TeacherDTO;
import com.nocountry.server_ed_platform.entities.Parent;
import com.nocountry.server_ed_platform.entities.Student;
import com.nocountry.server_ed_platform.entities.UserEntity;
import com.nocountry.server_ed_platform.enumarations.SexEnum;
import com.nocountry.server_ed_platform.enumarations.UserRole;
import com.nocountry.server_ed_platform.exceptions.EmailExistsException;
import com.nocountry.server_ed_platform.exceptions.ParentNotFoundException;
import com.nocountry.server_ed_platform.exceptions.StudentNotFoundException;
import com.nocountry.server_ed_platform.repositories.ParentRepo;
import com.nocountry.server_ed_platform.repositories.StudentRepo;
import com.nocountry.server_ed_platform.repositories.UserRepository;
import com.nocountry.server_ed_platform.services.ParentService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class ParentServImpl implements ParentService {

    private final ParentRepo parentRepo;
    private final StudentRepo studentRepo;
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final ModelMapper modelMapper;

    private final JwtService jwtService;

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
        updatedParent.setId(parentDB.get().getId()); // nos aseguramos de que el updatedParent siempre posea el mismo Id que el padre en la base de datos
        
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


    //Metodo para desplegar informacion a editar.

    @Override
    @Transactional
    public ParentDTO updateParentById(Long StudentId, Long ParentId, ParentDTO updatedParent) throws ParentNotFoundException, StudentNotFoundException {


        Optional<Parent> parentDB = parentRepo.findById(ParentId);

        if (parentDB.isPresent()) {
//

            List<Student> studentList = parentDB.get().getStudents();

            List<Student> studentListUpdated = new ArrayList<>();

            Parent parentToSet = modelMapper.map(updatedParent, Parent.class);

            for (Student student : studentList) {
                if (studentRepo.findById(student.getId()).isEmpty()) {
                    throw new StudentNotFoundException("El estudiante no se encuentra en la base de datos.");
                }

                student.setParent(parentToSet);
                studentRepo.save(student); // actualizar estudiante en DB con el nuevo registro de padre.
                studentListUpdated.add(student);
            }

            Parent parentUpdatedFinal;

            parentUpdatedFinal = Parent.builder()
                    .id(parentDB.get().getId())
                    .name(updatedParent.getName())
                    .address(updatedParent.getAddress())
                    .dni(updatedParent.getDni())
                    .students(studentListUpdated)
                    .birthdate(updatedParent.getBirthdate())
                    .cellphone(updatedParent.getCellphone())
                    .surname(updatedParent.getSurname())
                    .build();
            parentRepo.save(parentUpdatedFinal);


            return ParentDTO.builder()
                    .id(updatedParent.getId())
                    .name(updatedParent.getName())
                    .address(updatedParent.getAddress())
                    .dni(updatedParent.getDni())
                    .childrenList(updatedParent.getChildrenList())
                    .birthdate(updatedParent.getBirthdate())
                    .cellphone(updatedParent.getCellphone())
                    .surname(updatedParent.getSurname())
                    .build();

        } else {
            throw new ParentNotFoundException(String.format("Padre con id %s no encontrado", ParentId));
        }
    }

    @Override
    @Transactional
    public AuthResponseDTO addParentById(Long StudentId, Long ParentId, RegisterDTO request) throws EmailExistsException {
        Optional<UserEntity> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isPresent()) {
            throw new EmailExistsException("Ya existe un teacher con ese email");
        }

        UserEntity user = UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .username(request.getUsername())
                .role(UserRole.TEACHER)
                .build();
        userRepository.save(user);


        return AuthResponseDTO.builder()
                .accessToken(jwtService.getToken(user))
                .tokenType("Bearer")
                .build();
    }


}
