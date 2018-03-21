var formFieldsValid = {
    email: false,
    password: false,
    confirmPassword: false,
    gender: false,
    dateBirthday: false,
    notes: false
}

function checkForm () {
    var isFormValid = Object.keys(formFieldsValid).every(function (key){
        return formFieldsValid[key];
    });
    isFormValid ? 
        $('#submit').removeAttr('disabled') :
        $('#submit').attr('disabled', 'disabled');
}

function checkEmail () {
    var email = $('#email').val();
    var emailReg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    formFieldsValid.email = false;
    if (!email) {
        $('#emailHelpBox').text('Введите электронный адрес');
    } else if (!emailReg.test(email)) {
        $('#emailHelpBox').text('Вы указали недопустимый e-mail');
    } else {
        $('#emailHelpBox').text('');
        formFieldsValid.email = true;
    }
    checkForm();
}

function checkPassword () {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    var passwordReg = /(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
    formFieldsValid.password = false;
    if (!password) {
        $('#passwordHelpBox').text('Введите пароль');
    } else if (!passwordReg.test(password)) {
        $('#passwordHelpBox').text('Пароль должен содержать в себе цифру, букву верхнего региста, и быть не менее 8 символов');
    } else if (confirmPassword && password !== confirmPassword){
        $('#passwordHelpBox').text('Пароли не совпадают');
        $('#confirmPasswordHelpBox').text('Пароли не совпадают');
    } else {
        $('#passwordHelpBox').text('');
        formFieldsValid.password = true;
    }
    checkForm();
}

function checkConfirmPassword () {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    var passwordReg = /(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
    formFieldsValid.confirmPassword = false;
    if (!confirmPassword) {
        $('#confirmPasswordHelpBox').text('Введите пароль');
    } else if (!passwordReg.test(confirmPassword)) {
        $('#confirmPasswordHelpBox').text('Пароль должен содержать в себе цифру, букву верхнего региста, и быть не менее 8 символов');
    } else if (password && password !== confirmPassword){
        $('#passwordHelpBox').text('Пароли не совпадают');
        $('#confirmPasswordHelpBox').text('Пароли не совпадают');
    } else {
        $('#passwordHelpBox').text('');
        $('#confirmPasswordHelpBox').text('');
        formFieldsValid.confirmPassword = true;
    }
    checkForm();
}

function checkGender () {
    var gender = $('#gender').val();
    formFieldsValid.gender = false;
    if (gender === 'none') {
        $('#genderHelpBox').text('Выберите пол');
    } else {
        $('#genderHelpBox').text('');
        formFieldsValid.gender = true;
    }
    checkForm();
}

function checkDateBirthday () {
    var dateBirthday = $('#dateBirthday').val();
    formFieldsValid.dateBirthday = false;
    if (!dateBirthday) {
        $('#dateBirthdayHelpBox').text('Введите дату рождения');
    } else {
        $('#dateBirthdayHelpBox').text('');
        formFieldsValid.dateBirthday = true;
    }
    checkForm();
}

function checkNotes () {
    var notes = $('#notes').val();
    formFieldsValid.notes = false;
    if (!notes) {
        $('#notesHelpBox').text('Введите примечания');
    } else {
        $('#notesHelpBox').text('');
        formFieldsValid.notes = true;
    }
    checkForm();
}

 