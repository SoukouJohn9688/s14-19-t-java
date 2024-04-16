package com.nocountry.server_ed_platform.utils;

import com.nocountry.server_ed_platform.entities.Subject;
import com.nocountry.server_ed_platform.enumarations.SubjectEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListSubject {

    private List<Subject> subjects = new ArrayList<>();

    private List<Subject> getFirstYear(int currenyYear) {

        this.subjects.add(Subject.builder()
                .name(SubjectEnum.MATEMATICAS)
                .build());
        this.subjects.add(Subject.builder()
                .name(SubjectEnum.CIENCIAS)
                .build());
        return this.subjects;
    }
}
