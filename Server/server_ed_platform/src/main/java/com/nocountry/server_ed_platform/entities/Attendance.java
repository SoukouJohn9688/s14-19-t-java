package com.nocountry.server_ed_platform.entities;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import com.nocountry.server_ed_platform.enumarations.AttendanceTypeEnum;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "attendance")
@Builder
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attendance_id")
    private Long attendance_id;

    @Enumerated(EnumType.STRING)
    private AttendanceTypeEnum type;

    private LocalDate date;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "student_id")
    private Student student;

}
