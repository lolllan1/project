package com.vti.configuration.exception;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
public class ErrorResponse {
    private String timestamp = LocalDateTime.now().toString();
    private  int code;
    private String message;
    private Object errors;
    private String moreInfomation;
    private String detailMessage;

    public ErrorResponse(int code, String message, String detailMessage) {
        this.code = code;
        this.message = message;
        this.detailMessage = detailMessage;
        this.moreInfomation = "http://localhost:8080/api/v1/exceptions/" + code;


    }

    public ErrorResponse(int code, String message, String detailMessage, Object erros) {
        this(code, message, detailMessage);
        this.errors = erros;
    }
}
