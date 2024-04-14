package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Classroom;
import com.nocountry.server_ed_platform.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

//    List<Student> findAllByClassroom(Classroom classroom);
    List<Student> findByTeacherIdAndClassroomId(Long teacherId, Long classroomId);


}
