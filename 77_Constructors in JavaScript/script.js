class RailwayForm {
  constructor(giveName, trainno, address){
    console.log("Constructor Called..."+ giveName + " "+ trainno);
    this.name = giveName;
    this.trainno = trainno;
    this.address = address; 
  }

  preview(){
    alert(this.name +": Your form is for train number: " + this.trainno + " and your address is " + this.address);
  }

  submit(){
    alert(this.name +"  Your Form Submitted for train no: "+ this.trainno);
  }

  cancel(){
    alert(this.name +" Your form is cancelled for train no: "+ 0);
  }
  fill(name, trainno){
    this.name = name;
    this.trainno = trainno;
  }
}
// Create a form for harry
// let harryForm = new RailwayForm();
// Fill the form with harry's details

// harryForm.fill("Harry", 1537373);
// Create a form for Rohan
// let rohanForm = new RailwayForm();
// let rohanForm1 = new RailwayForm();
// Fill the form with rohan's details
// rohanForm.fill("Rohan", 7238494);
// rohanForm1.fill("Rohan", 7238420);

// harryForm.submit();
// rohanForm.submit();
// rohanForm.cancel();
// rohanForm1.cancel();

// let harryForm = new RailwayForm("Harry", 7247248);
// let rohanForm = new RailwayForm("Rohan", 3398924);
// let rohanForm1 = new RailwayForm("Rohan1", 2922492);

let harryForm = new RailwayForm("Harry", 7247248, "420, Pacific Ocean, Ocean, Bihar - 21231313");
harryForm.preview();
harryForm.submit();
harryForm.cancel();
harryForm.preview();