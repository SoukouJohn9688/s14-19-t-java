package com.nocountry.server_ed_platform.dtos.Response;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseGenericDTO<T> {
    private boolean state;
    private String message;
    private T data;
}
