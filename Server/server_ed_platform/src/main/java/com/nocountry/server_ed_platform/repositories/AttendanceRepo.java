package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Attendance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepo extends JpaRepository<Attendance, Long> {
    @Query(value = "SELECT * FROM attendance WHERE student_id = :studentId", nativeQuery = true)
    List<Attendance> findAttendancesByStudentId(@Param("studentId") Long studentId);
}
