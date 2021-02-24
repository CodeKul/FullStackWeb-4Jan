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
