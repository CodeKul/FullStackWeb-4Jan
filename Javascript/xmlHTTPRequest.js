function getUserData() {
  let title = document.getElementById("title").value;
  let id = document.getElementById("id").value;
  let userId = document.getElementById("userid").value;
  let status = document.getElementById("status").checked;
  let completed;
  if (status) {
    completed = document.getElementById("status").value;
  } else {
    completed = document.getElementById("status").value = "Not completed";
  }
  let city = document.getElementById("cities").value;
  console.log(completed);

  let user = {
    title: title,
    id: id,
    userId: userId,
    status: completed,
  };
  console.log(user);
  return user;
}

function sendData() {
  let userData = getUserData();
  console.log(userData);
  let xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(userData));
  xhr.onload = function () {
    if (xhr.status == 201) {
      console.log(xhr.response);
    } else {
      console.log("Response status code:" + xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log("Network Error");
  };
}
function getData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log(xhr.response);
      let result = JSON.parse(xhr.response);
      console.log(typeof result);
      let tbl;
      result.map((element) => {
        tbl =
          tbl +
          `<tr>
              <td>${element.id}</td>
              <td>${element.userId}</td>
              <td>${element.body}</td>
              <td>${element.title}</td>
          </tr>`;
      });
      document.getElementById("data").innerHTML = tbl;
    }
  };
  xhr.onerror = function () {
    console.log("Network Error");
  };
}

// let hobby = document.getElementsByClassName("hobbies");
//   console.log(hobby);
//   let selected;
//   for (let i = 0; i < hobby.length; i++) {
//     if (hobby[i].checked) {
//       selected = hobby[i].value;
//     }
//   }
//   console.log(selected);
