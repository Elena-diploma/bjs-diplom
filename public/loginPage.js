"use strict";

function callback (response) {
    if(response.success){
        location.reload()
    } else {
        return response.data;
    }
}

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, callback);
}

userForm.registerFormCallback = (data) => {
    ApiConnector.login(data, callback);
}

