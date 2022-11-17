 
      let loginuser = JSON.parse(getCookie("userdata"));

      let a = JSON.parse(localStorage.getItem("dashboard-data"));

      const  tasklist = a.filter(function (value) {
        return value.UserId == loginuser.id;
      });

       function displayUserData(){
        let a = JSON.parse(localStorage.getItem("dashboard-data"));

        const  tasklist = a.filter(function (value) {
          return value.UserId == loginuser.id;
        });
        let str="";
        tasklist.forEach(function (task) {
          str += `<tr>
                            <td>${task.Date}</td>
                            <td>${task.Title}</td>
                            <td>${task.Message}</td>
                            <td><button onclick='updateValue(${task.id})'><i class="fas fa-edit"></i></button>
                            <button onclick="deleteValue(${task.id})"><i class="fas fa-trash-alt"></i></button></td>
                        </tr>`;
        });
        document.getElementById("tbody").innerHTML = str;

       }
      function getValueFromId(id){
        const  arr = JSON.parse(localStorage.getItem("dashboard-data"))
      
        if(arr!=null){
          const indexOfObject = arr.findIndex((object) => {
            return object.id === id;  
          });
          if(indexOfObject!=undefined && indexOfObject!=null && indexOfObject>-1){
            return {"index":indexOfObject,rowData:arr[indexOfObject]};
            
//rowData: {UserId: 2, id: 1, Date: "2022-10-31", Title: "qq", Message: "qq"}
          }else{
             return null;
          }
        }
        return null;
      }
      
     
      displayUserData();

// console.log(indexOfObject);
      //edit function start here
        function updateValue(id){
          document.getElementById("updateID").style.display = "inline-block";
          document.getElementById("addId").style.display = "none";

          let rowDataIndex=getValueFromId(id); 
          if(rowDataIndex!=null){
            document.getElementById('dashdate').value = rowDataIndex.rowData.Date;
            document.getElementById('dashname').value =  rowDataIndex.rowData.Title;
            document.getElementById('dashtextarea').value =  rowDataIndex.rowData.Message;
            document.getElementById('index').value =  rowDataIndex.index;
          }

        }

      // delete function start here
      function deleteValue(td) {
        let text = "are you sure...! you want to delete??";
        if (confirm(text) == true) {
          let arr = JSON.parse(localStorage.getItem("dashboard-data"))
          
          const indexOfObject = arr.findIndex((object) => {
            return object.id === td;

        //  console.log(xyz);
          });
          arr.splice(indexOfObject, 1);
         
          console.log(indexOfObject); 

         
         localStorage.setItem("dashboard-data",JSON.stringify(arr));
         displayUserData();

         
        } else {
          text = "You canceled!";
        }
      }

      // search function started

      function searcharray() {
        let searchtxt = document.getElementById("search").value;
        let a = JSON.parse(localStorage.getItem("dashboard-data"));
        const  tasklist = a.filter(function (value) {
          return value.UserId == loginuser.id;
        });
        if (searchtxt != "") {
         let str = "";
          tasklist.forEach(function (value) {
            if (value.Date.indexOf(searchtxt) > -1) {
              str += `<tr>
              <td>${value.Date}</td>
              <td>${value.Title}</td>
              <td>${value.Message}</td>
              <td><button onclick='updateValue(${value.id})'><i class="fas fa-edit"></i></button>
              <button onclick="deleteValue(${value.id})"><i class="fas fa-trash-alt"></i></button></td>
          </tr>`;
            }
           
            });
          document.getElementById("tbody").innerHTML = str;
        } else {
          displayUserData();
        }
      }
  


    