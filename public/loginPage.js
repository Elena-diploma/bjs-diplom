"use strict";

function responseCallback (response) {
    if(response.success){
        location.reload()
        userManager.setMessage(true, "Успешно!");
    } else {
        userManager.setMessage(false, "Ошибка: " + response.error);
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

