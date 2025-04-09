for (var i = 0; i < 3; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j);
      }, 1000);
    })(i);
  }
  