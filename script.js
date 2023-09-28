var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear();
  flip_cards.innerHTML = '';
  contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

flashcardMaker = (text, delThisIndex) => {
  const flashcard = document.createElement("div");
  const flip_card_front = document.createElement('h2');
  const flip_card_back = document.createElement('h2');
  const del = document.createElement('i');

  flashcard.className = 'flashcard';

  flip_card_front.setAttribute("style", " padding: 15px; margin-top:30px");
  flip_card_front.textContent = text.my_question;

  flip_card_back.setAttribute("style", "text-align:center; display:none; color:black");
  flip_card_back.textContent = text.my_answer;

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem('items', JSON.stringify(contentArray));
    window.location.reload();
  })

  flashcard.appendChild(flip_card_front);
  flashcard.appendChild(flip_card_back);
  flashcard.appendChild(del);

  flashcard.addEventListener("click", () => {
    flashcard.style.position="relative";
    flashcard.style.backgroundColor="white";
    
    flip_card_back.style.position ="absolute";
    flip_card_back.style.transform=" translateY(50%)"
    flip_card_back.style.transform=" translateX(50%)"
    flip_card_back.style.transform="rotateX(180deg)";
     flip_card_back.style.top="50%";
    flip_card_back.style.left="50%";

    flip_card_front.style.position ="absolute";
    
    flashcard.style.transformStyle="preserve-3d";
    flashcard.style.transition=" transform 0.6s";
    
    console.log("clicked");
    if(flip_card_back.style.display == "none"){
      
      flip_card_back.style.display = "block";
      flip_card_back.style.transform="rotateX(180deg)";
      
      flip_card_front.style.display = "none";
      flashcard.style.transform="rotateX(180deg)";
      
      
    }
     
    else{
      flip_card_back.style.display = "none";
      flip_card_front.style.display = "block";
      flashcard.style.transform="none";
    }

  })

  document.querySelector("#flip_cards").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const flip_card_front = document.querySelector("#question");
  const flip_card_back = document.querySelector("#answer");

  let flashcard_info = {
    'my_question' : flip_card_front.value,
    'my_answer'  : flip_card_back.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  flip_card_front.value = "";
  flip_card_back.value = "";
}

for (i=0;i<contentArray.length;i++){
  console.log(contentArray[i]);
}



