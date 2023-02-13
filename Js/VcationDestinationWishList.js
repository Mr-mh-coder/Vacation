(function(){
 
    'use strict';
    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener("submit", handleFormSubmit);
    
    function handleFormSubmit(even){
        even.preventDefault();
        const destName = even.target.elements["name"].value;
        const destLocation = even.target.elements["location"].value;
        const destPhoto = even.target.elements["photo"].value;
        const destDescription = even.target.elements["description"].value;
        for(let i = 0; i<detailsForm.length ; i++){
            detailsForm.elements[i].value = "";
        }
        const destCard = createDestinationCard( destName, destLocation, destPhoto, destDescription);
    
        const WishListContainer = document.getElementById('destination-container');
        if(WishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List";
        }
        //add the card
        document.querySelector("#destination-container").appendChild(destCard);
    }
    function createDestinationCard(name, location, photo, description){
        const card = document.createElement("div");
        card.className = 'card';
    
        const img = document.createElement("img");
        img.setAttribute('alt', name);
    
        const constantphoto = "../pic/images2.jpg";
    
        if(constantphoto.length === 0){
            img.setAttribute('src', constantphoto);
        }
        else{
            img.setAttribute('src', photo);
        }
        card.appendChild(img);
    
        const cardBody = document.createElement("div");
        cardBody.className = 'card-body';
    
        const cardTitle = document.createElement("h3");
        cardTitle.innerText = name; 
        cardBody.appendChild(cardTitle);
    
        const cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);
    
        if(description.length !== 0){
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }
    
        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = "Remove";
    
        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.append(cardDeleteBtn);
    
        card.appendChild(cardBody);
    
        return card;
    }
    
    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
    } 
})();