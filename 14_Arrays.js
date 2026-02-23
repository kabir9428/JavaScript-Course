let marks_class_12 = [91, 92, 93, 94, false, "Not Present"];
// marks_class_12[6] = 78;
// console.log(marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log(marks_class_12[6]); //give undefined because it does not exist
marks_class_12[6] = 78;//Adding a new value into the array
marks_class_12[0] = 98;
// console.log(marks_class_12.length);
// console.log(marks_class_12);
// console.log(typeof marks_class_12);

for(let i=0; i<Object.keys(marks_class_12).length; i++){
  console.log(marks_class_12[i]+" ");
}