
let userdata=JSON.parse(getCookie('userdata'));
if(userdata!=null || userdata!=""){
     location.assign('dashboard.html');
}

function userInput() {
    let userName = document.getElementById("username").value;
    if (userName == "") {
        document.getElementById("userspan").innerHTML = " * is Required";
        return false;
    } else {
        document.getElementById("userspan").innerHTML = "";
        return true;
    }


}

function passwordInput() {
    let pass = document.getElementById("password").value;
    if (pass == "") {
        document.getElementById("passwordspan").innerHTML = " * is Required";
        return false;
    } else {
        document.getElementById("passwordspan").innerHTML = "";
        return true;
    }

}

function loginSubmit(event) {
    event.preventDefault();
    userInput();
    passwordInput();

    if (userInput() && passwordInput()) {
        let userName = document.getElementById("username").value;

        let pass = document.getElementById("password").value;
        user = JSON.parse(localStorage.getItem('user'));
        let flag1 = 0;
        for (const x of user) {
            if (x.email == userName && x.password == pass) {

                var d = new Date();
                d.setDate(d.getDate() + 5);
                //       document.cookie = `loginuser=${x.emailId}; expires=${d}; path=/`;
                document.cookie = `userdata=${JSON.stringify(x)}; expires=${d}; path=/`;
                flag1 = 1;
                break;
            }
        }

            if(flag1==1){
                alert("you have successfully Login...!")
                location.assign("dashboard.html")
                
            }
               
            else {
                alert('ERROR.Please Check Username & Password...!');
            }



        }

    } 