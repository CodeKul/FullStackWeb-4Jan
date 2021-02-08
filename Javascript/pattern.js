//     *
//    * *
//   * * *

function pyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = "";
    for (var j = 1; j < n - i; j++) {
      str = str + " ";
    }
    for (var k = 0; k <= i; k++) {
      str = str + "* ";
    }
    console.log(str);
  }
}

pyramid(4);
