// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello " + src);
}

//Inversion of control - if user has access to send function as an argument to another function then he has a full control of this function and he does anything from this function.This is called inversion of control.

//callback - to send function as an argument with anything.
loadScript(
  "https://cdn.jsdelivrbb.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  function goodMorning(error, src) {
    if (error) {
      console.log(error);
      sendEmergencyMessageToCeo();
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap1@5.3.3/dist/js/bootstrap1.bundle.min.js",
      function goodMorning(error, src) {
        if (error) {
          console.log(error);
          sendEmergencyMessageToCeo();
          return;
        }
        loadScript(
          "https://cdn.jsdelivrbb.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js",
          function goodMorning(error, src) {
            if (error) {
              console.log(error);
              sendEmergencyMessageToCeo();
              return;
            }
            loadScript(
              "https://cdn.jsdelivrbb.net/npm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js",
              function goodMorning(error, src) {
                if (error) {
                  console.log(error);
                  sendEmergencyMessageToCeo();
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivrbb.net/npm/bootstrap@5.3.3/dist/js/bootstrap5.bundle.min.js",
                  function goodMorning(error, src) {
                    if (error) {
                      console.log(error);
                      sendEmergencyMessageToCeo();
                      return;
                    }
                    loadScript(
                      "https://cdn.jsdelivrbb.net/npm/bootstrap@5.3.3/dist/js/bootstrap6.bundle.min.js",
                      function goodMorning(error, src) {
                        if (error) {
                          console.log(error);
                          sendEmergencyMessageToCeo();
                          return;
                        }
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
