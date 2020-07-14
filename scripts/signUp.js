'use strict';


class Signup {
    constructor() {
        this.nameInput = document.querySelector("#name");
        this.surnameInput = document.querySelector("#surname");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");
        this.buttonInput = document.querySelector("#signup-button");
        this.errorWrapper = document.querySelector(".message-container");
    }
    //input email gestionar cambios
    handleEmailInput = (event) => {
        const email = event.target.value;

        console.log('email', email);

        //validar texto del input email
    }
    //input password gestionar cambios
    handlePasswordInput = (event) => {
        const password = event.target.value;

        console.log('password', password);
        //validar texto del input email
    }
    //input repeat-password gestionar cambios
    handleRepeatPassowrdInput = (event) => {
        const repeatPassword = event.target.value;

        console.log('repeatPassword', repeatPassword);
        //validar texto del input email
    }
    //gestionar envio de datos (submit)
    saveData = (event) => {
        //recoger todos los valores de input
        const name = this.nameInput.value;
        const surname = this.surnameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;

        // function createUser(name, surname, email, password){
        //     const userObj = {
        //         name,
        //         surname,
        //         email,
        //         password
        //     }
        //     return userObj;
        // }
        const newUser = createUser(name, surname,  email, password);
        /*
         * Pseudocodigo
         * 
         *   //guardar el nuevo usuario en la base de datos
         * database.createNewUser(newUser);
         */

         //vaciar formulario
        this.nameInput.value ="";
        this.surnameInput.value ="";
        this.emailInput.value ="";
        this.passwordInput.value ="";
        this.repeatPasswordInput.value ="";
    }
    //registrar las funciones para cada input/campo

    addListeners = () => {
        //escucha a los cambios de texto
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.repeatPasswordInput);
        this.buttonInput.addEventListener("click", this.saveData);
    }
}
//crear una nueva instancia del Signup (objeto)
const signup = new Signup();

window.addEventListener("load", signup.addListeners);