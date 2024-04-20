package com.nocountry.server_ed_platform.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

import com.nocountry.server_ed_platform.enumarations.AttendanceTypeEnum;

@Entity
@Table(name = "attendance")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private AttendanceTypeEnum type;

    private LocalDate date;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private Student student;

}
