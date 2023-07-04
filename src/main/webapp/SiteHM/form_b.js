function validation_b() {
    var userName = document.RegF.username.value;

    if(userName.trim().length <= 1){
        alert("Incorrect User Name");
        document.RegF.username.focus();
        return false;
    }
    if(userName.length<3){
        document.RegF.username.focus();
        return false;
    }

    var userLast = document.RegF.lastname.value;

    if(userLast.trim().length <= 1){
        alert("Incorrect user Last Name");
        document.RegF.lastname.focus();
        return false;
    }
    if(userLast.length<3){
        document.RegF.lastname.focus();
        return false;
    }

    var phoneN = document.RegF.PhoneNumber.value;

    if(phoneN.trim().length != 12){
        alert("Wrong phone number");
        document.RegF.PhoneNumber.focus();
        return false;
    } else {
        if(phoneN.indexOf("+")!=0){
            alert("Wrong phone number");
            return false;
        }
    }
    return true;
}
