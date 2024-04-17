package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Grade;
import com.nocountry.server_ed_platform.entities.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepo extends JpaRepository<Subject, Long> {
    //select subject_id from student_subject where student_id = 1;

}
