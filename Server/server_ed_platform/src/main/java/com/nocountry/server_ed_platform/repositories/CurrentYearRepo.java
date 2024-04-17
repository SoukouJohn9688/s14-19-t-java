package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.CurrentYear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrentYearRepo extends JpaRepository<CurrentYear, Long> {
}
