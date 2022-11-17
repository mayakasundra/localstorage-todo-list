
let loginuser = JSON.parse(getCookie("userdata"));

let a = JSON.parse(localStorage.getItem("user"));

const  tasklist1 = a.filter(function (value) {
  return value.id == loginuser.id;
});

 document.getElementById('fistname').value = tasklist1[0].firstname;
document.getElementById('lastname').value=tasklist1[0].lastname;

document.getElementById('username').value=tasklist1[0].name;
document.getElementById('email').value=tasklist1[0].email;
document.getElementById('phone').value=tasklist1[0].phone;
document.getElementById('password').value=tasklist1[0].password;
document.getElementById('profileId').value=tasklist1[0].id;







function profileSubmit(event){
    event.preventDefault();
    let fEdit=document.getElementById('fistname').value;
    let lEdit=document.getElementById('lastname').value;
    let uEdit=document.getElementById('username').value;
    let phoneEdit = document.getElementById('phone').value;
    let emailEdit = document.getElementById('email').value;
    //let passEdit = document.getElementById('password').value;
     
      const index = document.getElementById('profileId').value;
      let user1 = [];
      if (localStorage.getItem("user") != null) {
          user1 = JSON.parse(localStorage.getItem("user"));  
          var indexOfObject1 = user1.findIndex((object) => {
            return object.id == index;  
          });  
          console.log(indexOfObject1);


     
      }
    //   console.log(user1)
      if(user1[indexOfObject1]!=null && user1[indexOfObject1]!=undefined  ){
         user1[indexOfObject1] = {
             
              "id":user1[indexOfObject1].id,
              "firstname": fEdit,
              "lastname": lEdit,
              "name": uEdit,
              "email": emailEdit,
              "phone": phoneEdit,
              "password": user1[indexOfObject1].password

             
  
          }
          console.log(user1[indexOfObject1]);
      }
      let jsonstring = JSON.stringify(user1);
      localStorage.setItem('user', jsonstring);
      alert("Data Edit successfully...!");
      location.assign("dashboard.html");
    //    displayUserData();
}

   
      
        
    




