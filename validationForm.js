let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let form = document.querySelector("#form");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "formOut error";

    const small = formControl.querySelector("small");
    small.innerHTML = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "formOut success";
}

// Email Validation
function checkMail(input){
    const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;

    if(regEx.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,"Email Is Not Valid");
    }
}

function checkInputLength(input, min, max){

    if(input.value.length < min){

        showError(
            input,
            `${getFieldName(input)} Must Be At Least ${min} Characters`
        );

    }else if(input.value.length > max){

        showError(
            input,
            `${getFieldName(input)} Must Be Less Than ${max} Characters`
        );

    }else{
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Password Match
function matchPassword(input1, input2){

    if(input1.value !== input2.value){

        showError(input2,"Password Is Not Same");

    }else{
        showSuccess(input2);
    }
}

form.addEventListener("submit",(e) =>{

    e.preventDefault();

    checkInputLength(userName,3,20);
    checkInputLength(password,6,30);

    checkMail(userEmail);

    matchPassword(password,confirmPassword);

});