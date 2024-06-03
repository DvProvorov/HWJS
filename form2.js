window.onload = function () {
    let emailCookie = getCookie('email');
    if (emailCookie) {
        let greeting = document.createElement('span');
        greeting.textContent = `Привіт, ${emailCookie}!`;
        document.getElementById('greeting').appendChild(greeting);
    }
};

function removeCookies() {
    document.cookie = 'Fnames=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'Lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'Ybirth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'gender=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'Pnumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'Skype=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = "form.html";
}

function checkForm(event) {
    event.preventDefault();
    let regForm = document.forms[0];

    let fname = regForm.elements["Fnames"].value;
    let regFname = /^[a-zA-Zа-яА-ЯіїІЇ]{1,20}$/;
    if (!regFname.test(fname)) {
        let firstInpVal = document.getElementById("firstInpVal");
        firstInpVal.innerText = "The name should contain only letters and be no more than 20 characters";
        firstInpVal.classList.add("active");
        return false;
    }

    let lname = regForm.elements["Lname"].value;
    let regLname = /^[a-zA-Zа-яА-ЯіїІЇ]{1,20}$/;
    if (!regLname.test(lname)) {
        let lastInpVal = document.getElementById("lastInpVal");
        lastInpVal.innerText = "The last name should contain only letters and be no more than 20 characters";
        lastInpVal.classList.add("active");
        return false;
    }

    let yearOfBirth = regForm.elements["Ybirth"].value;
    let currentYear = new Date().getFullYear();
    if (yearOfBirth < 1900 || yearOfBirth > currentYear) {
        let yearInpVal = document.getElementById("yearInpVal");
        yearInpVal.innerText = "he year of birth must be in the range from 1900 to the current year";
        yearInpVal.classList.add("active");
        return false;
    }

    let phone = regForm.elements["Pnumber"].value;
    let regPhonename = /^\+\d{12}$/;
    if (!regPhonename.test(phone)) {
        let phoneInpVal = document.getElementById("phoneInpVal");
        phoneInpVal.innerText = "he phone number format is incorrect!";
        phoneInpVal.classList.add("active");
        return false;
    }

    let skype = regForm.elements["Skype"].value;
    let regSkype = /^\w+/;
    if (!regSkype.test(skype)) {
        let skypeInpVal = document.getElementById("skypeInpVal");
        skypeInpVal.innerText = "Enter anything!";
        skypeInpVal.classList.add("active");
        return false;
    }

    setCookie('Fnames', fname, 1);
    setCookie('Lname', lname, 1);
    setCookie('Ybirth', yearOfBirth, 1);
    setCookie('Gender', gender, 1);
    setCookie('Pnumber', phone, 1);
    setCookie('Skype', skype, 1);
    regForm.submit();
}

function getCookie(name) {
    let cookies = {};
    document.cookie.split(';').forEach(function (cookie) {
        let [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
        cookies[cookieName] = cookieValue;
    });
    return cookies[name];
}
let cookies = getCookie();
if (cookies.email !== undefined) {
    let email = document.getElementById("email");
    email.innerText = `Hello, ${cookies.email}!`;
}

window.onload = function () {
    let fnameCookie = getCookie('Fnames');
    let lnameCookie = getCookie('Lname');
    let yearOfBirthCookie = getCookie('Ybirth');
    let genderCookie = getCookie('Gender');
    let phoneCookie = getCookie('Pnumber');
    let skypeCookie = getCookie('Skype');
}

if (fnameCookie && lnameCookie && yearOfBirthCookie && genderCookie && phoneCookie && skypeCookie) {

    document.getElementById("firstInp").value = fnameCookie;
    document.getElementById("lastInp").value = lnameCookie;
    document.getElementById("yearInp").value = yearOfBirthCookie;
    document.querySelector(`[value="${genderCookie}"]`).selected = true;
    document.getElementById("phoneInp").value = phoneCookie;
    document.getElementById("skypeInp").value = skypeCookie;
}