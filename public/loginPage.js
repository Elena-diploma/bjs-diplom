"use strict";

function responseCallback (response) {
    if(response.success){
        location.reload()
        userForm.setLoginErrorMessage(true, "Успешно!");
        userForm.setRegisterErrorMessage(true, "Успешно!");
    } else {
        userForm.setRegisterErrorMessage(false, "Ошибка: " + response.error);
        userForm.setLoginErrorMessage(false, "Ошибка: " + response.error);
        return response.data;
    }
}

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, responseCallback);
}

userForm.registerFormCallback = (data) => {
    ApiConnector.login(data, responseCallback);
}

