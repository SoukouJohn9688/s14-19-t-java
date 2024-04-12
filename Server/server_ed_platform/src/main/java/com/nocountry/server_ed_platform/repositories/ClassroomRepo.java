package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Attendance;
import com.nocountry.server_ed_platform.entities.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassroomRepo extends JpaRepository<Classroom, Long> {
}
