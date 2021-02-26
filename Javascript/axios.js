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
  axios
    .post("https://jsonplaceholder.typicode.com/posts", userData, {
      "Content-type": "application/json",
    })
    .then((response) => {
      console.log(response.data);
    });
}
