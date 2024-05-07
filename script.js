let username = document.getElementById("username");
let email =  document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let Form = document.getElementById("Form");
let btn = document.querySelector(".btn");
let div = document.getElementById("menu");
function ShowError(input,message)
    {
        let FormControl = input.parentElement;
        FormControl.className = "form-control error" ;
        let small = FormControl.querySelector("small");
        small.innerText = message;
    }
function ShowSuccess(input)
    {
        let FormControl = input.parentElement;
        FormControl.className = "form-control success";
    }
function CheckMail(input)
    {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEx.test(input.value))
            {
                ShowSuccess(input);
            }
        else{
            ShowError(input,"Email is not valid.");
        }
    }
function UserValid(input,min,max)
    {
        if(input.value.length<min)
            {
                ShowError(input,`${getTextField(input)} must be at least ${min} characters.`);
            }
        else if(input.value.length>max)
            {
                ShowError(input,`${getTextField(input)} must be not greater than ${max} characters.`);
            }
        else
            {
                ShowSuccess(input);
            }
    }
function getTextField(input)
    {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
function CheckPassword(input1,input2)
    {
        if(input2.value!==input1.value)
            {
                ShowError(input2,"Password does not match!");
            }
        else
            {
                ShowSuccess(input2);
            }
    }
Form.addEventListener("submit",(e)=>
    {
        e.preventDefault();
        UserValid(username,3,20);
        UserValid(password,3,20);
        CheckMail(email);
        CheckPassword(password,password2);
    })