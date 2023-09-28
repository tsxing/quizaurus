/*
0. Write feature button. 
1. get entries of contentArray
2. make quiz form. show word, write def. 
2.0: model in write.html first. create clone
2.1: show entries[0][1], write entries[1][1]
3. submit button: checks work. gets total length of contentarray and how much user got right.
*/ 

var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

var form = document.querySelector('#form');
var shown_word = document.querySelector('#show_word');
var write_box = document.querySelector('#write_def');

console.log("length: ",contentArray.length);


var entries = Object.entries(contentArray[0]);
console.log("contentarrayI0:", entries[0][0]);
console.log("contentarrayI0:", entries[0][1]);
console.log("contentarrayI0:", entries[1][0]);
console.log("contentarrayI0:", entries[1][1]);
/*
var entries = Object.entries(contentArray[1]);
console.log("contentarrayI0:", entries[0][0]);
console.log("contentarrayI0:", entries[0][1]);
console.log("contentarrayI0:", entries[1][0]);
console.log("contentarrayI0:", entries[1][1]);*/

//constArray[i]; i changes. 
//we only want entries[0][1] and entries[1][1], quesiton + answer respectively. 
//we want p text to be question. user will input answer. 
//p text will be entries[0][1]. 

//THIS
//user should input entries[1][1]
//if value of input = entries[1][1] score ++
//submit button to check score; 
//if (input.value == entries[1][1])



for (i=0;i<(contentArray.length);i++){
  var entries = Object.entries(contentArray[i]);
  console.log("contentarrayI0:", entries[0][1]);
  console.log("contentarrayI0:", entries[1][1]);

  
  var clone_form = form.cloneNode(true);
  clone_form.style.display="flex"; 

  var clone_shown_word=shown_word.cloneNode(true);
  clone_shown_word.style.marginLeft ="40%";
  clone_shown_word.style.padding ="15px";
  var clone_write_box = write_box.cloneNode(true);
  clone_write_box.style.marginLeft="40%";

  
  clone_shown_word.innerHTML=entries[0][1];
  

  
  /*
  clone_form.id = i; 
  clone_shown_word.id = "id"+i;//make id the value of answer
  console.log(i);
  console.log(clone_shown_word.id);*/

  document.body.appendChild(clone_shown_word);
  document.body.appendChild(clone_write_box); 

    
} 

console.log(clone_write_box.value);


function submit_ans(){
  var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  
  var score =0;
  console.log("submit clicked");
  const bodyElement=document.body;
  const childNodesOfBody = document.body.childNodes; // All child nodes
  const childrenOfBody = document.body.children; // Only element nodes

  const inputs = document.body.querySelectorAll('input');
  console.log(inputs);
  
  
  for (let i = 0; i < inputs.length -1; i++) {
    console.log("i", i);
    
    var entries = Object.entries(contentArray[i]);
    console.log("the content:", contentArray[i]);
    console.log("user input:", inputs[i].value); //gets user input
    console.log("corect ans:", entries[1][1]); //the definition
    
    if (inputs[i+1].value === entries[1][1]){
      score++;
    }
  }
  console.log(score);
  document.getElementById("score").innerHTML = "Score out of "+ ((inputs.length)-1)+ ": "+ score;
  console.log("input length,", inputs.length-1);  
}
