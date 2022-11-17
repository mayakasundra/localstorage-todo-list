
let userdata = (getCookie('userdata'));
if (userdata == null || userdata == "") {
    location.assign('login.html');
}

// Create Today's Date
n =  new Date(); 
y = n.getFullYear(); 
m1 = n.getMonth() + 1; 
d = n.getDate().toString().padStart(2,"0"); 
// console.log(typeof d)

// let c =  y + "-" + m1 + "-" + d;
// console.log(d)
document.getElementById("dashdate").value = y + "-" + m1 + "-" + d ; 

// delete cookies
document.getElementById("logout").addEventListener("click", function(){
    document.cookie = "userdata=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location.assign("login.html")
 
    
})

// name=value;name=value
// var myCookies = {};
// document.cookie.split(";").forEach((rawItem) => {
//     var name = rawItem.substring(0, rawItem.indexOf("="));
//     var value = rawItem.substring(name.length + 1);

//     myCookies[name] = value;
//     console.log(myCookies);

// });
// let m = JSON.parse(myCookies.userdata);

// console.log(m.name);

let loginuser1 = JSON.parse(getCookie("userdata"));
// console.log(loginuser1)
document.getElementById("dashboard-name").innerHTML =loginuser1.name;
document.getElementById("dashboard-name1").innerHTML = "LoggedIn as a "+ loginuser1.name;


function dashtext() {
    let dashname1 = document.getElementById("dashname").value;


    if (dashname1 == "") {
        document.getElementById("title-error").innerHTML = "* is Required";
    } else {
        document.getElementById("title-error").innerHTML = " ";
        return true;
    } 
}


function dasharea() {
    let dashtextarea1 = document.getElementById("dashtextarea").value;


    if (dashtextarea1 == "") {
        document.getElementById("area-Error").innerHTML = "* is Required";
    } else {
        document.getElementById("area-Error").innerHTML = " ";
        return true;
    }
}



function dashsubmit(event) {
    event.preventDefault();
    dashtext();
    dasharea();
    dashStore();

}


function dashStore() {
    if (dashtext() && dasharea()) {
        const dashdate1 = document.getElementById('dashdate').value;
        const dashname1 = document.getElementById('dashname').value;
        const dashtextarea1 = document.getElementById('dashtextarea').value;
     
        let user1 = [];
        let id = 1;
        if (localStorage.getItem('dashboard-data') != null) {
            user1 = JSON.parse(localStorage.getItem('dashboard-data'));
          
            if(user1.length>0){
                id = user1[user1.length - 1].id + 1;
                }else{
                        id=1;
                }      
        }
        let json1 = {
            "UserId": loginuser1.id,
            "id":id,
            "Date": dashdate1,
            "Title": dashname1,
            "Message": dashtextarea1,

        }

        user1.push(json1);
        let jsonstring = JSON.stringify(user1);
        localStorage.setItem('dashboard-data', jsonstring);
        alert("Data successfully Entered...!")
        location.assign("display.html");
        location.assign("dashboard.html");
        
    }
}

function updateData(callback = displayUserData ){
    if (dashtext() && dasharea()) {
        document.getElementById("updateID").style.display = "none";
        document.getElementById("addId").style.display = "inline-block";
        const dashdate1 = document.getElementById('dashdate').value;
        document.getElementById('dashdate').value=" ";
        const dashname1 = document.getElementById('dashname').value;
        document.getElementById('dashname').value="";
        const dashtextarea1 = document.getElementById('dashtextarea').value;
        document.getElementById('dashtextarea').value="";
        const index = document.getElementById('index').value;
        let user1 = [];
        if (localStorage.getItem('dashboard-data') != null) {
            user1 = JSON.parse(localStorage.getItem('dashboard-data'));    
        }
        console.log(user1)
        if(user1[index]!=null && user1[index]!=undefined  ){
           user1[index] = {
                "UserId": user1[index].UserId,
                "id":user1[index].id,
                "Date": dashdate1,
                "Title": dashname1,
                "Message": dashtextarea1,
    
            }
            console.log(user1[index]);
        }
        let jsonstring = JSON.stringify(user1);
        localStorage.setItem('dashboard-data', jsonstring);
        alert("Data successfully Entered...!");
        callback();
        
    }
}







