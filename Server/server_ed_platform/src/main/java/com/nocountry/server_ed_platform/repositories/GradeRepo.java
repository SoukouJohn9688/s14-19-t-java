package com.nocountry.server_ed_platform.repositories;


import com.nocountry.server_ed_platform.entities.Grade;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepo extends JpaRepository<Grade, Long> {

    @Query(value = "SELECT * FROM grade WHERE student_id = :studentId AND subject_id = :subjectId", nativeQuery = true)
    List<Grade> findGradesByStudentIdAndSubjectId(@Param("studentId") Long studentId,
                                                  @Param("subjectId") Long subjectId);
}
