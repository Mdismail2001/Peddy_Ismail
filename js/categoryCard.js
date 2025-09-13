// console.log("category card added")

// get category card info from database using API
const loadCategoryCard = ()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayCategoryCard(data.pets))
        // .then(data => console.log(data))
    .catch( error => console.log(error));

};

loadCategoryCard();


// display category card in index page 
const cardsContainer = document.getElementById('card_container');
const displayCategoryCard = (pets)=>{
    // console.log(pets);
    pets.forEach(item => {
        // console.log(item);
        const cardDiv = document.createElement('div');
            cardDiv.classList ="";
            cardDiv.innerHTML = `<img class="w-auto h-50 mb-5" src="${item.image ? item.image : 'https://static.vecteezy.com/system/resources/previews/012/084/533/non_2x/cartoon-wild-animals-on-white-background-vector.jpg'}"/>
                                <h1></h1>
                                <div><img src=""/><p> Breed: ${item.breed ? item.breed : "breed unknown"}</p></div>
                                <div><img src=""/><p> Birth: ${item.date_of_birth ? item.date_of_birth : "date_of_birth unknown"}</p></div>
                                <div><img src=""/><p> Gender: ${item.gender ? item.gender : "gender unknown"}</p></div>
                                <div><img src=""/><p> price: ${item.price ? item.price : "price unknown"}$</p></div>

                                `

            cardsContainer.append(cardDiv);
        
    });
    
};