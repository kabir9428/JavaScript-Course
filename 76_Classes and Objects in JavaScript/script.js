class RailwayForm {
  submit(){
    alert(this.name +"  Your Form Submitted for train no: "+ this.trainno);
  }

  cancel(){
    alert(this.name +" Your form is cancelled for train no: "+ this.trainno);
  }
  fill(name, trainno){
    this.name = name;
    this.trainno = trainno;
  }
}
// Create a form for harry
let harryForm = new RailwayForm();
// Fill the form with harry's details

harryForm.fill("Harry", 1537373);
// Create a form for Rohan
let rohanForm = new RailwayForm();
let rohanForm1 = new RailwayForm();
// Fill the form with rohan's details
rohanForm.fill("Rohan", 7238494);
rohanForm1.fill("Rohan", 7238420);

harryForm.submit();
rohanForm.submit();
rohanForm.cancel();
rohanForm1.cancel();