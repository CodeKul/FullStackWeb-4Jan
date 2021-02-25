function getFormData() {
  let userId = document.getElementById("userid").value;
  let empId = document.getElementById("empid").value;
  let title = document.getElementById("title").value;
  let completed;
  let city = document.getElementById("cities").value;
  if (document.getElementById("complete").checked) {
    completed = document.getElementById("complete").value;
  } else {
    completed = document.getElementById("complete").value = "Not Completed";
  }

  console.log("User Id:" + userId);
  console.log("Employee Id:" + empId);
  console.log("Title:" + title);
  console.log("Completed:" + completed);
  console.log("City:" + city);
  let emp = {
    userId: userId,
    empId: empId,
    title: title,
    completed: completed,
  };
  return emp;
}

function sendData() {
  let employeeData = getFormData();

  //XMLHttpRequest , Fetch ,Axios

  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xmlHttp.setRequestHeader("Content-type", "application/json");
  xmlHttp.send(JSON.stringify(employeeData));
  xmlHttp.onload = () => {
    console.log(xmlHttp.response);
  };

  xmlHttp.onerror = () => {
    console.log("Connection refused");
  };
}

function getData() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttp.setRequestHeader("Content-type", "application/json");
  xmlHttp.send();
  xmlHttp.onload = function () {
    if (xmlHttp.status == 200) {
      console.log(xmlHttp.response);
      let output = xmlHttp.response;
      
    }
  };
}
