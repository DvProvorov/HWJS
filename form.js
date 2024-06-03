function setCookie(name, value, hours) {
    let date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    let expires = "expires=" + date.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie() {
    let cookies = {};
    document.cookie.split(';').forEach(function (cookie) {
        let [name, value] = cookie.split('=').map(c => c.trim());
        cookies[name] = value;
    });
    return cookies;
}
function checkForm(event) {
    event.preventDefault();
    let regForm = document.forms[0];
    let email = regForm.elements["email"].value;
    let emailPattern = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        let emailInpVal = document.getElementById("emailInpVal");
        emailInpVal.innerText = "Wrong email address";
        emailInpVal.classList.add("active");
        return false;
    }
    let password = regForm.elements["passwrd"].value;
    if (password.length < 6) {
        let passwordInpVal = document.getElementById("passwordInpVal");
        passwordInpVal.innerText = "The password must contain at least 6 characters";
        passwordInpVal.classList.add("active");
        return false;
    }
    if (!/\d+/.test(password)) {
        let passwordInpVal = document.getElementById("passwordInpVal");
        passwordInpVal.innerText = "The password must contain at least one digit";
        passwordInpVal.classList.add("active");
        return false;
    }
    if (!/[a-z]+/.test(password)) {
        let passwordInpVal = document.getElementById("passwordInpVal");
        passwordInpVal.innerText = "The password must contain at least one lowercase letter";
        passwordInpVal.classList.add("active");
        return false;
    }
    if (!/[A-Z]+/.test(password)) {
        let passwordInpVal = document.getElementById("passwordInpVal");
        passwordInpVal.innerText = "The password must contain at least one uppercase letter";
        passwordInpVal.classList.add("active");
        return false;
    }
    let confpassw = regForm.elements["confpassw"].value;
    if (password !== confpassw) {
        let confpasswInpVal = document.getElementById("confpasswInpVal");
        confpasswInpVal.innerText = "Passwords must match";
        confpasswInpVal.classList.add("active");
        return false;
    }

    setCookie('email', email, 1);
    setCookie('password', password, 1);

    window.location.href = "form2.html";

}