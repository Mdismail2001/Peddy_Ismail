// console.log("sort js added")

// const sortBtn = document.addEventListener('click',function(){
//   const btn = document.getElementById('sort-btn');
//   console.log(btn);
 
// })


const sortBybtn = ()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayBysort(data.pets))
    .catch( error => console.log(error));
}

const sortContainer = document.getElementById("sort-categories");
const displayBysort = (pets) => {
    // sort pets array by price (ascending)
    pets.sort((a, b) => a.price - b.price);

    pets.forEach(item => {
        // console.log(price, img);

        const sortDiv = document.createElement('div')
        sortDiv.innerHTML=`<img class="w-auto h-50 mb-2 rounded" src="${item.image? item.image:""}"/>
                                <span> Price:${item.price? item.price:"Price Unknown"}$</span>
                                `
        sortContainer.append(sortDiv);
    });
};

