let user1 = JSON.parse(localStorage.getItem('dashboard-data'));
loginuser = JSON.parse(getCookie("userdata"));

function getTodayDate() {
  let n = new Date();
  let y = n.getFullYear();
  let m1 = n.getMonth() + 1;
  let d = n.getDate().toString().padStart(2, "0");
  m1 = m1.toString().padStart(2, "0");
  return y + "-" + m1 + "-" + d;
}



let c = getTodayDate();
const toDoList = {
  taskList: [],
  init: function () {
    if (localStorage.getItem('dashboard-data') != null) {

      let data = JSON.parse(localStorage.getItem('dashboard-data'));
      this.taskList = data.filter(function (value) {
        return value.UserId == loginuser.id;
      });
    }
  },
  getTodayTask: function () {
    this.init();
    // get Today task List
    let strPresent = "";
    this.taskList.forEach(function (value) {
      if (value.Date.indexOf(c) > -1) {
        strPresent += `<tr>
              <td><span class="change-icon">
            
              <i class="far fa-circle"></i>
              <i class="far fa-check-circle"></i>
            </span></td>
              <td>${value.Date}</td>
              <td>${value.Title}</td>
              <td>${value.Message}</td>
              <td>
              <td><button onclick="editValueTodo(${value.id},getPastTask)"><i class="fas fa-edit"></i></button>
              <button><i class="fas fa-trash-alt" onclick="deleteValueTodo(${value.id},getTodayTask)"></i></button>
              </td>
          </tr>`;

      }
      console.log(c)
    });
    document.getElementById("tbodyPresent").innerHTML = strPresent;
  },
  getPastTask: function () {
    this.init();
    // past date function start
    let strPast = "";
   
      let todaydate = new Date(getTodayDate()+ ' :00:00:00');

      this.taskList.forEach(function (value) {
         let valueDate = new Date(value.Date);
          

        if (valueDate.getTime() < todaydate.getTime()) {
          strPast += `<tr>
          <td><span class="change-icon">
        
          <i class="far fa-circle"></i>
          <i class="far fa-check-circle"></i>
        </span></td>
         
          <td>${value.Date}</td>
          <td>${value.Title}</td>
          <td>${value.Message}</td>
          <td><button onclick="editValueTodo(${value.id},getPastTask)"><i class="fas fa-edit"></i></button>
          <button><i class="fas fa-trash-alt" onclick="deleteValueTodo(${value.id},getPastTask)"></i></button>
      </tr>`;

        }

       
      });
    
    document.getElementById("tbodyPast").innerHTML = strPast;
    // past date function end
  },
  getFutureTask : function (){
          // future date function start
          this.init();
      let strFuture = "";
      
      let todaydate = new Date(getTodayDate()+ ' :23:59:59');
       
        this.taskList.forEach(function (value) {
          let valueDate = new Date(value.Date);
          if (valueDate.getTime() > todaydate.getTime()) {
            strFuture += `<tr>
                <td><span class="change-icon">
              
                <i class="far fa-circle"></i>
                <i class="far fa-check-circle"></i>
              </span></td>
                <td>${value.Date}</td>
                <td>${value.Title}</td>
                <td>${value.Message}</td>
                <td><button onclick="editValueTodo(${value.id},getFutureTask)"><i class="fas fa-edit"></i></button>
                <button><i class="fas fa-trash-alt" onclick="deleteValueTodo(${value.id},getFutureTask)"></i></button>
            </tr>`;

          }
         
        });
      
      document.getElementById("tbodyFuture").innerHTML = strFuture;
      // future date function end
  }
}

document.getElementById("todayDate").value = getTodayDate();


toDoList.getTodayTask();
toDoList.getPastTask();
toDoList.getFutureTask();
let getPastTask = toDoList.getPastTask.bind(toDoList);
let getFutureTask = toDoList.getFutureTask.bind(toDoList);
let getTodayTask = toDoList.getTodayTask.bind(toDoList);

function deleteValueTodo(id,callback){
  let text = "are you sure...! you want to delete??";
  if (confirm(text) == true) {
    let arr = JSON.parse(localStorage.getItem("dashboard-data"))
    
    const indexOfObject = arr.findIndex((object) => {
      return object.id === id;

  //  console.log(xyz);
    });
    arr.splice(indexOfObject, 1);
    localStorage.setItem("dashboard-data",JSON.stringify(arr));
    callback();
   
  } else {
    text = "You canceled!";
  }
}

function editValueTodo(id, callback){


      let rowDataIndex=getValueFromId(id); 
          if(rowDataIndex!=null){
            document.getElementById('dashdate').value = rowDataIndex.rowData.Date;
            document.getElementById('dashname').value =  rowDataIndex.rowData.Title;
            document.getElementById('dashtextarea').value =  rowDataIndex.rowData.Message;
            document.getElementById('index').value =  rowDataIndex.index;
            document.getElementById('index').setAttribute('data-from',callback.toString()); 

           

              


            $('#exampleModal').modal('show');
          }
  
}

















