onload = function() {
};

call = function(url) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    // xhr.response
  };

  xhr.open("GET", url);
  xhr.send();
};
