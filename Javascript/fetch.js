function getFormData() {
  let userId = document.getElementById("userid").value;
  let empId = document.getElementById("empid").value;
  let title = document.getElementById("title").value;
  let completed;
  //   let city = document.getElementById("cities").value;
  if (document.getElementById("complete").checked) {
    completed = document.getElementById("complete").value;
  } else {
    completed = document.getElementById("complete").value = "Not Completed";
  }

  let user = {
    userid: userId,
    empid: empId,
    title: title,
    completed: completed,
  };
  return user;
}

function sendData() {
  let userData = getFormData();
  console.log(userData);

  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  p.then(function (response) {
    console.log(response.json());
  });
  console.log(p);
}

function getData() {
  let p = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  p.then(function (response) {
    let result = response.json();
    return result;
  }).then(function (result) {
    let tbl = `<table>
                <tr>
                <th>id</th>
                <th>userId</th>
                <th>Title</th>
                <th>body</th>
                </tr>
            `;
    
    result.map((element) => {
      tbl =tbl+
      `<tr>
            <td>${element.id}</td>
            <td>${element.userId}</td>
            <td>${element.body}</td>
            <td>${element.title}</td>
        </tr>`;
    });

    document.getElementById("data").innerHTML = tbl;
  });
}
