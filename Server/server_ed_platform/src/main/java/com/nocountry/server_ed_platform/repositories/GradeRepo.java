package com.nocountry.server_ed_platform.repositories;


import com.nocountry.server_ed_platform.entities.Grade;
import com.nocountry.server_ed_platform.entities.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepo extends JpaRepository<Grade,Long> {
}