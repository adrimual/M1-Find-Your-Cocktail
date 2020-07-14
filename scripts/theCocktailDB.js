'use strict';
class Database {
    //recuperar los usuarios 
    getAllUsers = () => {
        //recuperamos el string
        const usersStr = localStorage.getItem("users");
        //convertir el string en un array
        const usersArr = JSON.parse(usersStr);
        //si no hay usuarios devuelve array vacio
        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }
    }
    saveNewUser = (newUser) => {
        //recuperar el array de usuarios de localStorage
        const userArr = this.getAllUsers();
        //acutalizar arr
        userArr.push(newUser);

        //convertir array en string
        const usersStr = JSON.stringify(usersArr);

        //almacenarlo en localStorage
        localStorage.setItem("users", usersStr);
    }
}

const db = new Database();