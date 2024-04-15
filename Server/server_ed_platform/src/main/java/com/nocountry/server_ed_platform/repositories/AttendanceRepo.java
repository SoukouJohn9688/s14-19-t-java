package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Attendance;
import com.nocountry.server_ed_platform.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AttendanceRepo extends JpaRepository<Attendance, Long> {
}
