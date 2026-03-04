 
function sss(){
  const now = new Date();
  const h = now.getHours();
  const my_text = document.getElementById("p1");
  if(h=>6 && 12<h){
    my_text.textContent = "BBBBB";
  }
  if(h>=12 && h<17)
  {
    my_text.textContent = "CCCCCCCCC";
  }
  if(h>17 && h<6)
  {
    my_text.textContent = "DDDDDDDDDD";
  }
}

function submitForm() {
  const nume = document.getElementById("name").value; 

  const email = document.getElementById("email").value; 
  const mesaj = document.getElementById("story").value; 
  console.log(nume);
  console.log(email.includes("@"));
  const my_text1 = document.getElementById("p2");

  if((email.includes("@")) && (nume.length > 2) && (mesaj.length > 10)) {
    document.getElementById("p2").innerHTML = ":)";
    console.log("wadawdas");
  }
  else{
    document.getElementById("p2").innerHTML = "WAAAAAAAAAAAA";
  }
} 
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

sss();
 