var username;
var password;
var mess;

var flag1 = Boolean("");
var flag2 = Boolean("");
var flag3 = Boolean("");

function initialization() {
  username = document.forms["login_form"]["username"];
  password = document.forms["login_form"]["password"];
  mess = document.getElementById("message");
  username.addEventListener("blur",nameVerify,true);
  password.addEventListener("blur",passwordVerify,true);
}

function loginValidation() {
  initialization();
  /*проверка имени пользователя*/
  if (username.value == ""){
    username.style.border = "1px solid red";
    mess.textContent = "Введите имя пользователя!";
    username.focus();
    flag1 = true;
    return false;
  }
  if(!isLogin(username.value)){
    username.style.border = "1px solid red";
    mess.textContent = "Допустимы - латиница, цифры и ' _ ' !"
    username.focus();
    flag2 = true;
    return false;
  }
  if(username.value.length < 5){
    username.style.border = "1px solid red";
    mess.textContent = "Слишком короткое имя пользователя!"
    username.focus();
    flag3 = true;
    return false;
  }
  /*проверка имени пользователя*/
  /*проверка пароля*/
  if (password.value == ""){
    password.style.border = "1px solid red";
    mess.textContent = "Введите пароль!";
    password.focus();
    flag1 = true;
    return false;
  }
  if(password.value.length < 8){
    password.style.border = "1px solid red";
    mess.textContent = "Длина пароля должна быть более 8 символов!";
    password.focus();
    flag2 = true;
    return false;
  }
  if(password.value.length > 18){
    password.style.border = "1px solid red";
    mess.textContent = "Длина пароля должна быть менее 18 символов!";
    password.focus();
    flag3 = true;
    return false;
  }
  /*проверка пароля*/
  /*проверка авторизации*/
  if (username.value == "admin" && password.value == "11111111"){
    username.style.border = "1px solid #00FF00";
    password.style.border = "1px solid #00FF00";
    mess.textContent = "Добро пожаловать, "+username.value+"!";
    /*document.cookie = "userName="+username.value;*/
    return true;
  }
  else{
    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
    mess.textContent = "Неверный логин или пароль!";
    username.focus();
    return false;
  }
  /*проверка авторизации*/
}

/*проверка логина*/
function isLogin(username){
  var re = /\w+/g;
  return re.test(username);
}

function nameVerify() {
  if (username.value != "" && flag1) {
    username.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (isLogin(username.value) && flag2) {
    username.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
  if (username.value.length >= 5 && flag3) {
    username.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag3 = false;
    return true;
  }
}
function passwordVerify() {
  if (password.value != "" && flag1) {
    password.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (password.value.length >= 8 && flag2) {
    password.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
  if (password.value.length >= 18 && flag3) {
    password.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag3 = false;
    return true;
  }
}
