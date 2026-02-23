// sessionStorage.setItem("name", "Harry");
// sessionStorage.getItem("name");
// sessionStorage.clear();
// sessionStorage.removeItem("name");

window.onstorage = (e) =>{ //e = event
  alert("changed");
  console.log(e);
}