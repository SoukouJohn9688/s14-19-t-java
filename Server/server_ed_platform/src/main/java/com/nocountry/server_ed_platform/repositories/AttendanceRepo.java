package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendanceRepo extends JpaRepository<Attendance, Long> {

    @Query(value = "SELECT a FROM Attendance a WHERE a.student.id = :studentId")
    List<Attendance> findAttendanceByStudentId(@Param("studentId") Long studentId);

}
