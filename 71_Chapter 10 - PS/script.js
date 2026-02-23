let url = "https://example.com/api/contests/wf2014";
let response = fetch(url);
response.then((v)=>{
  return v.json();
}).then((contests)=>{
  console.log(contests);
  ihtml = ""
  for (item in contests) {
    console.log(contests[item]);
    ihtml += `<div class="card" style="width: 22rem;">
    <img src="https://th.bing.com/th/id/OIP.NRyEtEWWtz5b2Sr8U0YmRQAAAA?rs=1&pid=ImgDetMain" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${contests[item].name}</h5>
      <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
      <p class="card-text">In 24 Hours? ${contests[item].in_24_hours}</p>
      <p>Starts at: ${contests[item].start_time}
      <p>Starts at: ${contests[item].end_time}
      <a href="${contests[item].url}" class="btn btn-primary mx-4">Visit Contest</a>
    </div>
  </div>`
  }
  cardContainer.innerHTML = ihtml;
});

//************Note APP (Remaining Questions of Practice Set)**************
let a = prompt("Enter your notes here: ");
if(a){
  localStorage.setItem("note", a);
}
n = localStorage.getItem("note");
alert(`Your note is: ${n}`);

let c = confirm("Do you want to delete your note?");
if(c){
  localStorage.removeItem("note");
  alert("Note deleted Successfully");
}