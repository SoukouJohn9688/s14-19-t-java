package com.nocountry.server_ed_platform.entities;

import com.nocountry.server_ed_platform.enumarations.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "attendance")
@Builder
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "attendance_id")
    private Long attendance_id;
    private boolean asistio;
    private Date fecha;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

}
