//Выход из личного кабинета
const logoutButton = new LogoutButton();

logoutButton.action = () => {
    ApiConnector.logout(logoutCallback);
}

function logoutCallback (logout) {
    if(logout.success){
        location.reload()
    }
}
//Получение информации о пользователе
ApiConnector.current(getUserCallback);

function getUserCallback (response) {
    if(response.success){
        ProfileWidget.showProfile(response.data)
    }
}
//Получение текущих курсов валюты
const ratesBoard = new RatesBoard();

function getActualStocks() {
    ApiConnector.getStocks((response) => {
        if(response.success){
            ratesBoard.clearTable();
            ratesBoard.fillTable(response.data);
        }
    });
}
getActualStocks();
setInterval(getActualStocks, 60000);


//Операции с деньгами
const userManager = new MoneyManager();

userManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, moneyCallback);

}
userManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, moneyCallback);
}
userManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, moneyCallback);
}

function moneyCallback (response) {
    if(response.success){
        ProfileWidget.showProfile(response.data)
        userManager.setMessage(true, "Транзакция успешно завершена");
    } else {
        userManager.setMessage(false, "Транзакция не выполнена: " + response.error)
    }
}
//Работа с избранным
const favoritesWidget = new FavoritesWidget();

ApiConnector.getFavorites((response) => {
    if(response.success){
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(response.data);
        userManager.updateUsersList(response.data);
    }
});

favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, userCallback);
    console.log(123);
}
favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, userCallback);
    console.log(123);
}
function userCallback (response) {
    if(response.success){
        console.log(123);
        ProfileWidget.showProfile(response.data)
        userManager.setMessage(true, "Успешно!");
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(response.data);
        userManager.updateUsersList(response.data);
    } else {
        userManager.setMessage(false, "Ошибка: " + response.error)
    }
}
