let p = fetch('https://api.zippopotam.us/us/33162')
p.then((Response)=>{
  console.log(Response.status);
  console.log(Response.ok);
  console.log(Response.text());
  console.log(Response.headers);
  return Response.json()
}).then((value2)=>{
  console.log(value2)
})