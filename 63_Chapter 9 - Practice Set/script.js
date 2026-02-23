// const loadScript = async (src)=>{
//   return new Promise((resolve, reject)=>{
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = ()=>{
//       resolve(src+" done success");
//     }
//     document.head.append(script);
//   })
// }

//Problem 1

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//   console.log(value);
// })

//Problem 2

// const main1 = async ()=>{
//   console.log(new Date().getMilliseconds());
//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//   console.log(a);
//   console.log(new Date().getMilliseconds());
// }
// main1();

//Problem 3

// const p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("This Promise will creates an error"));
//     }, 3000);
//   });
// };

// let b = async () => {
//   try {
//     let a = await p();
//     console.log(a);
//   } catch (error) {
//     console.log("This error got handled");
//   }
// };
// b();

//Problem 4

let p1 = async()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve(10);
    }, 1000);
  });
};

let p2 = async()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve(20);
    }, 2000);
  });
};

let p3 = async()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve(30);
    }, 3000);
  });
};

let run = async()=>{
  console.time("run");
  // let a1 = await p1(); //fetch first 10 products from the database
  // let a2 = await p2(); //fetch first 10 products from the database
  // let a3 = await p3(); //fetch first 10 products from the database
  // console.log(a1, a2, a3);

  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let values = await Promise.all([a1, a2, a3]); //because of parallel execution it takes less time 
  console.log(values);
  console.timeEnd("run");
}

run();