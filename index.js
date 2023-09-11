let radiostuden = document.getElementById("radio-studen");
let radioteacher = document.getElementById("radio-teacher");
let radiointernalpersonnel = document.getElementById("radio-internalpersonnel");
var whocardnumber = document.getElementById("whocardnumber");
let x = 10
console.log(x)
function teacher() {
    whocardnumber.innerHTML = "<label>Teacher card number</label>"
}
function Student() {
    whocardnumber.innerHTML = "<label>Student card number</label>"
}
function internalpersonnel() {
    whocardnumber.innerHTML = "<label>Internalpersonnel card number</label>"
}
radioteacher.addEventListener("click", teacher);
radiostuden.addEventListener("click", Student);
radiointernalpersonnel.addEventListener("click", internalpersonnel);



