package com.nocountry.server_ed_platform.repositories;

import com.nocountry.server_ed_platform.entities.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ParentRepo extends JpaRepository<Parent,Long> {

    //Optional<Double> findGradeBySubject_id(Long id);

}
