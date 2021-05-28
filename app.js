
var x = 10;
var y = 5;
var z = x + y;
var not = "This is firs prototype "
console.log(z);

alert(not);
var my = prompt("wirte your name ");
alert("welcom " +my);
var my = prompt("wirte your age ");


if (z >= my){
  document.write("<p> you are young </p>")
  document.write("your age is " +my )
  console.log(my);
}else {
  document.write("<p> you are adult </P>")
  document.write("your age is "+my)
  console.log(my);
}
function myFunction() {
  var r = confirm("Change the background?");
  if (r == true) {
    document.body.style.backgroundColor = "green";
  }
  
}
