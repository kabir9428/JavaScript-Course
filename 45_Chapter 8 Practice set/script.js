// google.addEventListener('click', function(e) {
  // let url = "https://www.google.com";
//   window.location = "https://www.google.com";
//   win.focus();
// });

// twitter.addEventListener('click', function(e) {
  // let url = "https://www.google.com";
//   window.location = "https://www.twitter.com";
//   win.focus();
// });

// instagram.addEventListener('click', function(e) {
  // let url = "https://www.google.com";
//   window.location = "https://www.instagram.com";
//   win.focus();
// });

//  Problem 4

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json();
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 3000);

// Problem 5
setInterval(async function() {
  document.querySelector("#bulb").classList.toggle('bulb1');
}, 300);