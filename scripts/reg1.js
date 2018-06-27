var vname;
var age;
var username;
var mail;
var phone;
var password;
var password_confirmation;
var mess;

var flag1 = Boolean("");
var flag2 = Boolean("");
var flag3 = Boolean("");

jQuery (function ($) {
  $(function() {
    function maskPhone() {
      var country = $('#country option:selected').val();
      switch (country) {
        case "ru":
          $("#phone").mask("+7 (9nn) nnn-nn-nn");
          break;
        case "ua":
          $("#phone").mask("+380 (nn) nnn-nn-nn");
          break;
        case "by":
          $("#phone").mask("+375 (nn) nnn-nn-nn");
          break;
        case "kz6":
          $("#phone").mask("+7 (6nn) nnn-nn-nn");
          break;
        case "kz7":
          $("#phone").mask("+7 (7nn) nnn-nn-nn");
          break;
      }
    }
    maskPhone();
    $('#country').change(function() {
      maskPhone();
    });
  });
});

function initialization() {
  vname = document.forms["regform"]["vname"];
  age = document.forms["regform"]["age"];
  username = document.forms["regform"]["username"];
  mail = document.forms["regform"]["mail"];
  phone = document.forms["regform"]["phone"];
  password = document.forms["regform"]["password"];
  password_confirmation = document.forms["regform"]["password_confirmation"];

  mess = document.getElementById('message');

  vname.addEventListener("blur",nameVerify,true);
  age.addEventListener("blur",ageVerify,true);
  username.addEventListener("blur",usernameVerify,true);
  mail.addEventListener("blur",mailVerify,true);
  phone.addEventListener("blur",phoneVerify,true);
  password.addEventListener("blur",passwordVerify,true);
  password_confirmation.addEventListener("blur",passwordConfirmationVerify,true);
}

function regValidation(){
  initialization();
  /*проверка имени*/
  if(vname.value == ""){
    vname.style.border = "1px solid red";
    mess.textContent = "Введите своё имя!";
    vname.focus();
    flag1 = true;
    return false;
  }
  if(vname.value.length<2){
    vname.style.border = "1px solid red";
    mess.textContent = "Ваше имя слишком короткое!";
    vname.focus();
    flag2 = true;
    return false;
  }
  if(vname.value.length>18){
    vname.style.border = "1px solid red";
    mess.textContent = "Ваше имя слишком длинное!";
    vname.focus();
    flag3 = true;
    return false;
  }
  /*проверка имени*/
  /*проверка возраста*/
  if(age.value == ""){
    age.style.border = "1px solid red";
    mess.textContent = "Введите свой возраст!"
    age.focus();
    flag1 = true;
    return false;
  }
  if(age.value < 10){
    age.style.border = "1px solid red";
    mess.textContent = "Вы слишком молоды!"
    age.focus();
    flag2 = true;
    return false;
  }
  /*проверка возраста*/
  /*проверка логина*/
  if(username.value == ""){
    username.style.border = "1px solid red";
    mess.textContent = "Введите имя пользователя!"
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
  /*проверка логина*/
  /*проверка почты*/
  if(mail.value == ""){
    mail.style.border = "1px solid red";
    mess.textContent = "Введите email!"
    mail.focus();
    flag1 = true;
    return false;
  }
  if(!isEMail(mail.value)){
    mail.style.border = "1px solid red";
    mess.textContent = "Некорректный email!"
    mail.focus();
    flag2 = true;
    return false;
  }
  /*проверка почты*/
  /*проверка телефона*/
  if(phone.value == ""){
    phone.style.border = "1px solid red";
    mess.textContent = "Введите номер телефона!"
    phone.focus();
    flag1 = true;
    return false;
  }
  if(!isPhone(phone.value)){
    phone.style.border = "1px solid red";
    mess.textContent = "Некорректный номер телефона!";
    phone.focus();
    flag2 = true;
    return false;
  }
  /*проверка телефона*/
  /*проверка пароля*/
  if(password.value == ""){
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
  /*проверка подтверждения пароля*/
  if(password_confirmation.value == ""){
    password_confirmation.style.border = "1px solid red";
    mess.textContent = "Повторите пароль!";
    password_confirmation.focus();
    flag1 = true;
    return false;
  }
  if(password_confirmation.value != password.value){
    password_confirmation.style.border = "1px solid red";
    mess.textContent = "Пароли не совпадают!";
    password_confirmation.focus();
    flag2 = true;
    return false;
  }
  /*проверка подтверждения пароля*/
}

/*проверка логина*/
function isLogin(username){
  var re = /\w+/g;
  return re.test(username);
}
/*проверка почты*/
function isEMail(mail){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(mail);
}
/*проверка телефона*/
function isPhone(phone){
  var re= /\d{1,3}\s\(\d{2,3}\)\s\d{3}-\d{2}-\d{2}/;
  return re.test(phone);
}

/*описание события успешного редактирования имени*/
function nameVerify(){
  if (vname.value != "" && flag1) {
    vname.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (vname.value.length >= 2 && flag2) {
    vname.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
  if (vname.value.length <= 18 && flag3) {
    vname.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag3 = false;
    return true;
  }
}
/*описание события успешного редактирования возраста*/
function ageVerify(){
  if (age.value != "" && flag1) {
    age.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (age.value  >= 10 && flag2) {
    age.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
}
/*описание события успешного редактирования логина*/
function usernameVerify(){
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
/*описание события успешного редактирования почты*/
function mailVerify(){
  if (mail.value != "" && flag1) {
    mail.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (isEMail(mail.value) && flag2) {
    mail.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
}
/*описание события успешного редактирования телефона*/
function phoneVerify(){
  if (phone.value != "" && flag1) {
    phone.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (isPhone(phone.value) && flag2) {
    phone.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
}
/*описание события успешного редактирования пароля*/
function passwordVerify(){
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
/*описание события успешного редактирования телефона*/
function passwordConfirmationVerify(){
  if (password_confirmation.value != "" && flag1) {
    password_confirmation.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag1 = false;
    return true;
  }
  if (password_confirmation.value == password.value && flag2) {
    password_confirmation.style.border = "1px solid #111111";
    mess.innerHTML = "";
    flag2 = false;
    return true;
  }
}
