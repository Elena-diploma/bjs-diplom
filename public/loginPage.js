"use strict";

function responseCallback (response) {
    if(response.success){
        location.reload()
    } else {
        userForm.setRegisterErrorMessage("Произошла ошибка");
        userForm.setLoginErrorMessage("Произошла ошибка");
        return response.data;
    }
}

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, responseCallback);
}

userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, responseCallback);
}

