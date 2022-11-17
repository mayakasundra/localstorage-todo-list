// let userdata=JSON.parse(getCookie('userdata'));
// if(userdata!=null || userdata!=""){
//      location.assign('dashboard.html');
// }

function firstname11() {
    const firstname1 = document.getElementById('fistname').value;
    if (firstname1 == "") {
            document.getElementById("first-error").innerHTML = "First name can't be blank";
            return false;
    } else if (firstname1.length < 3) {
            document.getElementById("first-error").innerHTML = "length must be 3 or more character";
            return false;
    } else {
            document.getElementById("first-error").innerHTML = "";
            return true;
    }

}



function lastname11() {
    const lastname1 = document.getElementById('lastname').value;
    if (lastname1 == "") {
            document.getElementById("last-error").innerHTML = "Last name can't be blank";
            return false;
    } else if (lastname1.length < 3) {
            document.getElementById("last-error").innerHTML = "length must be 3 or more character";
            return false;
    } else {
            document.getElementById("last-error").innerHTML = "";
            return true;
    }

}
function user11() {
        const username1 = document.getElementById('username').value;
        if (username1 == "") {
                document.getElementById("uname-error").innerHTML = "user name can't be blank";
                return false;
        } else if (username1.length < 8) {
                document.getElementById("uname-error").innerHTML = "length must be 8 or more character";
                return false;
        } else {
                document.getElementById("uname-error").innerHTML = "";
                return true;
        }

}

function email11() {
        let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const email1 = document.getElementById('email').value;
        if (email1 == "") {
                document.getElementById("email-error").innerHTML = "email id can't be blank";
                return false;
        }
        else if (!email_reg.test(email1)) {
                document.getElementById("email-error").innerHTML = "please enter valid mail-id";
                return false;
        }
        else {
                document.getElementById("email-error").innerHTML = "";
                return true;
        }
}
function phone11() {
        let phone_reg = /^[6789]{1}[0-9]{9}$/gm;

        const phone1 = document.getElementById('phone').value;
        if (phone1 == "") {
                document.getElementById("phone-error").innerHTML = "Phone no can't be blank";
                return false;
        }
        else if (phone1.length < 9) {
                document.getElementById("phone-error").innerHTML = "length must be 10 character";
                return false;
        } else if (!phone_reg.test(phone1)) {
                document.getElementById("phone-error").innerHTML = "Please enter valid number";
                return false;
        } else {
                document.getElementById("phone-error").innerHTML = "";
                return true;
        }
}

function password11() {

        let password_reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        const passwordl = document.getElementById('password').value;
        if (passwordl == "") {
                document.getElementById("password-error").innerHTML = "password can't be blank";
                return false;
        } else if (!password_reg.test(passwordl)) {
                document.getElementById("password-error").innerHTML = "Min 7 to 15 characters which contain at least one numeric digit and a special character";
                return false;
        } else {
                document.getElementById("password-error").innerHTML = "";
                return true;
        }

}


function confirm_password11() {

        const passwordl = document.getElementById('password').value;
        const confirmPasswordl = document.getElementById('confirm-password').value;

        if (confirmPasswordl == "") {
                document.getElementById("confirm-password-error").innerHTML = "confirm password can't be blank";
                return false;
        }
        else if (passwordl != confirmPasswordl) {
                document.getElementById("confirm-password-error").innerHTML = " confirm Password did not match Password ";
                return false;

        } else {
                document.getElementById("confirm-password-error").innerHTML = "";
                return true;
        }
}


function ssubmit(event) {
        event.preventDefault();
        firstname11()
        lastname11()
        user11();
        email11();
        phone11();
        password11();
        confirm_password11();

        if ((user11() == true) && (email11() == true) && (phone11() == true) && (password11() == true) && (confirm_password11() == true)) {

                store();
        }
}
// UserName and Password from the register-form




// storing input from register-form
function store() {
    const fname = document.getElementById('fistname').value;
    const lname = document.getElementById('lastname').value;
        const name1 = document.getElementById('username').value;
        const email11 = document.getElementById('email').value;
        const phone11 = document.getElementById('phone').value;
        const pw = document.getElementById('password').value;

        let user = [];
        let   id = 1;
        if (localStorage.getItem('user') != null) {
                user = JSON.parse(localStorage.getItem('user'));
                
                id = user[user.length - 1].id + 1;
              
        }
        let json = {
                "id": id,
                "firstname":fname,
                "lastname":lname,
                "name": name1,
                "email": email11,
                "phone": phone11,
                "password": pw
        }

        let flag=0;
        for (const userObject of user) {
                if (userObject.email == email11) {
                        document.getElementById("email-error").innerHTML = "Email Id is Already Existing";
                        flag = 1;
                } 
        }
       
        if (flag == 0) {
                user.push(json);
                let jsonstring = JSON.stringify(user);
                localStorage.setItem('user', jsonstring);
                alert("you have successfully Registered...!")
                // swal("Hello world!");
                location.assign("login.html");
        }

        



       
       



}
